var time = 0
let currentSuscribe = false

setInterval(() => time += 1, 1000);

function startGenesysSDK(deploymentId, cobrowseLicense) {
    return new Promise(() => {
        (function (g, e, n, es, ys) {
            g["_genesysJs"] = e;
            g[e] = g[e] ||
                function () { (g[e].q = g[e].q || []).push(arguments); };
            g[e].t = 1 * new Date();
            g[e].c = es;
            ys = document.createElement("script");
            ys.async = 1;
            ys.src = n;
            ys.charset = "utf-8";
            document.head.appendChild(ys);
            runGenesysCommands()
        })(
            window, "Genesys", "https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js",
            { environment: "prod", debug: false, deploymentId: deploymentId }
        );

        

        (function (w, t, c, p, s, e) {
            p = new Promise(function (r) {
                w[c] = {
                    client: function () {
                        if (!s) {
                            s = document.createElement(t);
                            s.src = "https://js.cobrowse.io/CobrowseIO.js";
                            s.async = 1;
                            e = document.getElementsByTagName(t)[0];
                            e.parentNode.insertBefore(s, e);
                            s.onload = function () {
                                r(w[c]);
                            };
                        }
                        return p;
                    },
                };
            });
        })(window, "script", "CobrowseIO");
    });
}

function setCustomAttributesCobrowse(conversationId) {
    CobrowseIO.customData = {
        genesys_conversation_id: conversationId,
    };
}

function runGenesysCommands() {
    suscribeJourney()
    suscribeMessageService()
}

function suscribeJourney() {
    Genesys("subscribe", "Journey.ready", function () {
        console.log("Journey plugin is ready.");

        this.journeyRecord("journey_ready", { text: 'Journey plugin is ready', })

        Genesys("command", "Journey.pageview", {
            pageTitle: "digital_predictive",
            pageLocation: location.pathname,
            pageLocation: location.href,
        });

        Genesys("command", "Journey.trackIdleEvents", {
            idleEvents: [
                { idleAfterSeconds: 30, eventName: "idle_for_40_sec" },
                { idleAfterSeconds: 50, eventName: "idle_for_50_sec" },
                { idleAfterSeconds: 60, eventName: "idle_for_60_sec" }
            ],
        });

        Genesys("subscribe", "Journey.qualifiedWebMessagingOffer", ({ data }) => {
            console.log("Second: " + time + "  qualified web messaging", data);
            window.dispatchEvent(new CustomEvent("genesys.journey.data", { detail: data }));

            const rejectBody = {
                actionId: data?.journeyContext?.triggeringAction?.id,
                actionState: "rejected"
            }

            setTimeout(() => {
                console.log("Reject response", rejectBody)
                Genesys("command", "Journey.recordActionStateChange", rejectBody);
            }, 10000);
        }
        );

        setTimeout(() => {
            this.journeyRecord("idle_for_10_sec", undefined)
            data = {
                "state": "qualified",
                "engageContent": { "offerText": "No te enredes con la selección de tu crédito ¡Consúltame!" }
            }
            window.dispatchEvent(new CustomEvent("genesys.journey.data", { detail: data }));
        }, 10000);

        Genesys("command", "Journey.trackClickEvents", {
            clickEvents: [
                { selector: "#btn_exit_header", eventName: "close_page_button_clicked" },
            ],
        });

        Genesys('subscribe', 'MessagingService.ready', () => {
            window.dispatchEvent(new CustomEvent("genesys.chat.ready"));
            this.journeyRecord("message_service_ready", { text: 'Active message service on the client', })
        });
    });
}


function suscribeMessageService() {
    if (currentSuscribe) { return }

    // Variable to avoid duplicity in listening to events
    currentSuscribe = true
    Genesys("subscribe", "MessagingService.messagesReceived", function ({ data }) {
        

        const eventType = data?.messages?.[0]?.events?.[0]?.eventType;
        const type = data?.messages?.[0]?.events?.[0]?.coBrowse?.type;
        

        if (JSON.stringify(data, null, 2).includes("CoBrowse")) {
            if (data.messages[0].events[0].coBrowse.type == "Offering") {
                this.journeyRecord("click_cobrowse_request", { text: 'Cobrowse session requested', })
                parent.Genesys("command", "CobrowseService.acceptSession", {
                    joinCode: data.messages[0].events[0].coBrowse.sessionJoinToken,
                    sessionId: data.messages[0].events[0].coBrowse.sessionId
                },
                    () => { // fulfilled callback 
                        window.dispatchEvent(new CustomEvent("cobrowse.remove"));
                        this.journeyRecord("cobrowse_started", { text: 'Cobrowse is logged on (Genesys)' })
                    }, err => { // rejected callback
                        this.journeyRecord("cobrowse_rejected",
                            { text: `Could not accept Co-browse session, error code: ${err.code}`, })
                    }
                );
            }
        }
        else {
            window.dispatchEvent(new CustomEvent("genesys.chat.message", { detail: data?.messages[0] }));
        }
    });

    Genesys("subscribe", "MessagingService.typingReceived", function ({ data }) {
        window.dispatchEvent(new CustomEvent("genesys.chat.typingReceived",
            { detail: data, bubbles: true, cancelable: true }));
    });

    Genesys("subscribe", "MessagingService.conversationDisconnected", function ({ data }) {
        window.dispatchEvent(new CustomEvent("genesys.chat.conversationDisconnected",
            { detail: data, bubbles: true, cancelable: true }));
        this.journeyRecord("chat_finished", { text: 'Chat completed by advisor', })
        this.resetConversation()
        console.log("CONVERSATION DISCONNECTED")
    });

    Genesys("subscribe", "MessagingService.restored", function (data) {
        window.dispatchEvent(new CustomEvent("genesys.chat.restoreMessages", { detail: data?.data?.messages }));
    });

    Genesys("subscribe", "Conversations.opened", function () { console.log("Conversations.opened") });

    Genesys("subscribe", "Conversations.started", function () { console.log("Conversations.started") });

    Genesys("subscribe", "MessagingService.error", function ({ data }) {
         console.log('MESSAGE SERVICE ERROR', data)
         window.dispatchEvent(new CustomEvent("genesys.chat.ERROR",
         { detail: data, bubbles: true, cancelable: true }));
         ; });

    Genesys("subscribe", "MessagingService.oldMessages", function({ data }) {console.log(data);});

    Genesys("subscribe", "MessagingService.sessionCleared", () => {
        console.log('MessagingService.sessionCleared');
    });

    Genesys("subscribe", "MessagingService.offline", () => {
        console.log('MessagingService.offline');
    });

    Genesys("subscribe", "MessagingService.reconnecting", () => {
        console.log('MessagingService.reconnecting');
    });

    Genesys("subscribe", "MessagingService.reconnected", () => {
        console.log('MessagingService.reconnected');
    });

    Genesys("subscribe", "MessagingService.conversationDisconnected", (e) => {
        console.log('MessagingService.conversationDisconnected', e);
    });

    Genesys("subscribe", "MessagingService.readOnlyConversation", (e) => {
        console.log('MessagingService.readOnlyConversation', e);
    });

    Genesys("subscribe", "MessagingService.conversationReset", (e) => {
        console.log('MessagingService.conversationReset', e);
    });

    Genesys("subscribe", "MessagingService.conversationCleared", (e) => {
        console.log('MessagingService.conversationCleared', e);
    });

    Genesys("subscribe", "MessagingService.error", function ({ data }) {
        console.log('MessagingService.error', data);
    });


}

function journeyRecord(eventName, customAttributes) {
    
    window.dispatchEvent(new CustomEvent("error_send_message"));
    Genesys("command", "Journey.record", {
        eventName: eventName,
        customAttributes: customAttributes || '{}'
    });
}

function sendMessage(message) {
    
    Genesys("command", "MessagingService.sendMessage", { message: message },
        (data) => { },
        (error) => {
            this.resetConversation()
            this.journeyRecord("error_send_message",
                { text: `Error send message, error code: ${error}`, })

            console.log(`Error send message`, error)
        }
    );
}

function closeInteraction() {
    console.log("entra a cerrar la interaccion")

    Genesys("command", "MessagingService.clearConversation", 
    {}, 
    function() {
        console.log("Cierre de chat correctamente")
    },
    function() {
        console.log("Cierre de chat no realizado")
    });

    
}

function resetConversation() {
    Genesys("command", "MessagingService.resetConversation",
        (_data) => {
            this.journeyRecord("reset_conversation_successful",
                { text: `conversation restored successful`, })
        },
        (error) => {
            this.journeyRecord("reset_conversation_rejected",
                { text: `Conversation restored successful, error code: ${error}`, })
            console.log(`error reset conversation`, error)
        }
    );
}

function sendTyping() {
    Genesys("command", "MessagingService.sendTyping");
}

function setCustomAttributes(data) {
    Genesys("command", "Database.set", { messaging: { customAttributes: data } });
}

function reset()
{
    Genesys("command", "MessagingService.resetConversation");
}





try{"use strict";var responsiveWidth=window.matchMedia("(max-width: 768px)");function activaAcordeon(e,t){document.querySelectorAll(e)&&estadoAcordeon(document.querySelectorAll(e),t)}function estadoAcordeon(e,t){e.forEach(function(e){detectaWidthScreen(responsiveWidth,e),responsiveWidth.addListener(detectaWidthScreen),seteaLinkAcordeon(e,t);var n=e.querySelector(".accordion-link");if(void 0!==e.dataset.startopen&&"true"===e.dataset.startopen){var s=e.querySelector(".accordion-link");setTimeout(function(){seteaValoresClases(document.querySelector(s.getAttribute("href")))},800)}void 0!==e.dataset.responsive&&"true"===e.dataset.responsive&&(n.classList.add("noDisplay"),n.addEventListener("click",function(e){e.preventDefault()}),seteaValoresClases(document.querySelector(n.getAttribute("href"))))})}function seteaLinkAcordeon(e,t){e.firstElementChild.classList.contains("small"),e.firstElementChild.addEventListener("click",function(e){e.preventDefault(),accionEvAcordeon(this,t)})}function conteoCaracteres(e){var t=e.children;t[2]&&(t[2].innerHTML.length>28&&(e.style.lineHeight="22px"))}function seteaValoresClases(e){e.classList.add("open"),e.previousElementSibling.classList.add("openLink"),e.getElementsByTagName("div")[0].classList.add("show-content"),e.style.height=obtieneHeight(e)}function obtieneHeight(e){return e.getElementsByTagName("div")[0].offsetHeight<100?"120px":e.getElementsByTagName("div")[0].offsetHeight+40+"px"}function cierraToggle(e){e.style.height=0,e.classList.remove("open"),e.getElementsByTagName("div")[0].classList.remove("show-content"),e.previousElementSibling.classList.remove("openLink")}function accionEvAcordeon(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector(e.getAttribute("href")),s=e.offsetParent;document.querySelector(e.getAttribute("href"))&&(n.classList.contains("open")?cierraToggle(n):(t&&s.querySelectorAll(".accordion-wrapper").forEach(function(e){e.style.height=0,e.classList.contains("open")&&e.classList.remove("open")}),seteaValoresClases(document.querySelector(e.getAttribute("href")))),animaIcono(e))}function animaIcono(e){var t=document.querySelectorAll(".iconAc");t.length>0&&(elIcon=e.querySelector(".iconAc"),elImgFront=e.querySelector(".iconAc").firstElementChild,elImgFrontActivo=elImgFront.classList.contains("activo"),t.forEach(function(e){elImgFrontActivo&&(e.getElementsByClassName("back")[0].classList.remove("activo"),e.getElementsByClassName("front")[0].classList.add("activo"))}),elIcon&&(elIcon.getElementsByClassName("front")[0].classList.contains("activo")?(elIcon.getElementsByClassName("front")[0].classList.remove("activo"),elIcon.getElementsByClassName("back")[0].classList.add("activo")):(elIcon.getElementsByClassName("front")[0].classList.add("activo"),elIcon.getElementsByClassName("back")[0].classList.remove("activo"))))}function detectaWidthScreen(e,t){return e.matches&&delete t.dataset.responsive,t}
}catch(e){console.log("Module 'fenix_modulos_diseno': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2011, 2012 - All Rights reserved.  **/
(function(){
var w=window,i$=function(){
if(i$.qel){
return i$.qel.apply(this,arguments);
}
};
w.i$=i$;
i$.global=w;
if(typeof (console)=="undefined"){
var f=function(){
};
console={log:f,debug:f,info:f,warn:f,error:f,assert:f};
}
i$.partial=function(f){
var _1=i$.toArray(arguments).slice(1);
return function(){
var _2=_1.slice(0),_3=i$.toArray(arguments),i=0;
for(;i<_2.length;i++){
if(_2[i]===undefined){
_2[i]=_3.shift();
}
}
_2.push.apply(_2,_3);
return f.apply(this,_2);
};
};
i$.scope=function(s,f){
var of=f;
f=function(){
return (i$.isString(of)?s[of]:of).apply(s,arguments);
};
return i$.partial.apply(this,i$.toArray(arguments).slice(1));
};
i$.error=function(_4,_5){
console.error(_5||new Error(_4));
};
i$.forEach=function(_6,f,_7){
if(_7==null){
_7=0;
}
for(var i=(_7>=0)?_7:0;i<_6.length;i++){
f(_6[i],i,_6);
}
};
i$.forIn=function(o,f){
for(var i in o){
if(Object.prototype.hasOwnProperty.call(o,i)){
f(o[i],i,o);
}
}
};
i$.each=function(o,f,s){
if(s){
f=i$.scope(s,f);
}
if(o){
if(o instanceof Array||typeof o.length==="number"){
i$.forEach(o,f);
}else{
i$.forIn(o,f);
}
}
};
i$.some=function(a,f,s){
if(s){
f=i$.scope(s,f);
}
for(var i=0;i<a.length;i++){
if(f(a[i])){
return true;
}
}
return false;
};
i$.every=function(o,f,s){
if(s){
f=i$.scope(s,f);
}
return !i$.some(o,function(_8){
return !f(_8);
});
};
i$.wrap=function(o,n,f){
var fn=o[n];
o[n]=function(){
return f.call(this,fn,arguments);
};
o[n]._wrapped=fn;
return o[n];
};
i$.unwrap=function(o,n){
var fn=o[n];
if(fn&&fn._wrapped){
o[n]=fn._wrapped;
}
return o[n];
};
i$.copyShallow=function(o){
var r=i$.isArrayLike(o)?[]:{};
i$.forIn(o,function(v,k){
r[k]=v;
});
return r;
};
var _9=function(_a,_b,_c,_d){
if(_c||_b[_d]===undefined){
_b[_d]=function(){
return this[_a][_d].apply(this[_a],arguments);
};
}
},_e=function(_f,_10,_11,_12){
if(_11||_10[_12]===undefined){
_10[_12]=function(){
return _f[_12].apply(_f,arguments);
};
}
};
i$.shadow=function(s,t,_13,_14){
i$.each(_13,i$.partial(i$.isString(s)?_9:_e,s,t,_14));
};
var _15=function(_16,c,s){
var i,p,ts=s||i$.global;
for(i=0;ts!=null,i<_16.length,p=_16[i];i++){
if(ts[p]==null){
if(c){
ts[p]={};
}else{
ts=null;
break;
}
}
ts=ts[p];
}
return ts;
};
i$.fromPath=function(n,c,s){
var _17=n.split(".");
return _15(_17,c,s);
};
i$.toPath=function(n,v,s){
var _18=n.split("."),p=_18.pop(),o=_15(_18,true,s);
o[p]=v;
return v;
};
i$.cachedFn=function(f,s){
var val;
var fn=function(){
if(!fn.called){
fn.called=true;
val=f.apply(s,arguments);
}
return val;
};
return fn;
};
i$.xhrFmts={text:function(xhr){
return xhr.responseText;
},json:function(xhr){
return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(xhr.responseText.replace(/"(\\.|[^"\\])*"/g,"")))&&eval("("+xhr.responseText+")");
},xml:function(xhr){
return xhr.responseXML;
},javascript:function(xhr){
if((/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(str.replace(/"(\\.|[^"\\])*"/g,"")))){
throw new SyntaxError("Invalid characters in javascript object");
}else{
return eval("("+xhr.responseText+")");
}
}};
})();
(function(){
var i$=window.i$;
(function(ua){
var _19=function(_1a){
return parseFloat(_1a);
},_1b=[["IE",/MSIE\s*([\S]+)*/],["FF",/Firefox\/([\S]+)*/],["Opera",/Opera[\s\/]([\S]+)*/],["Safari",/Version\/([\S]+)*[\s\S]*Safari/],["Chrome",/Chrome\/([\S]+)*/],["WebKit",/AppleWebKit\/([\S]+)*/]];
i$.each(_1b,function(_1c){
var m=_1c[1].exec(ua);
if(m&&m.length>1){
i$["is"+_1c[0]]=_19(m[1]);
}
});
})(navigator.userAgent);
var _1d=document.documentMode;
if(_1d&&_1d!=5&&Math.floor(i$.isIE)!=_1d){
i$.isIE=_1d;
}
i$.isNode=function(o){
return typeof o==="object"&&typeof o.nodeType==="number"&&typeof o.nodeName==="string";
};
i$.isFunction=function(o){
return typeof o==="function"||o instanceof Function;
};
i$.isObject=function(o){
return typeof o==="object";
};
i$.isArray=function(o){
if(typeof Array.isArray==="function"){
return Array.isArray(o);
}else{
return Object.prototype.toString.call(o)==="[object Array]";
}
};
i$.isString=function(o){
return typeof o==="string";
};
i$.isNumber=function(o){
return typeof o==="number";
};
i$.isBoolean=function(o){
return typeof o==="boolean";
};
i$.isLikeArray=function(o){
return o instanceof Array||typeof o.length==="number";
};
i$.toArray=function(o){
return Array.prototype.slice.call(o);
};
if(i$.isIE){
var _1e=i$.toArray;
i$.toArray=function(o){
try{
return _1e(o);
}
catch(err){
var a=new Array(o.length);
for(var i=0;i<o.length;i++){
a[i]=o[i];
}
return a;
}
};
}
var _1f=(document.readyState==="complete"),_20=[],_21=[],_22=false;
i$._initPage=function(){
var fn;
_1f=true;
if(window.detachEvent){
window.detachEvent("onload",i$._initPage);
}
while(_20.length>0){
if(fn=_20.shift()){
try{
fn();
}
catch(err){
console.log(err);
}
}
}
};
i$._exitPage=function(){
var fn;
while(_21.length>0){
if(fn=_21.shift()){
try{
fn();
}
catch(err){
console.log(err);
}
}
}
};
i$._addEvent=function(e,f,o){
var w=o?o:window;
var s=w.attachEvent?e:e.substring(2);
var a=w.attachEvent||w.addEventListener;
a(s,function(){
f.apply(w,arguments);
},false);
};
if(!_1f){
i$._addEvent("onload",i$._initPage);
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",i$._initPage,false);
}
}
i$.addOnLoad=function(f,o){
if(o){
f=i$.scope(o,f);
}
if(_1f){
f();
}else{
_20.push(f);
}
};
i$.addOnUnload=function(f,o){
if(!_22){
i$._addEvent("onunload",i$._exitPage);
_22=true;
}
if(o){
f=i$.scope(o,f);
}
_21.push(f);
};
var mx=function(o,m){
for(var p in m){
if(m.hasOwnProperty(p)){
o[p]=m[p];
}
}
},mxn=function(o,m,_23){
i$.forEach(_23,function(p){
if(m.hasOwnProperty(p)){
o[p]=m[p];
}
});
};
i$.mash=function(o){
i$.forEach(arguments,function(v){
mx(o,v);
},1);
return o;
};
i$.mashSpec=function(n,o){
i$.forEach(arguments,function(v){
mxn(o,v,n);
},2);
return o;
};
i$.augment=function(f){
var r=f;
if(f&&f.prototype){
f=f.prototype;
i$.mash.apply(i$,arguments);
}
return r;
};
i$.make=(function(){
var l=function(){
};
return function(o){
l.prototype=o;
o=new l();
return i$.mash.apply(i$,arguments);
};
})();
var _24=/^\s+/g;
i$.trim=function(str){
str=str.replace(_24,"");
var i=str.length-1;
while(str.charAt(i)==" "||str.charAt(i)=="\t"||str.charAt(i)=="\n"||str.charAt(i)=="\r"){
i--;
}
return str.substring(0,i+1);
};
var _25=i$.isArray,_26=i$.isObject;
i$.merge=function(_27,_28,_29){
var _29=_29||[],v,c;
_28=_28||i$.global;
if(_25(_27)&&_25(_28)){
_28.push.apply(_28,_27);
}else{
for(var x in _27){
if(_27.hasOwnProperty(x)){
v=_27[x],c=_28[x];
if(c!=null&&((_25(v)&&_25(c))||(_26(v)&&_26(c)))){
_28[x]=i$.merge(v,c,_29.concat(x));
}else{
_28[x]=v;
}
}
}
}
return _28;
};
var _2a;
i$.isRTL=function(_2b){
if(!_2a){
_2a=i$.fromPath("ibmCfg.themeConfig.RTLMap");
}
var _2c=_2a||{"iw":1,"he":1,"ar":1};
return (_2b.substring(0,2) in _2c);
};
})();


}catch(e){console.log("Module 'wp_client_main': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2011, 2012 - All Rights reserved.  **/
(function(){
var i$=window.i$;
i$.Promise=function(){
this._cbs=[];
this._stat=-1;
};
i$.promise={};
i$.promise.Promise=i$.Promise;
i$.mash(i$.promise,{isPromise:function(o){
return o&&i$.isFunction(o.then);
},resolved:function(o){
var p=new i$.Promise();
p.resolve(o);
return p;
},rejected:function(_1){
var p=new i$.Promise();
p.reject(_1);
return p;
},join:function(_2){
var _3=new i$.Promise(),_4=new Array(_2.length),_5=0,_6=false,_7=function(){
if(++_5>=_4.length){
_3[_6?"reject":"resolve"](_4);
}
};
if(_2.length>0){
i$.each(_2,function(p,i){
p.then(function(v){
_4[i]=v;
_7();
},function(e){
_6=true;
_4[i]=e;
_7();
});
});
}else{
_3.resolve([]);
}
return _3;
}});
i$.mash(i$,{when:function(o){
return i$.promise.isPromise(o)?o:i$.promise.resolved(o);
},whenAll:function(o){
var a=[];
i$.each(arguments,function(p){
a.push(i$.when(p));
});
return i$.promise.join(a);
}});
i$.promise.when=i$.when;
i$.promise.whenAll=i$.whenAll;
i$.Promise.prototype={_fin:function(v,s){
if(this._stat!==-1){
throw new Error("Promise already resolved");
}
this._v=v;
this._stat=s;
this._cbk();
return this;
},_cbk:function(){
var st=this._stat,_8=this._cbs,v=this._v,f;
if(st===0){
if(i$.promise.isPromise(v)){
while(_8.length>0){
v.then.apply(v,_8.shift());
}
}
}
while(_8.length>0){
f=_8.shift()[st];
if(f){
try{
f(v);
}
catch(err){
}
}
}
},_delegate:function(fn){
var p=new i$.Promise();
this.then(i$.partial(fn,p),i$.scope(p,"reject"));
return p;
},resolve:function(v){
return this._fin(v,0);
},reject:function(e){
return this._fin(e,1);
},progress:function(p){
i$.each(this._cbs,function(_9){
if(_9[2]){
_9[2](p);
}
});
return this;
},then:function(_a,_b,_c){
var p=new i$.Promise();
this._cbs.push([function(v){
try{
if(_a){
var rv=_a(v);
if(rv!==undefined){
v=rv;
}
}
p.resolve(v);
}
catch(exc){
p.reject(exc);
}
},function(e){
var rv=e;
try{
if(_b){
rv=_b(e);
if(rv===undefined){
rv=e;
}
}
}
catch(exc){
rv=exc;
}
p.reject(rv);
},_c]);
if(this._stat!==-1){
this._cbk();
}
return p;
},call:function(_d,_e){
return this._delegate(function(p,_f){
if(_f&&i$.isFunction(_f[_d])){
p.resolve(_f[_d].apply(_f,_e));
}else{
p.reject(new Error(_d+" is not a function on "+o));
}
});
},get:function(_10){
return this._delegate(function(p,_11){
if(_11){
p.resolve(_11[_10]);
}else{
p.reject(new Error(_11+" is null or undefined"));
}
});
}};
i$.onLoadPromise=new i$.Promise();
i$.addOnLoad(function(){
i$.onLoadPromise.resolve(true);
});
})();
(function(){
var i$=window.i$;
i$.getXHR=typeof XMLHttpRequest!=="undefined"?function(){
return new XMLHttpRequest();
}:function(){
return new ActiveXObject("MSXML2.XMLHTTP.3.0");
};
i$.toQuery=function(o){
var q=[];
var enc=encodeURIComponent;
i$.each(o,function(v,k){
var key=enc(k)+"=";
if(i$.isString(v)){
q.push(key+enc(v));
}else{
if(i$.isArray(v)){
var key=enc(k)+"=";
i$.each(v,function(av,i){
q.push(key+enc(av));
});
}
}
});
return q.join("&");
};
i$.addQueryString=function(u,o){
if(o){
var p=u&&u.indexOf("?")!==-1,t=p?"&":"?";
u+=t+i$.toQuery(o);
}
return u;
};
i$.fromQuery=function(q){
var o={};
var dec=decodeURIComponent;
i$.each(q.split("&"),function(av,i){
var p=av.split("="),k=dec(p[0]),v=dec(p[1]),cv=o[k];
if(cv){
if(!i$.isArray(cv)){
cv=o[k]=[cv];
}
cv.push(v);
}else{
o[k]=v;
}
});
return o;
};
i$.xhr=function(_12,_13){
var _12=_12||"GET",_14=new i$.Promise(),url=_13.url||"",_15=_13.sync||false,cb=_13.callback||function(){
},_16=_13.responseType||"text",_17=_13.postData||null,_18=_13.timeout||null,xhr=i$.getXHR(),_19=false,_1a=false;
var _1b=function(){
if(xhr.readyState===4){
xhr.onreadystatechange=i$.isIE<=8?new Function():null;
var _1c=function(){
if(xhr.status>=400){
var err=new Error(xhr.status+": "+xhr.responseText);
try{
cb(err,xhr);
}
finally{
if(!_19){
_19=true;
_14.reject({data:err,xhr:xhr});
}
}
}else{
try{
var ret="";
if(i$.xhrFmts[_16]){
ret=i$.xhrFmts[_16](xhr);
}
}
catch(err){
cb(err,xhr);
return;
}
try{
cb(ret,xhr);
}
finally{
if(!_19){
_19=true;
_14.resolve({data:ret,xhr:xhr});
}
}
}
};
if(xhr.timeout){
window.setTimeout(function(){
if(!_1a){
_1c();
}
},0);
}else{
_1c();
}
}
};
if(!_15){
xhr.onreadystatechange=_1b;
}
xhr.open(_12,url,!_15);
i$.each(_13.headers,function(v,k){
xhr.setRequestHeader(k,v);
});
if(_18){
xhr.timeout=_18;
xhr.ontimeout=function(){
_1a=true;
if(!_19){
_19=true;
_14.reject({data:"timeout",xhr:xhr});
}
};
}
xhr.send(_17);
if(_15){
_1b();
}
return _14;
};
i$.each(["Get","Put","Post","Delete"],function(m){
i$["xhr"+m]=i$.partial(i$.xhr,m.toUpperCase());
});
i$.loadScript=function(_1d){
var _1e=document.getElementsByTagName("head")[0],_1f=document.createElement("script"),_20=new i$.Promise(),_21=false,_22=function(_23,_24){
_1f.onreadystatechange=_1f.onload=null;
_21=true;
_20[_23?"resolve":"reject"](_24);
if(_1d.callback){
_1d.callback(_23,_24);
}
_1e.removeChild(_1f);
_1f=null;
};
_1f.type="text/javascript";
_1f.onreadystatechange=function(){
if(this.readyState==="loaded"||this.readyState==="complete"){
_22(true);
}
};
_1f.onload=function(){
_22(true);
};
i$.each(_1d.scriptAttrs,function(v,k){
if(v!=null){
_1f.setAttribute(k,v);
}
});
_1f.src=_1d.url;
_1e.appendChild(_1f);
if(_1d.timeout){
setTimeout(function(){
if(!_21){
_22(false,new Error("Timeout exceeded"));
}
},_1d.timeout);
}
return _20;
};
})();
(function(){
var i$=window.i$;
if(typeof (JSON)!="undefined"&&JSON.parse){
i$.fromJson=function(str){
return JSON.parse(str);
};
i$.toJson=function(obj,_25){
return JSON.stringify(obj,null,_25?"\t":"");
};
}else{
i$.fromJson=function(str){
return eval(["(",str,")"].join(""));
};
var _26=function(str){
return ["\"",str.replace(/[\\]/g,"\\\\").replace(/["]/g,"\\\"").replace(/[\r]/g,"\\r").replace(/[\n]/g,"\\n").replace(/[\b]/g,"\\b").replace(/[\t]/g,"\\t").replace(/[\f]/g,"\\f"),"\""].join("");
},_27=function(obj,p,_28,_29){
var ap,_2a;
if(_28){
_29=_29||"";
_2a=_29+"\t";
}
if(obj===null){
p.push("null");
}else{
if(obj===undefined){
p.push("undefined");
}else{
if(i$.isBoolean(obj)||i$.isNumber(obj)){
p.push(obj);
}else{
if(i$.isString(obj)){
p.push(_26(obj));
}else{
if(i$.isFunction(obj.toJson)){
p.push(obj.toJson());
}else{
if(i$.isArray(obj)){
p.push("[");
ap=[];
i$.each(obj,function(el){
var _2b=[];
_27(el,_2b,_28,_2a);
ap.push(_2b.join(""));
});
if(ap.length>0){
if(_28){
p.push("\n"+_2a);
}
p.push(ap.join(_28?",\n"+_2a:","));
if(_28){
p.push("\n"+_29);
}
}
p.push("]");
}else{
if(i$.isObject(obj)){
p.push("{");
ap=[];
i$.each(obj,function(el,key){
var _2c=[_26(key),": "];
_27(el,_2c,_28,_2a);
ap.push(_2c.join(""));
});
if(ap.length>0){
if(_28){
p.push("\n"+_2a);
}
p.push(ap.join(_28?",\n"+_2a:","));
if(_28){
p.push("\n"+_29);
}
}
p.push("}");
}
}
}
}
}
}
}
};
i$.toJson=function(obj,_2d){
var p=[];
_27(obj,p,_2d);
return p.join("");
};
}
i$.xhrFmts.json=function(xhr){
return i$.fromJson(xhr.responseText);
};
})();
(function(){
var i$=window.i$;
var _2e=function(){
this._evts={};
},_2f=function(_30,_31){
return _30._evts[_31]||(_30._evts[_31]={l:[],b:[]});
},add=function(_32,_33,_34,fn){
var e=_2f(_32,_33),c=e[_34].push(fn);
return [_33,_34,c-1];
},_35=function(_36,_37){
var e=_2f(_36,_37[0]);
delete e[_37[1]][_37[2]];
},_38=function(evt,_39,_3a){
var _3b=evt.b,_3a=_3a||0,b,r;
for(var i=_3a;i<_3b.length;i++){
b=_3b[i];
if(b){
_39=typeof _39==="undefined"?[]:_39;
r=b.apply(null,_39||[]);
if(i$.promise.isPromise(r)){
return r.then(function(_3c){
if(_3c!==false){
return _38(evt,_39,i+1);
}
return _3c;
});
}
}
}
},_3d=function(evt,_3e){
var _3f=evt.l,l;
for(var i=0;i<_3f.length;i++){
l=_3f[i];
if(l){
l.apply(null,_3e||[]);
}
}
},_40=function(_41,_42,_43){
var e=_2f(_41,_42);
return i$.when(_38(e,_43)).then(function(_44){
if(_44!==false){
_3d(e,_43);
}
return _44;
});
};
i$.augment(_2e,{addListener:function(_45,fn){
return add(this,_45,"l",fn);
},removeListener:function(_46){
return _35(this,_46);
},addBroker:function(_47,fn){
return add(this,_47,"b",fn);
},removeBroker:function(_48){
return _35(this,_48);
},fireEvent:function(_49,_4a){
return _40(this,_49,_4a);
}});
var _4b=new _2e();
i$.each(["addListener","removeListener","addBroker","removeBroker","fireEvent"],function(n){
i$[n]=i$.scope(_4b,n);
});
})();
(function(){
var _4c=(function(){
var _4d=new Map();
var _4e=function(){
this.isHCLEvent=function(_4f){
return _4f.match(/^HCL-.*/g);
};
this.addEvent=function(_50,_51,_52){
if(_50&&_51){
if(this.isHCLEvent(_50)){
var _53=_4d.get(_52)||{};
_53[_50]=_51;
_4d.set(_52,_53);
}
}
},this.removeEvent=function(_54,_55){
if(_54){
if(this.isHCLEvent(_54)){
_4d["delete"](_55);
}
}
},this.getEvent=function(_56,_57){
var _58=_4d.get(_57)||{};
return this.isHCLEvent(_56)?_58[_56]:null;
};
};
return new _4e();
})();
(function(){
if(typeof window.CustomEvent==="function"){
return false;
}
function _59(_5a,_5b){
_5b=_5b||{bubbles:false,cancelable:false,detail:null};
var evt=document.createEvent("CustomEvent");
evt.initCustomEvent(_5a,_5b.bubbles,_5b.cancelable,_5b.detail);
return evt;
};
window.CustomEvent=_59;
})();
var _5c=function(_5d){
return function(_5e,_5f,_60){
var _61=_5d.call(this,_5e,_5f,_60);
if(_60&&_60.lastState&&_4c.isHCLEvent(_5e)&&_4c.getEvent(_5e,this)){
_5f(_4c.getEvent(_5e,this));
}
return _61;
};
};
var _62=function(_63){
return function(_64,_65,_66){
if(_4c.isHCLEvent(_64)){
_4c.removeEvent(_64,this);
}
return _63.call(this,_64,_65,_66);
};
};
var _67=function(_68){
return function(_69){
if(_69.detail&&_4c.isHCLEvent(_69.type)){
_4c.addEvent(_69.type,_69,this);
}
return _68.call(this,_69);
};
};
if(typeof EventTarget!="undefined"){
EventTarget.prototype.addEventListener=_5c(EventTarget.prototype.addEventListener);
EventTarget.prototype.removeEventListener=_62(EventTarget.prototype.removeEventListener);
EventTarget.prototype.dispatchEvent=_67(EventTarget.prototype.dispatchEvent);
}else{
var _6a=[window,document];
_6a.forEach(function(_6b){
_6b.addEventListener=_5c(_6b.addEventListener);
_6b.removeEventListener=_62(_6b.removeEventListener);
_6b.dispatchEvent=_67(_6b.dispatchEvent);
});
Element.prototype.addEventListener=_5c(Element.prototype.addEventListener);
Element.prototype.removeEventListener=_5c(Element.prototype.removeEventListener);
Element.prototype.dispatchEvent=_67(Element.prototype.dispatchEvent);
}
})();
(function(){
var i$=window.i$;
var _6c=document.createElement("div");
i$.byId=function(id){
if(i$.isNode(id)){
return id;
}else{
return document.getElementById(id);
}
};
i$.createDom=function(_6d,_6e,_6f){
var el=document.createElement(_6d);
i$.each(_6e,function(v,k){
el.setAttribute(k,v);
});
if(_6f){
_6f.appendChild(el);
}
return el;
};
var _70=_6c.addEventListener?function(n){
return n.indexOf("on")==0?n.substr(2):n;
}:function(n){
return n.indexOf("on")!=0?"on"+n:n;
},add=_6c.addEventListener?function(_71,_72,f){
_71.addEventListener(_72,f,false);
}:function(_73,_74,f){
_73.attachEvent(_74,f);
},_75=_6c.removeEventListener?function(_76,_77,f){
_76.removeEventListener(_77,f,false);
}:function(_78,_79,f){
_78.detachEvent(_79,f);
};
i$.isDescendant=function(_7a,anc){
if(anc){
while(_7a){
if(_7a==anc){
return true;
}
_7a=_7a.parentNode;
}
}
return false;
};
i$.bindDomEvt=function(_7b,_7c,f){
_7c=_70(_7c);
if((_7c=="mouseleave"||_7c=="mouseenter")&&!i$.isIE){
var fp=f;
_7c=_7c=="mouseleave"?"mouseout":"mouseover";
f=function(e){
if(!i$.isDescendant(e.relatedTarget,_7b)){
return fp.call(this,e);
}
};
}
add(_7b,_7c,f);
return [_7b,_7c,f];
};
i$.unbindDomEvt=function(_7d){
if(_7d[0]){
_75(_7d[0],_7d[1],_7d[2]);
}
_7d.splice(0,3);
};
if("classList" in _6c){
i$.mash(i$,{addClass:function(_7e,_7f){
_7e&&_7e.classList&&_7e.classList.add(_7f);
},removeClass:function(_80,_81){
_80&&_80.classList&&_80.classList.remove(_81);
},hasClass:function(_82,_83){
return _82&&_82.classList&&_82.classList.contains(_83);
},toggleClass:function(_84,_85){
_84&&_84.classList&&_84.classList.toggle(_85);
}});
}else{
var _86=function(str,_87){
if(!str){
return -1;
}
var len=_87.length,i=str.indexOf(_87),_88,_89;
while(i>-1){
_89=str.charAt(i+len);
_88=str.charAt(i-1);
if((!_89||_89==" ")&&(!_88||_88==" ")){
break;
}
i=str.indexOf(_87,i+1);
}
return i;
};
i$.mash(i$,{addClass:function(_8a,_8b){
if(!_8a){
return;
}
if(_86(_8a.className,_8b)<0){
_8a.className+=" "+_8b;
}
},removeClass:function(_8c,_8d){
if(!_8c){
return;
}
var str=_8c.className,len=_8d.length,i=_86(str,_8d),val=[];
if(i>-1){
if(i>0){
val.push(str.substring(0,i));
}
if(str.length>i+len){
val.push(str.substr(i+len));
}
_8c.className=i$.trim(val.join());
}
},hasClass:function(_8e,_8f){
if(!_8e){
return;
}
return _86(_8e.className,_8f)>-1;
},toggleClass:function(_90,_91){
if(!_90){
return;
}
i$[i$.hasClass(_90,_91)?"removeClass":"addClass"](_90,_91);
}});
}
})();
(function(){
var i$=window.i$;
var _92=/([^_]+)_([^_]+)_deferred_?([\d]+)?/,_93=/alternate/i,_94=function(t){
return document.getElementsByTagName(t);
},_95=function(){
return _94("head")[0];
},_96=function(url){
i$.createDom("link",{rel:"stylesheet",type:"text/css",href:url},_95());
return i$.promise.resolved();
},_97=function(url){
return i$.loadScript({url:url});
},_98=function(mod){
return i$.xhrGet({url:mod.url,headers:{"X-IBM-XHR":"true"},responseType:"text"}).then(function(_99){
return {mod:mod,data:_99.data};
});
},_9a=function(_9b){
i$.each(_9b,function(_9c){
var m=_9c.mod;
var _9d=m.node.parentNode;
var _9e=m.p!="head"?m.node:null;
var _9f=document.createDocumentFragment(),tmp=i$.createDom("div");
tmp.innerHTML=_9c.data;
while(tmp.firstChild){
_9f.appendChild(tmp.firstChild);
}
_9d.insertBefore(_9f,_9e);
});
},_a0=function(_a1){
if(_93.test(_a1.rel)){
var id=_a1.id,_a2=id.match(_92);
if(_a2){
return {node:_a1,url:_a1.href,id:id,p:_a2[1],t:_a2[2],i:_a2[3]};
}
}
},_a3=function(){
var m={head:[],config:[]},_a4={},_a5={length:0},_a6=_94("link"),_a7=_94("a");
i$.each([_a6,_a7],function(_a8){
i$.each(_a8,function(_a9){
var mod=_a0(_a9);
if(mod&&!_a4[mod.id]){
_a4[mod.id]=mod;
if(!_a5[mod.t]){
_a5[mod.t]=[];
_a5.length=_a5.length+1;
}
_a5[mod.t].push(mod);
}
});
});
return _a5;
},_aa=function(_ab){
var _ac=[];
var _ad=[];
i$.each(_ab["markup"],function(mod){
_ad.push(_98(mod));
});
return i$.whenAll.apply(this,_ad).then(function(_ae){
_ac=_ae;
_ad=[];
i$.each(_ab["css"],function(mod){
_ad.push(_96(mod.url));
});
return i$.whenAll.apply(this,_ad);
},function(err){
console.log("Error: ",err);
}).then(function(_af){
return _b0(_ab["js"]);
}).then(function(){
_9a(_ac);
});
},_b0=function(_b1){
var m=_b1.shift(),p;
if(m){
p=_97(m.url);
}
return i$.when(p).then(function(){
return _b1.length>0?_b0(_b1):true;
},function(err){
console.log("Error: ",err);
});
},_b2=false,_b3=null,_b4=false,_b5=false,_b6=new i$.Promise(),_b7=function(cbk){
i$.addOnLoad(function(){
if(!_b2){
_b3=_a3();
_b4=_b3.length>0?false:true;
if(_b4){
_b6.resolve();
}
_b2=true;
}
if(cbk){
cbk();
}
});
};
i$.modules={};
i$.mash(i$.modules,{areLoaded:function(){
return _b4;
},areLoading:function(){
return _b5;
},loadDeferred:function(){
if(_b5){
return _b6;
}
var cbk=function(){
if(!_b4){
_b5=true;
_aa(_b3).then(function(){
_b4=true;
_b5=false;
_b6.resolve();
},function(e){
_b6.reject(e);
});
}
};
_b7(cbk);
return _b6;
},addAfterLoaded:function(f){
var cbk=function(){
_b6.then(f);
};
_b7(cbk);
}});
var _b8=i$.addOnLoad,_b9=[];
i$.addOnLoad=function(f,o){
if(_b5){
if(o){
f=i$.scope(o,f);
}
_b9.push(f);
}else{
_b8(f,o);
}
};
i$.modules.addAfterLoaded(function(){
while(_b9.length>0){
if(fn=_b9.shift()){
fn();
}
}
});
})();
(function(){
var i$=window.i$;
i$.getCookie=function(n){
var cs=document.cookie.split(";"),c="",_ba=0,cn="",cv=null;
for(var i=0;i<cs.length;i++){
c=cs[i];
_ba=c.indexOf("=");
cn=_ba<0?null:i$.trim(c.substring(0,_ba));
if(cn==n){
if(c.length>1){
cv=_ba<0?null:i$.trim(c.substring(_ba+1,c.length));
}
return cv;
}
}
return null;
};
i$.setCookie=function(n,v,e,p,d,s){
if(!e){
var m=new Date().getTime();
m+=(1000*60*60*24*365*100);
e=new Date(m);
}
var c=n+"="+v+((e)?"; expires="+e.toGMTString():"")+((p)?"; path="+p:"; path=/")+((d)?"; domain="+d:"")+((s)?"; secure":"");
document.cookie=c;
};
i$.deleteCookie=function(n,p,d){
if(i$.getCookie(n)){
document.cookie=n+"="+((p)?"; path="+p:"; path=/")+((d)?"; domain="+d:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
};
})();


}catch(e){console.log("Module 'wp_client_ext': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2011, 2012 - All Rights reserved.  **/
(function(){
var i$=window.i$;
var _1=i$.log={};
var _2=[];
var _3=function(_4,_5){
return _4.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_6,_7,_8){
var _9=_5[_7];
return _9;
});
};
i$.Logger=function(_a){
this.name=_a?_a:null;
};
_1.Logger=i$.Logger;
i$.mash(_1,{LEVEL_TRACE:500,LEVEL_INFO:800,LEVEL_WARNING:900,LEVEL_SEVERE:1000});
var _b=_1.LEVEL_INFO;
var _c=_1.LEVEL_WARNING;
var _d=_1.LEVEL_SEVERE;
i$.mash(_1,{getLogger:function(_e){
if(!_2[_e]){
_2[_e]=new i$.Logger(_e);
}
return _2[_e];
},setTraceConfig:function(_f,_10){
console.log("IMPORTANT: In order to enable tracing you need to configure module wp_client_tracing to be downloaded.");
}});
i$.getLogger=i$.log.getLogger;
i$.setTraceConfig=i$.log.setTraceConfig;
i$.Logger.prototype={info:function(_11,_12,_13){
this.log(_b,_11,_12,_13);
},warning:function(_14,_15,_16){
this.log(_c,_14,_15,_16);
},severe:function(_17,_18,_19){
this.log(_d,_17,_18,_19);
},log:function(_1a,_1b,_1c,_1d){
if((_1d&&!i$.isArray(_1d))||_1d===false){
_1d=[_1d];
}
var _1e=this.name;
var _1f=_1d?_3(_1c.toString(),_1d):_1c;
var _20="ibmStatusBox";
var _21="/portal/status";
var _22=i$.fireEvent;
var _23=com.ibm.widgets.StatusMessage;
var _24=null;
if(_1a==_d){
_24="error";
}else{
if(_1a==_c){
_24="warning";
}else{
if(_1a==_b){
_24="info";
}
}
}
if(_24){
_22(_21,[{message:new _23(_24,_1e+" "+_1b+": "+_1f,""),uid:_20}]);
}
}};
})();


}catch(e){console.log("Module 'wp_client_logging': ",e);}
try{

}catch(e){console.log("Module 'wp_client_tracing': ",e);}
try{(function(){var h=window;function k(e){for(var g=l.call(arguments,1),c,b=g,d=b.length,a=[];d;)void 0===b[--d]&&a.unshift(d);c=a;return function(){for(var a=g.slice(),b=c.length;b;)a[c[--b]]=arguments[b];m.apply(a,l.call(arguments,c.length));return e.apply(void 0,a)}}function p(e,g,c){for(var b=e.split("."),d=b.length-1,a=c,f=0;f<d;){var n=b[f++],j;if(!(j=a[n]))j={},a[n]=j;a=j}b=b[f];c=k(g,c);d=a;if(!(f=d[b]))c=c(),f=d[b]=c;a=f;a.clone=k(p,e,g);return a}var q=h.Array.prototype,l=q.slice,m=q.push;
p("wpModules.modules",function(e){return{create:k(p,void 0,void 0,e),partial:k}},h);}());
}catch(e){console.log("Module 'wp_modules': ",e);}
try{(function(){var g=window;function j(a,c){var b,d;for(d=c.length-1;0<=d;--d)if(b=c[d],b===a)return d;return-1}function k(a,c,b){return b.setAttribute(a,c)}function l(a,c){return c.removeAttribute(a)}function m(a,c,b){return c?b.setAttribute(a,a):b.removeAttribute(a)}function n(a,c){var b=c.className.split(" "),d=j(a,b);0>d?b.push(a):b.splice(d,1);c.className=b.join(" ");return!0}function p(a,c){var b=c.className.split(" ");0>j(a,b)?(b.push(a),c.className=b.join(" "),b=!0):b=!1;return b}
function q(a,c){var b=c.className.split(" "),d=j(a,b);0<=d?(b.splice(d,1),c.className=b.join(" "),b=!0):b=!1;return b}function r(a,c,b){return c?p(a,b):q(a,b)}function s(a,c){return a&&c?c.getAttribute("data-"+a):void 0}function t(a){return a?a.innerText||a.textContent:void 0}function u(a,c){var b=s(a,c),d;b&&((d=b&&c?c.ownerDocument.getElementById(b):void 0)||(d=u(b,c)));return d}function v(a,c){var b,d,e;if(w(a)){d=0;e=a.length;for(b=c;d<e&&b;)b=u(a[d++],b)}else b=u(a,c);return b}
function x(a,c,b){for(var d=arguments,e=2,h=d.length,f=a.createElement(c);e<h;)k(d[e++],d[e++],f);return f}function y(a){var c=a.parentNode;c&&c.removeChild(a);return a}function z(a,c,b){c.addEventListener(a,b,!1)}function A(a,c,b){c.removeEventListener(a,b,!1)}function B(a,c){var b=c||a.oninput,d,e;b&&(d=a.ownerDocument,e=b.bind(a),z("focus",a,C(z,"selectionchange",d,e)),z("blur",a,C(A,"selectionchange",d,e)));return b}
function D(a,c){var b=c||a.event;b&&(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0);return!1}function E(a){for(var c=0,b=0;a;)c+=a.offsetLeft+a.clientLeft,b+=a.offsetTop+a.clientTop,a=a.offsetParent;return{x:c,y:b}}function F(a,c,b,d){var e,h,f;if(w(b)){e=0;for(h=b.length;e<h;)f=F(a,c,b[e++],d)}else f=x(a,"INPUT","type","hidden","name",d,"value",b),c.appendChild(f);return f}var G=g.wpModules.modules,C=G.partial,w=g.Array.isArray;
(0,G.create)("wpModules.photon.dom",function(a){var c=a.document;a=C(D,a);var b=C(x,c),c=C(F,c);return{getData:s,getNode:v,getText:t,addClass:p,removeClass:q,conditionalClass:r,toggleClass:n,setAttribute:k,conditionalAttribute:m,removeAttribute:l,createElement:b,removeElement:y,polyfillOnInput:B,cancelEvent:a,getPosition:E,addHiddenInput:c}});}());
}catch(e){console.log("Module 'wp_photon_dom': ",e);}
try{(function(_1){
"use strict";
var _2="name",_3="id",_4="content",_5="meta",_6="x-ready",_7="ready",_8=_1["wpModules"],_9=_8["photon"]["dom"],_a=_8["modules"],_b=_a["create"],_c=_a["partial"],_d=_9["createElement"],_e=_9["removeElement"],_f=_9["getData"],_10=_1["Object"].prototype.toString;
function _11(_12){
var _13="[object String]"===_12;
return _13;
};
function _14(_15){
var _16=_10.call(_15);
return _16;
};
function _17(_18,aId){
return _18.getElementById(aId);
};
function _19(_1a,aId){
var _1b=_14(aId),_1c;
if(_11(_1b)){
_1c=aId;
}else{
_1c=_f(_7,aId);
}
return _1c;
};
function _1d(_1e,_1f,aId){
var id=_19(_1f,aId),_20=_1e.getItem(id),_21;
if(_20){
_1e.removeItem(id);
_21=_17(_1f,id);
if(_21){
_e(_21);
}
_21=_d(_5,_3,id,_2,_6,_4,_20);
_1f.head.appendChild(_21);
}
return _21;
};
function _22(_23){
var _24=_23.document,_25=_23.sessionStorage,_26=_c(_1d,_25,_24);
return {"addReady":_26};
};
return _b("wpModules.toolbar.common",_22);
}(window));


}catch(e){console.log("Module 'wp_toolbar_common': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2012 - All Rights reserved.  **/
(function(_1){
function _2(_3){
return (_3.getElementsByTagName("html")[0].getAttribute("dir")||"").toLowerCase()=="rtl";
};
function _4(_5){
var v=_5.documentElement;
return {width:v.clientWidth,height:v.clientHeight};
};
function _6(_7){
var _8=curtop=0;
if(_7.offsetParent){
do{
_8+=_7.offsetLeft;
curtop+=_7.offsetTop;
}while(_7=_7.offsetParent);
return {left:_8,top:curtop};
}
return null;
};
function _9(_a){
var bb=_a.getBoundingClientRect(),b={width:bb.width,height:bb.height,left:bb.left,top:bb.top,right:bb.right,bottom:bb.bottom};
if(i$.isIE){
b.height=b.bottom-b.top;
b.width=b.right-b.left;
}
if(i$.isIE==7){
var _b=_6(_a);
b.left=(_b?_b.left:b.left);
b.top=(_b?_b.top:b.top);
}
return b;
};
function _c(_d,_e){
var b=_9(_d);
if(_e){
var fo=_f(self,_e);
b.top+=fo.top;
b.left+=fo.left;
b.bottom+=fo.top;
b.right+=fo.left;
}
return b;
};
function _10(_11,_12){
i$.forIn(_12,function(v,n){
_11.style[n]=Math.round(v)+"px";
});
};
function _f(_13,_14){
var box={top:0,left:0};
var w=_13;
while(w.frameElement&&w!==_14){
var b=_c(w.frameElement);
box.top+=b.top;
box.left+=b.left;
w=w.parent;
}
return box;
};
function _15(_16){
var doc=_16.document,de=doc.documentElement,b=doc.body;
return {left:isNaN(_16.scrollX)?(de.scrollLeft+b.scrollLeft):_16.scrollX,top:isNaN(_16.scrollY)?(de.scrollTop+b.scrollTop):_16.scrollY};
};
var _17={nodeHandler:{},pointerHandler:{},handle:function(_18){
var _19=_18.name,_1a=_18.targetWindow,_1b=_18.node,_1c=_18.refNode,_1d=_18.targetBox,_1e=_1e||0.5,_1f=_18.viewMargin,_20=_18.positionNode,_21=_17.nodeHandler[_19],_22=_17.pointerHandler[_19];
if(!_21&&!_1d){
return;
}
var doc=_1a.document,b=doc.body,_23=_4(doc),_24=_c(_1b),_25,_26=_15(_1a);
if(_1c){
var _27=function(_28){
var n=_28;
while(n&&n.offsetParent===null){
n=n.parentNode;
}
return n;
};
_1c=_27(_1c);
var _29=_c(_1c,_1a),_2a=_23.width-_29.left-_29.width*(1-_1e),_2b=_29.left+_29.width*_1e,_2c=_24.width+_1f,_2d=_2(doc)?!(_2b>_2c||_2a<_2c):_2a>_2c||_2b<_2c;
if(_2a<_24.width){
_25={left:_23.width-_24.width,top:_29.height+_29.top,};
}else{
_25=_21(_23,_24,_29,_2d,_1f);
}
}else{
var h=_1d.height||_24.height,w=_1d.width||_24.width;
_25={top:Math.max(10,Math.min(_1d.top||(_23.height-h)/2,_23.height-_24.height-_1f)),left:Math.max(0,Math.min(_1d.left||(_23.width-w)/2,_23.width-_24.width-_1f))};
}
if(!i$.isIE||i$.isIE!==7){
_25.top+=_26.top;
_25.left+=_26.left;
}
_10(_20||_1b,_25);
if(_1c&&_22){
var _2e=null;
var _2f=function(el){
var c=el.className;
if(c&&c.indexOf("pointer")>-1){
_2e=el;
}
if(!_2e&&el.hasChildNodes()){
i$.each(el.childNodes,function(val){
_2f(val);
});
}
};
_2f(_1b);
if(_2e){
_10(_2e,_22(_c(_1b),_29,_c(_2e),_2e));
}
}
},registerHandler:function(_30){
if(_30.nodeHandler){
_17.nodeHandler[_30.name]=_30.nodeHandler;
}
if(_30.pointerHandler){
_17.pointerHandler[_30.name]=_30.pointerHandler;
}
},addPositionChangeListener:function(_31){
if(!_31.node){
return null;
}
var _32={refNode:_31.node,targetWindow:_31.targetWindow||_1,callback:_31.callbackFn,pollInterval:_31.pollInterval||2000,intervalId:null,refBox:null,tolerance:_31.tolerance||5,intervalFn:function(){
if(this.refNode){
var box=_c(this.refNode,this.targetWindow);
if(!this.refBox){
this.refBox=box;
}else{
var _33=this.tolerance,_34=this.refBox,_35=Math.abs(_34.top-box.top),_36=Math.abs(_34.left-box.left),_37=Math.abs(_34.bottom-box.bottom),_38=Math.abs(_34.right-box.right);
if(_33<Math.max(_35,_36,_37,_38)){
this.refBox=box;
this.callback();
}
}
}else{
this.stop();
}
},start:function(){
var obj=this;
this.intervalId=this.targetWindow.setInterval(function(){
obj.intervalFn();
},this.pollInterval);
},stop:function(){
if(this.intervalId){
this.targetWindow.clearInterval(this.intervalId);
}
}};
_32.start();
return _32;
}};
i$.toPath("wpModules.util.Positioning",_17);
i$.toPath("wpModules.util.dialog",{viewPort:_4,setMetrics:_10,simpleBox:_9,scroll:_15});
})(window);
(function(){
var _39={name:"horizontallyBelow",nodeHandler:function(_3a,_3b,_3c,_3d,_3e){
var pos={};
pos.top=_3c.top+_3c.height;
if(pos.top<0){
pos.top=0;
}
if(pos.top+_3b.height>_3a.height){
pos.top=_3a.height-_3b.height-_3e;
}
pos.left=Math.max(_3c.left+(_3c.width-_3b.width)/2,_3e);
if(pos.left+_3b.width+_3e>_3a.width){
pos.left=_3a.width-_3b.width-_3e;
}
return pos;
},pointerHandler:function(_3f,_40,_41,_42){
i$.addClass(_42,"top");
var _43=_42.clientHeight,_44=_42.clientWidth,_45=Math.min(_40.left+_40.width,_3f.left+_3f.width),_46=Math.max(_40.left,_3f.left),_47=(_45+_46)/2-_3f.left;
var res={top:-(_43-4),left:_47-_44/2};
return res;
}};
wpModules.util.Positioning.registerHandler(_39);
})();
(function(){
var _48={name:"horizontallyCenteredBelow",nodeHandler:function(_49,_4a,_4b,_4c,_4d){
var pos={};
pos.top=_4b.top+_4b.height;
if(pos.top<0){
pos.top=0;
}
if(pos.top+_4a.height>_49.height){
pos.top=_49.height-_4a.height-_4d;
}
pos.left=Math.max(_4b.left+(_4b.width-_4a.width)/2,_4d);
if(pos.left+_4a.width+_4d>_49.width){
pos.left=_49.width-_4a.width-_4d;
}
return pos;
},pointerHandler:function(_4e,_4f,_50,_51){
i$.addClass(_51,"top");
var _52=_51.clientHeight,_53=_51.clientWidth,_54=Math.min(_4f.left+_4f.width,_4e.left+_4e.width),_55=Math.max(_4f.left,_4e.left),_56=(_54+_55)/2-_4e.left;
var res={top:-(_52-4),left:_56-_53/2};
return res;
}};
wpModules.util.Positioning.registerHandler(_48);
})();
(function(){
var _57={name:"verticallyCenteredRightHand",nodeHandler:function(_58,_59,_5a,_5b,_5c){
var pos={};
pos.top=Math.max(_5a.top+(_5a.height-_59.height)/2,_5c);
pos.top=Math.min(pos.top,_58.height-_59.height-_5c);
if(_5b){
pos.left=Math.min(_5a.left+_5a.width,_58.width-_59.width-_5c);
}else{
pos.left=Math.max(_5a.left-_59.width,_5c);
}
return pos;
},pointerHandler:function(_5d,_5e,_5f,_60){
var _61=_5f.height,_62=_61/2+6,_63=Math.min(_5e.top+_5e.height,_5d.top+_5d.height-_62),_64=Math.max(_5e.top,_5d.top+_62),_65=_5d.left-_60.offsetWidth,_66=_5d.right+_60.offsetWidth,_67=_5e.left>_65,_68=_5e.left<=_65,_69=_65<=_5e.right,_6a=_65>_5e.right,_6b=_66<=_5e.left,_6c=_66>_5e.right,_6d=_66<=_5e.right;
i$.removeClass(_60,"right");
i$.removeClass(_60,"left");
if(_63-_64>=0){
if((_67&&_6c)||(_68&&_6d)){
}else{
if((_67&&_6d)||(_67&&_6b)){
i$.addClass(_60,"right");
}else{
if((_69&&_6c)||(_6a&&_6c)){
i$.addClass(_60,"left");
}
}
}
}
return {top:(_64+_63-_61)/2-_5d.top};
}};
wpModules.util.Positioning.registerHandler(_57);
})();


}catch(e){console.log("Module 'wp_dialog_util': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2012 - All Rights reserved.  **/
(function(_1){
var _2=wpModules.util.dialog;
function _3(e,_4){
e=e||_4.event;
e.stopPropagation&&e.stopPropagation();
e.preventDefault&&e.preventDefault();
e.cancelBubble=true;
e.cancel=true;
e.returnValue=false;
return false;
};
function _5(_6,_7){
var _8=_2.scroll(_7),_9=_6||_7.event;
return {left:_9.clientX+_8.left,top:_9.clientY+_8.top};
};
function _a(p){
var _b=p.window||_b,_c=_2.viewPort(_b.document),_d=p.element,_e=p.handle||_d,_f=i$.mash({top:0,left:0,width:_c.width,height:_c.height,margin:0},p.area),_10=false,_11=false,_12=false,_13,mmb,mub,mdb;
function _14(_15){
if(!_12&&_11&&!_10){
_12=true;
p.startCallback&&p.startCallback(_15,_d);
_13=_5(_15,_b);
var _16=_2.simpleBox(_d);
mmb=i$.bindDomEvt(_b.document,"mousemove",function(_17){
if(_12&&!_10){
var pos=_5(_17,_b),_18=_2.scroll(_b);
pos.left+=_16.left+_18.left-_13.left;
pos.top+=_16.top+_18.top+-_13.top;
pos.left=Math.min(Math.max(_f.left+_18.left+_f.margin,pos.left),_f.left+_18.left+_f.width-_16.width-_f.margin);
pos.top=Math.min(Math.max(_f.top+_18.top+_f.margin,pos.top),_f.top+_18.top+_f.height-_16.height-_f.margin);
_2.setMetrics(_d,pos);
p.moveCallback&&p.moveCallback(pos,_d);
return _3(_17,_b);
}
});
mub=i$.bindDomEvt(_b.document,"mouseup",function(_19){
_1a();
return _3(_19,_b);
});
return _3(_15,_b);
}
};
function _1a(){
if(_12&&!_10){
i$.unbindDomEvt(mmb);
i$.unbindDomEvt(mub);
_13=null;
p.endCallback&&p.endCallback(_d);
_12=false;
}
};
this.dispose=function(){
if(!_10){
this.StopListening(true);
_d=null;
_e=null;
p.startCallback=null;
p.moveCallback=null;
p.endCallback=null;
_10=true;
}
};
this.StartListening=function(){
if(!_11&&!_10){
_11=true;
mdb=i$.bindDomEvt(_e,"mousedown",_14);
}
};
this.StopListening=function(_1b){
if(_11&&!_10){
i$.unbindDomEvt(mdb);
_11=false;
_1b&&_12&&_1a();
}
};
this.isDragging=function(){
return _12;
};
this.isListening=function(){
return _11;
};
this.isDisposed=function(){
return _10;
};
this.StartListening();
};
i$.toPath("wpModules.util.Draggable",_a);
})(window);


}catch(e){console.log("Module 'wp_dialog_draggable': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-E76 and 5724-E77, (C) Copyright IBM Corp. 2012 - All Rights reserved.  **/
if(!i$.fromPath("wpModules.dialog.Dialog")){
var _T="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
i$.addListener("wpModules/dialog/closeAll",function(_1){
var _2=i$.fromPath("wpModules.dialog.DialogStorage.openDialogs",false,top);
if(_2&&_2.length>0){
i$.forEach(_2,function(_3){
if(!_1||_3.prm[_1]){
_3.close();
}
});
}
});
i$.toPath("wpModules.dialog.Dialog",function(_4,_5){
var _6=i$.fromPath("wpModules.dialog.DialogStorage",false,_4.top);
if(!_6){
_6=i$.toPath("wpModules.dialog.DialogStorage",{openDialogs:[]},_4.top);
}
var _7=_6.openDialogs,_8=wpModules.util.dialog;
function _9(_a,_b){
i$.each(_b,function(v,k){
_a=_a.replace(new RegExp("\\${"+k+"}","g"),v);
});
return _a;
};
function _c(_d,_e){
var s="data-attach-point";
var _f=function(el){
if(el.getAttribute&&el.getAttribute(s)){
_e[el.getAttribute(s)]=el;
}
if(el.hasChildNodes()){
i$.each(el.childNodes,function(val){
_f(val);
});
}
};
_f(_d);
};
function _10(){
return Math.round(Math.random()*1000000000)+"";
};
function _11(p,_12,box){
wpModules.util.Positioning.handle({name:p.posHandler,targetWindow:p.window,targetBox:box,node:_12,refNode:p.autoPosition,maxOverLay:p.maxOverlay,viewMargin:p.viewMargin});
};
function _13(_14){
return _14.window.document.getElementById(_14.id+"-iframe");
};
var _15=i$.augment((function(_16){
this._init(_16);
}),{_init:function(_17){
var doc=_17.window.document,div=doc.createElement("div"),_18=_17.parent,_19=this._overlayNode=_17.displayCloseOverlay?doc.createElement("div"):null,_1a=this.rootNode=doc.createElement("div"),_1b=[140,30];
if(_17.templateStyle=="flat"){
_1b=[300,200];
}
this.defaultWidth=_1b[0];
this.defaultHeight=_1b[1];
if(_19){
var os=_19.style;
os.display="block";
os.height="100%";
os.top="0px";
os.position="fixed";
os.backgroundColor="#000";
os.opacity="0.4";
os.filter="Alpha(opacity=40)";
os.left="0";
os.width="100%";
os.zIndex=_17.z_index-1;
if(!_17.modal){
os.opacity="0";
os.filter="Alpha(opacity=0)";
}
}
this.tabOut=_17.tabOut;
this.modal=_17.modal;
this.window=_17.window;
var _1c={title:_17.title||"",itemClose:_17.itemClose,z_index:_17.z_index,id:_17.id};
if(_17.templateStyle=="help"&&_17.learnMoreURL){
_1c.learnMore=_17.learnMore;
_1c.learnMoreURL=_17.learnMoreURL;
_1c.learnMoreParam=_17.learnMoreParam;
}
var s=[""],_1d=typeof _17.padding,_1e=_17.padding;
if(_1e&&_1d==="object"){
s.push("padding:",_1e[0],"px ",_1e[1],"px ",_1e[2],"px ",_1e[3],"px;");
}else{
if(_1d!=="number"){
_1e=15;
}
s.push("padding:",_1e,"px;");
}
_1c.contentStyle=s.join("");
div.innerHTML=_9(_17.template,_1c);
_c(div,this);
this.domNode=div.firstChild;
this.id=this.domNode.id=_17.id;
_18.insertBefore(_1a,_18.firstChild);
_19&&_1a.appendChild(_19);
_1a.appendChild(this.domNode);
if(!_17.autoPosition){
this._hidePointer();
}
},_hidePointer:function(){
this.domNode.lastChild.style.display="none";
},_showPointer:function(){
this.domNode.lastChild.style.display="inline";
},show:function(){
this.domNode.style.display="block";
},hide:function(){
this.domNode.style.display="none";
}});
return i$.augment((function(_1f){
this.blankImgSrc=_T;
this.z_index=_7.length===0?1000:_7[_7.length-1].z_index+500;
var _20=_1f.title||_1f.displayDialogHeader;
var _21={startDialog:"<div class=\"wpthemeDialog\" style=\"display:none;position:absolute;z-index:${z_index};\" role=\"dialog\" "+(_1f.title?"aria-labelledby=\"${id}-title\"":(_1f.description?"aria-label=\""+_1f.description+"\"":(_1f.labelledby?"aria-labelledby=\""+_1f.labelledby+"\"":"aria-label=\"dialog\"")))+">",endDialog:"</div>",dialogContent:"<div id=\"${id}-firstFocus\" tabIndex=\"0\"></div>"+"<div class=\"wpthemeDialogContent\" style=\"${contentStyle}\">"+"<div class=\"wpthemeDialogContentBody\">"+"<div>"+"<div class=\"west\" style=\"display:none;\" data-attach-point=\"westContentCell\">"+"<div style=\"display:none;\" data-attach-point=\"westContent\"></div>"+"</div>"+"<div class=\"central\" style=\"height:auto; width:auto; max-height:5000px; position:relative\" data-attach-point=\"centralContent\"></div>"+"<div class=\"east\" style=\"display:none;\" data-attach-point=\"eastContentCell\">"+"<div style=\"display:none;\" data-attach-point=\"eastContent\"></div>"+"</div>"+"</div>"+"<div class=\"south\" style=\"display:none;\" data-attach-point=\"southContent\"></div>"+"</div>"+"</div>"+"<div id=\"${id}-lastFocus\" tabIndex=\"0\"></div>"};
var prm=this.prm=i$.mash({id:_10(),window:_4,parent:_1f.window?_1f.window.document.body:_4.document.body,posHandler:"verticallyCenteredRightHand",displayCloseOverlay:true,maxOverlay:0.5,viewMargin:15,autoResize:false,autoClose:!_1f.modal,modal:false,tabOut:false,helpTemplate:_21.startDialog+"<div class=\"wpthemeDialogPopup\" data-attach-point=\"dialogNode\">"+"<a class=\"wpthemeDialogPopupClose\" href=\"javascript:void(0);\" data-attach-point=\"closeButtonNode\" title=\"${itemClose}\" role=\"button\">"+"<img alt=\"${itemClose}\" src=\""+this.blankImgSrc+"\" aria-label=\"${itemClose}\"/><span class=\"dialogAltText\" title=\"${itemClose}\">X</span>"+"</a>"+"<div id=\"${id}-firstFocus\" tabIndex=\"0\"></div>"+"<div class=\"wpthemeDialogPopupContent\">"+"<div class=\"wpthemeDialogPopupContentArea\">"+"<div class=\"west\" style=\"display:none;\" data-attach-point=\"westContentCell\">"+"<div style=\"display:none;\" data-attach-point=\"westContent\"></div>"+"</div>"+"<div class=\"central\" style=\"height:auto; width:auto; max-height:5000px; position:relative\" data-attach-point=\"centralContent\"></div>"+"<div class=\"east\" style=\"display:none;\" data-attach-point=\"eastContentCell\">"+"<div style=\"display:none;\" data-attach-point=\"eastContent\"></div>"+"</div>"+"</div>"+"<div class=\"south\" style=\"display:none;\" data-attach-point=\"southContent\"></div>"+"</div>"+((_1f.learnMore&&_1f.learnMore.url)?"<div class=\"wpthemeDialogPopupFooter\">"+"<a href=\"javascript:void(0);\" class=\"wpthemeDialogLearnLink\" onclick=\"window.open('${learnMoreURL}', '', 'location=no,menubar=no,scrollbars=yes,status=no,toolbar=no${learnMoreParam}', false);\">${learnMore}</a>"+"</div>":"")+"<div id=\"${id}-lastFocus\" tabIndex=\"0\"></div>"+"</div>"+"<div class=\"dialogPointer pointer\" style=\"top:50%;display:none\"/>"+_21.endDialog,defaultTemplate:_21.startDialog+"<div class=\"wpthemeDialogBorder\">"+"<div class=\"dialogContainer\" data-attach-point=\"dialogNode\">"+(_20?"<div id=\"${id}-header\" class=\"dialogHeader\" data-attach-point=\"dialogHeaderNode\" style=\"position:relative;\">"+(_1f.title?"<h1 id=\"${id}-title\" class=\"dialogHeaderText\" data-attach-point=\"titleNode\">${title}</h1>":"")+"<a href=\"javascript:void(0);\" data-attach-point=\"closeButtonNode\" class=\"dialogClose\" title=\"${itemClose}\">"+"<img src=\""+this.blankImgSrc+"\" alt=\"\" aria-label=\"${itemClose}\" />"+"<span class=\"dialogAltText\" title=\"${itemClose}\">X</span>"+"</a>"+"</div>":"")+_21.dialogContent+"</div>"+"</div>"+"<div class=\"dialogPointer pointer\" style=\"top: 50%;\"/>"+_21.endDialog,flatTemplate:_21.startDialog+"<div>"+"<div data-attach-point=\"dialogNode\">"+_21.dialogContent+"</div>"+"</div>"+"<div class=\"dialogPointer pointer\" style=\"top: 50%;display:none\"/>"+_21.endDialog},_1f);
if(!prm.template){
var ts=prm.templateStyle;
if(ts){
if(ts=="help"){
prm.template=prm.helpTemplate;
if(typeof _1f.autoResize==="undefined"){
prm.autoResize=true;
}
if(typeof _1f.autoClose==="undefined"){
prm.autoClose=true;
}
if(typeof _1f.modal==="undefined"){
prm.modal=false;
}
if(typeof _1f.window==="undefined"){
prm.window=_4.top;
prm.parent=prm.window.document.body;
}
if(typeof _1f.displayCloseOverlay==="undefined"){
prm.displayCloseOverlay=true;
}
}else{
if(ts=="flat"){
prm.template=prm.flatTemplate;
if(typeof _1f.padding==="undefined"){
prm.padding=0;
}
}
}
}
if(!prm.template){
prm.template=prm.defaultTemplate;
}
}
var _22={};
if(prm.templateStyle=="help"&&_1f.learnMore&&_1f.learnMore.url){
_22.learnMore=wpModules.dialog.nls["LINK_LEARN_MORE"];
_22.learnMoreURL=_1f.learnMore.url;
var w=800,h=800;
if(_1f.learnMore.width){
w=_1f.learnMore.width;
}
if(_1f.learnMore.height){
h=_1f.learnMore.height;
}
_22.learnMoreParam=",width="+w+",height="+h;
}
this.openerWindow=_4;
this.widget=new _15(i$.mash({id:prm.id,window:prm.window,parent:prm.parent,displayCloseOverlay:prm.displayCloseOverlay,title:prm.title,autoPosition:prm.autoPosition,modal:prm.modal,tabOut:prm.tabOut,itemClose:wpModules.dialog.nls["CLOSE_0"],template:prm.template,templateStyle:prm.templateStyle,padding:prm.padding,z_index:this.z_index},_22));
i$.bindDomEvt(this.widget.domNode,"onkeydown",i$.scope(this,function(e){
if(!e){
var e=_4.event;
}
if(e.keyCode===9){
var t=e.target||e.srcElement;
if(t.nodeType===3){
t=t.parentNode;
}
var f1=e.shiftKey?"-firstFocus":"-lastFocus",f2=e.shiftKey?"-lastFocus":"-firstFocus";
var w=this.widget,pn=this.prm.autoPosition;
if(w.tabOut&&w.id+f1==t.getAttribute("id")){
this._close();
if(pn){
pn.focus();
}
}else{
if(w.id+f1===t.getAttribute("id")){
w.window.document.getElementById(this.widget.id+f2).focus();
}
}
}else{
if(e.keyCode===27){
this._close(e);
}
}
}));
var cb=this.widget.closeButtonNode;
cb&&i$.bindDomEvt(cb,"onclick",i$.scope(this,"_close"));
if(prm.autoClose&&this.widget._overlayNode){
i$.bindDomEvt(this.widget._overlayNode,"onclick",i$.scope(this,"_close"));
}
prm.markup&&this._setMarkup(prm.markup);
_7.push(this);
}),{open:function(){
var w=this.widget,p=this.prm,wd=w.domNode,m=p.metrics,tb=p.targetBox={},doc=p.window.document,_23=_8.viewPort(doc);
if(p.url){
var f=_13(w);
if(f){
f.src=p.url;
}else{
w.centralContent.innerHTML=_9("<div class=\"dialogLoading\" style=\"display:block;position:absolute;left:50%;top:50%;margin-top:-8px;margin-left:-8px;\" id=\"${id}-progressLoading\">"+"<img style=\"display:inline-block\" width=\"16\" height=\"16\" src=\"${blank}\" ${border} alt=\"${loading}\"/>"+"</div>"+"<div id=\"${id}-sizing\" style=\"width:100%;height:0px;\"></div>"+"<iframe style=\"display:block;${visibility}\" title=\"${title}\" name=\"${id}-iframe\" id=\"${id}-iframe\" frameborder=\"0\" src=\"${url}\" allowTransparency=\"true\"></iframe>",{id:w.id,url:i$.isIE<9?"":p.url,title:p.title||p.description||"dialog contents",blank:this.blankImgSrc,loading:wpModules.dialog.nls["LOADING_0"],border:i$.isIE<9?"border='0'":"",visibility:i$.isIE<9?"visibility:hidden;":"opacity:0;filter:Alpha(opacity=0)"});
f=_13(w);
if(i$.isIE<9){
f.src=p.url;
this._initCallbacksOnloadIE();
this._ieRefreshListener=i$.addListener("wpModules/dialog/Dialog/ieRefresh",i$.scope(this,this._handleIeRefreshEvent));
}else{
f.onload=i$.scope(this,this._initCallbacks);
}
}
if(i$.isChrome){
f.setAttribute("scrolling","auto");
}else{
f.setAttribute("scrolling","no");
}
}
w.show();
if(w.dialogHeaderNode){
var _24=_8.simpleBox(w.dialogHeaderNode).width;
if(_24&&_24>w.defaultWidth){
w.defaultWidth=_24;
}
}
var _25=_23.width-2*p.viewMargin+2;
if(m){
if(!p.autoPosition){
m.top&&(tb.top=m.top);
m.left&&(tb.left=m.left);
}
m.width&&(tb.width=m.width);
m.height&&(tb.height=m.height);
if(m.width){
if(p.url){
var _26=_13(w),_27=_8.simpleBox(wd),_28=_8.simpleBox(doc.getElementById(w.id+"-sizing")),_29=_27.width-_28.width;
_25-=_29;
_8.setMetrics(_26,{width:Math.min(m.width,_25)});
}else{
_8.setMetrics(wd,{width:Math.min(m.width,_25)});
}
}
}else{
if(p.url){
_8.setMetrics(_13(w),{width:Math.min(w.defaultWidth,_25),height:w.defaultHeight});
}
}
_11(p,wd,tb);
this._positionChangeListener=wpModules.util.Positioning.addPositionChangeListener({node:p.autoPosition,targetWindow:p.window,callbackFn:function(){
_11(p,wd,tb);
}});
if(!p.url){
this.inlineKeyDownEvt=i$.bindDomEvt(doc.body,"onkeydown",i$.scope(this,function(e){
if(e.keyCode===27){
this._close(e);
}
}));
p.window.setTimeout(function(){
if(i$.isFF){
var di=p.window.document.createElement("input");
wd.appendChild(di);
di.focus();
wd.removeChild(di);
}else{
p.window.focus();
}
p.setFocusFn?p.setFocusFn(p.window):wd.focus();
if(p.templateStyle=="help"){
w.centralContent.tabIndex=-1;
w.centralContent.focus();
}
},100);
}
setTimeout(function(){
var _2a=doc.createElement("div"),_2b;
_2a.className="wpThemeDialogHighContrastTestNode";
wd.appendChild(_2a);
try{
_2b=doc.defaultView.getComputedStyle(_2a,"");
}
catch(e){
_2b=_2a.currentStyle;
}
var _2c=_2b.backgroundImage;
if((_2b.borderTopColor==_2b.borderRightColor)||(_2c!=null&&(_2c=="none"||_2c=="url(invalid-url:)"))){
i$.addClass(wd,"wpthemeDialogImagesOff");
}
wd.removeChild(_2a);
},10);
return false;
},_initCallbacks:function(){
var w=this.widget,p=this.prm,f=_13(w);
if(!f){
return;
}
var _2d=i$.scope(this,function(){
var fw=f.contentWindow,_2e=null;
try{
_2e=fw.contentDocument||fw.document;
fw.onunload=function(){
p.onUnloadCallbackFn&&p.onUnloadCallbackFn(_2e,fw);
};
}
catch(e){
}
var _2f=i$.scope(this,function(){
fw=f.contentWindow;
try{
if(!fw.closeDialog){
fw.closeDialog=f.onCloseModalDialog=i$.scope(this,"close");
}
if(!fw.resize){
fw.resize=i$.scope(this,"resize");
}
fw.setTimeout(i$.scope(this,function(){
this.onLoadFrame();
}),0);
}
catch(e){
this.onLoadFrame();
}
finally{
p.onLoadCallbackFn&&p.onLoadCallbackFn(_2e,fw);
}
});
try{
f.onload=_2f;
fw.closeDialog=f.onCloseModalDialog=i$.scope(this,"close");
}
catch(e){
}
_2f();
});
_2d();
},_initCallbacksOnloadIE:function(){
var _30=this;
var w=this.widget;
var p=this.prm;
var f=_13(w);
var fn=function(i){
p.window.setTimeout(function(){
if((f.contentDocument&&f.contentDocument.readyState&&f.contentDocument.readyState==="complete")||(f.readyState&&f.readyState==="complete")){
_30._initCallbacks();
}else{
if(i<300){
fn(i+1);
}
}
},200+10);
};
fn(0);
},_handleIeRefreshEvent:function(_31){
var w=this.widget;
var f=_13(w);
var cw=f.contentWindow;
if(_31==cw){
this._initCallbacksOnloadIE();
}
},onLoadFrame:function(_32){
var w=this.widget,wd=w.domNode,p=this.prm,_33=p.targetBox,_34=p.autoResize,_35=_8.viewPort(p.window.document),_36=_13(w),bs=wd.style;
if(!_36){
return;
}
_36.setAttribute("scrolling","no");
bs.maxWidth="none";
bs.maxHeight="none";
bs.minWidth="0";
bs.minHeight="0";
var _37=p.window.document.getElementById(w.id+"-progressLoading");
if(_37){
_37.style.display="none";
}
var cs=w.centralContent.style,fs=_36.style;
cs.paddingBottom="0px";
cs.marginBottom="0px";
if(i$.isIE<9){
fs.visibility="visible";
}else{
fs.opacity="100";
fs.filter="Alpha(opacity=100)";
}
var fw=_36.contentWindow,_38=_33.width,_39=_33.height||w.defaultHeight,_3a=null,fde=null,_3b=null,_3c=false;
if(!_38){
_38=w.defaultWidth;
_3c=true;
}
try{
_3a=fw.contentDocument||fw.document;
fde=_3a.documentElement;
_3b=_3a.body;
if(_3b){
var _3d=_8.simpleBox(_3b);
_8.setMetrics(_36,{width:((_38>_3d.width)?_38:_3d.width),height:_3d.height});
if(i$.isWebKit){
_3b.style.overflow="auto";
}
_3b.style.height="auto";
var _3e=i$.scope(this,function(e){
if(e.keyCode===27){
this._close(e);
}
});
if(i$.isFF){
i$.bindDomEvt(fde,"onkeydown",_3e);
}else{
i$.bindDomEvt(_3b,"onkeydown",_3e);
}
_38=Math.max(_3b.scrollWidth,fde.scrollWidth,_3b.offsetWidth,fde.offsetWidth,fde.clientWidth);
_8.setMetrics(_36,{width:_38});
if(w.eastContentCell.style.display!="none"||w.westContentCell.style.display!="none"){
var _3f=_8.simpleBox(_3b),_40=_8.simpleBox(fde);
_39=Math.max(_3d.height,_3f.height,_40.height,_3b.scrollHeight,fde.scrollHeight,_3b.offsetHeight,fde.offsetHeight,fde.clientHeight);
}else{
_39=Math.max(_3b.scrollHeight,fde.scrollHeight,_3b.offsetHeight,fde.offsetHeight,fde.clientHeight);
}
_38=Math.max(_3b.scrollWidth,fde.scrollWidth,_3b.offsetWidth,fde.offsetWidth,fde.clientWidth);
}else{
return;
}
}
catch(e){
}
var _41=_8.simpleBox(wd),_42=_8.simpleBox(_36),_43=_8.simpleBox(p.window.document.getElementById(w.id+"-sizing")),_44=_8.simpleBox(w.eastContent),_45=_8.simpleBox(w.westContent),_46=(_3c&&_43.width==w.defaultWidth)?0:_41.width-_43.width,_47=_41.height-_42.height,_48=_35.width-2*p.viewMargin-_46+2,_49=_35.height-2*p.viewMargin-_47+2,_4a=_33.height||(_34?_39:_35.height/3),_4b=_33.width||(_34?_38:_35.width/3);
_4a=Math.max(_4a,_44.height,_45.height);
_38=Math.min(_4b,_48);
_39=Math.min(_4a,_49);
_8.setMetrics(wd,{top:0,left:0});
if(i$.isIE&&_34){
_38++;
_39++;
}
_8.setMetrics(_36,{width:_38,height:_39});
if(_3b&&_34&&!_33.width){
if(fde&&i$.isFF){
var _4c=fde.scrollWidth-fde.clientWidth;
if(_4c>0){
_8.setMetrics(_36,{width:_38+=_4c});
}
}
if(_3b&&_4a>_49){
var _4d=Math.max(_3b.scrollWidth,fde.scrollWidth),_4e=Math.max(_3b.clientWidth,fde.clientWidth);
if(_4e<_4d){
var _4f=_4d-_4e;
if(_38+_4f<=_48){
_38+=_4f;
_8.setMetrics(_36,{width:_38});
}
}
}
}
if(_3b&&p.templateStyle!="help"){
_3b.style.height="100%";
}
_11(p,wd,{top:p.targetBox.top,left:p.targetBox.left,width:_38+_46,height:_39+_47});
_36.setAttribute("scrolling","auto");
if(!(_32&&_32.resize)){
p.window.setTimeout(function(){
p.setFocusFn?p.setFocusFn(fw):_36.focus();
},100);
}
},resize:function(_50){
var tb=this.prm.targetBox;
if(_50){
if(_50.width){
tb.width=_50.width;
}
if(_50.height){
tb.height=_50.height;
}
}
if(this.prm.url){
this.onLoadFrame({resize:true});
}
},_setMarkup:function(_51){
i$.forIn((i$.isString(_51)||i$.isNode(_51))?{"centralContent":_51}:_51,i$.scope(this,function(m,r){
var _52=this.widget[r],_53=this.widget[r+"Cell"];
if(_52){
if(m){
if(i$.isNode(m)){
_52.appendChild(m);
}else{
if(i$.isString(m)){
_52.innerHTML=m;
}
}
if(_53){
_53.style.display="";
}
_52.style.display="";
}else{
while(_52.hasChildNodes()){
_52.removeChild(_52.firstChild);
}
if(_53){
_53.style.display="none";
}
_52.style.display="none";
}
}
}));
},set:function(_54){
var prm=this.prm,_55=1,_56={"metrics":_55,"viewMargin":_55,"autoPosition":_55,"url":_55,"markup":i$.scope(this,"_setMarkup"),"title":i$.scope(this,function(_57){
prm.title=_57;
var t=this.widget.titleNode;
t&&(t.innerHTML=_57);
}),"description":_55};
i$.forIn(_54,function(v,n){
if(_56[n]===_55){
prm[n]=v;
}else{
if(i$.isFunction(_56[n])){
_56[n](v);
}
}
});
if(_54.url){
if(i$.isIE<9&&this._ieRefreshListener){
i$.removeListener(this._ieRefreshListener);
this._ieRefreshListener=null;
}
this.open();
}else{
if(_54.metrics){
this.resize(_54.metrics);
}
}
},_close:function(evt){
if(evt&&i$.isIE<=10){
evt.preventDefault&&evt.preventDefault();
evt.returnValue=false;
}
if(evt&&i$.isFF){
try{
evt.preventDefault();
}
catch(x){
evt.returnValue=false;
}
}
this.close({_terminated:true});
},close:function(_58){
var w=this.widget,r=w.rootNode,p=this.prm,_59=_13(w),fw=_59&&_59.contentWindow,_5a=false;
if(_58&&_58._terminated){
_5a=true;
_58=_5;
}
try{
if(fw&&fw.onbeforeunload){
var buv=fw.onbeforeunload();
if(buv===false||(buv&&buv!==true&&!confirm(buv))){
return;
}
}
}
catch(e){
}
try{
if(_5a&&fw&&fw.onTerminateDialog){
fw.onTerminateDialog();
}
}
catch(e){
if(e instanceof DOMException){
console.log("Could not invoke onTerminateDialog handler. Probably the dialog frame is cross-origin.");
}else{
throw e;
}
}
for(var da=_7,i=da.length;i>0;i--){
if(da[i-1].widget.id===w.id){
da.splice(i-1,1);
}else{
if(fw&&fw===da[i-1].openerWindow){
da[i-1].close();
}
}
}
if(this._positionChangeListener){
this._positionChangeListener.stop();
delete this._positionChangeListener;
}
if(this.inlineKeyDownEvt){
i$.unbindDomEvt(this.inlineKeyDownEvt);
}
if(this.openerWindow){
this.openerWindow.focus();
}
w.hide();
if(_59&&i$.isIE){
_59.src="about:blank";
}
for(var da=_7,i=da.length;i>0;i--){
if(da[i-1].widget.id===w.id){
da.splice(i-1,1);
break;
}
}
p.callbackFn&&p.callbackFn(_58);
r&&r.parentNode&&r.parentNode.removeChild(r);
if(i$.isIE<9){
i$.removeListener(this._ieRefreshListener);
}
}});
}(window));
}
if(!i$.fromPath("wpModules.dialog.confirm")){
wpModules.dialog.confirm=function(){
var _5b="OK",_5c="YES",_5d="NO",_5e="CANCEL",_5f="ABORT",_60="RETRY",_61="IGNORE",_62="TRY",_63="CONTINUE",_64="EXCLAMATION",_65="WARNING",_66="INFORMATION",_67="ASTERISK",_68="STOP",_69="ERROR";
return i$.mash(function(_6a){
var _6b=i$.fromPath,_6c=new i$.Promise(),nls=wpModules.dialog.nls,_6d={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&apos;"},_6e=function(){
return _6b("wpModules.dialog.confirm",true,top)._instance;
},_6f=function(dlg){
_6b("wpModules.dialog.confirm",true,top)._instance=dlg;
},_70=function(s){
return s.replace(/[<>&"']/g,function(ch){
return _6d[ch];
});
},_71=function(_72){
return nls["BUTTON_"+_72];
},_73=function(_74){
var id=i$.isString(_74)?_74:_66;
return nls["ICON_"+id];
},_75=function(_76,idx){
var _77=(_6a.buttonLabels?_6a.buttonLabels[_76]:_71(_76));
return "<input id='btn_"+_76+"' type='submit' tabindex='0' class='wpthemeDialogBtn' onclick='top.wpModules.dialog.confirm._instance.close(this.name);' name='"+_70(_76)+"' value='"+_70(_77)+"' />";
},_78=function(_79){
var b=(i$.isArray(_79)?_79:(i$.isString(_79)?[_79]:[(_5b),(_5e)])),_7a="",idx=0;
i$.each(b,function(_7b){
_7a+=_75(_7b);
});
return _7a;
},_7c=_6e(),_7d=i$.merge({autoClose:false,modal:true,setFocusFn:function(arg){
var _7e=arg.document.getElementById(this.focusControl?"btn_"+this.focusControl:"btn_"+_5d);
if(_7e){
_7e.focus();
}
},callbackFn:function(arg){
_6f(_7c);
var _7f=i$.isString(arg)?arg:_5e;
_6c.resolve({button:_7f});
},markup:"<table class='"+(_6a.rootClass?_6a.rootClass:"")+"' border='0' cellspacing='0' cellpadding='0' role='presentation'><tr>"+(_6a.icon?"<td><img src='"+_T+"' class='msgIcon "+_73(_6a.icon)+"' alt=''></td>":"")+"<td class='msgBody'>"+(_6a.markup||_70(_6a.message))+"</td></tr><tr>"+"<td colspan='2' class='wpthemeDialogFooter'><form action='#' onsubmit='return false;'>"+_78(_6a.buttons)+"</form></td></tr></table>"},i$.merge(_6a,{displayCloseOverlay:true,autoResize:true,draggable:true})),dlg=new wpModules.dialog.Dialog(_7d);
_6f(dlg);
dlg.open();
return _6c;
},{ICON:{EXCLAMATION:_64,WARNING:_65,INFORMATION:_66,ASTERISK:_67,STOP:_68,ERROR:_69},BUTTONS:{OK:_5b,YES:_5c,NO:_5d,CANCEL:_5e,ABORT:_5f,RETRY:_60,IGNORE:_61,TRY:_62,CONTINUE:_63,ABORTRETRYIGNORE:[_5f,_60,_61],CANCELTRYCONTINUE:[_5e,_62,_63],OKCANCEL:[_5b,_5e],RETRYCANCEL:[_60,_5e],YESNO:[_5c,_5d],NOYES:[_5d,_5c],YESNOCANCEL:[_5c,_5d,_5e]}});
}();
}


}catch(e){console.log("Module 'wp_dialog_main': ",e);}
try{(function(_1){
var _2="[\\u00ad\\u0600-\\u0603\\u06dd\\u070f\\u17b4-\\u17b5\\u200b-\\u200f\\u202a-\\u202e\\u2060-\\u2064\\u206a-\\u206f\\ufeff\\ufff9-\\ufffb]|\\ud834[\\udd73-\\udd7a]|\\udb40[\\udc01\\udc20-\\udc7f]",_3="[\\u0000-\\u001f\\u007f-\\u009f]",_4="data-",_5="a11y-",_6=_5+"next",_7=_5+"prev",_8=_5+"first",_9=_5+"last",_a=_5+"up",_b=_5+"down",_c=_5+"title",_d=_5+"action",_e=[_8,_a,_7,_9,_b,_6],_f=5,_10=4,_11=3,_12=2,_13=1,_14=0,_15="ltr",_16=37,_17=39,_18=38,_19=40,_1a=36,_1b=35,_1c=13,_1d=32,_1e=33,_1f=34,_20=true,_21=false,_22=Number.POSITIVE_INFINITY,_23=Number.NEGATIVE_INFINITY,_24=function(_25,_26){
var _27=_26[_25]=_26[_25]||{};
return _27;
},_28=function(aId,_29){
var _2a=_29.ownerDocument.getElementById(aId);
return _2a;
},_2b=function(_2c){
var _2d=((_2c>=0)&&(_2c<=31))||((_2c>=127)&&(_2c<=159));
return _2d;
},_2e=function(_2f,_30){
var _31=_30.getAttribute(_4+_2f);
return _31;
},_32=function(_33,_34){
var _35=_2e(_33,_34),_36=null;
if(_35){
_36=_28(_35,_34);
if(_36===null){
_36=_32(_35,_34);
}
}
return _36;
},_37=function(_38,_39,_3a,_3b){
if(_38){
var id=_38.id,i=_3b.length;
if(!_3a.hasOwnProperty(id)){
_3a[id]=_39(_38);
while(i){
_37(_32(_3b[--i],_38),_39,_3a,_3b);
}
}
}
return _3a;
},_3c=function(_3d){
var _3e=_32(_c,_3d),_3f=_3e?_3c(_3e):(_3d.innerText||_3d.textContent);
return _3f;
},_40=function(_41){
var _42=_41||_3c;
return _42;
},_43=function(_44){
var _45=new RegExp("^(\\s|"+_2+"|"+_3+")*\\u"+("0000"+Number(_44).toString(16)).slice(-4)+".*","i");
return _45;
},_46=function(_47,_48,_49){
var _4a=_49(_48),_4b=_4a&&(_4a.length>0)&&_47.test(_4a);
return _4b;
},_4c=function(_4d,_4e){
var _4f=_37(_4d,_4e,{},_e);
return _4f;
},_50=function(_51,_52,_53){
var _54,_55=_43(_51);
_4c(_52,function(_56){
if(_46(_55,_56,_53)){
if(!_54){
_54=[];
}
_54.push(_56);
}
});
return _54;
},_57=function(_58){
var _59=_58.getBoundingClientRect();
return _59;
},_5a=function(_5b,_5c){
var _5d=(_5b.right>_5c.left)&&(_5b.left<_5c.right);
return _5d;
},_5e=function(_5f,_60){
var _61=(_5f.bottom>_60.top)&&(_5f.top<_60.bottom);
return _61;
},_62=function(_63,_64,_65){
var _66=(_63>=_64)&&(_63<=_65);
return _66;
},_67=function(_68){
var _69=null,_6a=_57(_68),_6b=_22;
_4c(_68,function(_6c){
var _6d=_57(_6c);
if(_62(_6d.top,_6a.bottom,_6b)&&_5a(_6d,_6a)){
_69=_6c;
_6b=_6d.top;
}
});
return _69;
},_6e=function(_6f){
var _70=null,_71=_57(_6f),_72=_71.top;
_4c(_6f,function(_73){
var _74=_57(_73),_75=_74.top;
if((_75<_72)&&_5a(_74,_71)){
_70=_73;
_72=_75;
}
});
return _70;
},_76=function(_77){
var _78=null,_79=_57(_77),_7a=_79.bottom;
_4c(_77,function(_7b){
var _7c=_57(_7b),_7d=_7c.bottom;
if((_7d>_7a)&&_5a(_7c,_79)){
_78=_7b;
_7a=_7d;
}
});
return _78;
},_7e=function(_7f){
var _80=null,_81=_57(_7f),_82=_22;
_4c(_7f,function(_83){
var _84=_57(_83);
if(_62(_84.left,_81.right,_82)&&_5e(_84,_81)){
_80=_83;
_82=_84.left;
}
});
return _80;
},_85=function(_86){
var _87=null,_88=_57(_86),_89=_23;
_4c(_86,function(_8a){
var _8b=_57(_8a);
if(_62(_8b.bottom,_89,_88.top)&&_5a(_8b,_88)){
_87=_8a;
_89=_8b.bottom;
}
});
return _87;
},_8c=function(_8d){
var _8e=null,_8f=_57(_8d),_90=_23;
_4c(_8d,function(_91){
var _92=_57(_91);
if(_62(_92.right,_90,_8f.left)&&_5e(_92,_8f)){
_8e=_91;
_90=_92.right;
}
});
return _8e;
},_93=function(_94){
var _95=_94?_94.dir:_15;
return _95;
},_96=function(_97){
var _98=_93(_97)||_96(_97.parentNode);
return _98;
},_99=function(_9a,_9b){
_9b.tabIndex=_9a;
return _9b;
},_9c=function(_9d){
var _9e=_99(0,_9d);
return _9e;
},_9f=function(_a0){
var _a1=_99(-1,_a0);
return _a1;
},_a2=function(_a3){
var _a4=_a3.tabIndex;
return _a4;
},_a5=function(_a6){
_9c(_a6).focus();
return _20;
},_a7=function(_a8){
if(_a8){
_4c(_a8,_9f);
return _a5(_a8);
}
return _21;
},_a9=function(_aa){
if(_aa){
_4c(_aa,_9f);
return _20;
}
return _21;
},_ab=function(_ac,_ad){
var _ae=_a7(_32(_e[_ac],_ad));
return _ae;
},_af=function(_b0){
var _b1=_ab(_f,_b0);
return _b1;
},_b2=function(_b3){
var _b4=_ab(_12,_b3);
return _b4;
},_b5=function(_b6){
var _b7=_ab(_14,_b6);
return _b7;
},_b8=function(_b9){
var _ba=_ab(_11,_b9);
return _ba;
},_bb=function(_bc){
var _bd=_ab(_13,_bc);
return _bd;
},_be=function(_bf){
var _c0=_ab(_10,_bf);
return _c0;
},_c1=function(_c2){
var _c3=_a7(_85(_c2));
return _c3;
},_c4=function(_c5){
var _c6=_a7(_67(_c5));
return _c6;
},_c7=function(_c8){
var _c9=_a7(_8c(_c8));
return _c9;
},_ca=function(_cb){
var _cc=_a7(_7e(_cb));
return _cc;
},_cd=function(_ce){
return _a7(_6e(_ce));
},_cf=function(_d0){
return _a7(_76(_d0));
},_d1=function(_d2){
var _d3=(_d2===_15)?_17:_16;
return _d3;
},_d4=function(_d5){
_d5.click();
return _20;
},_d6,_d7=function(_d8){
var doc=_d8.document,_d9=doc.body,_da=doc.createElement("div"),_db,_dc,_dd;
_da.style.cssText="border:1px solid;border-color:red green;position:absolute;height:5px;top:-999px;background-image:url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");";
_d9.appendChild(_da);
try{
_db=doc.defaultView.getComputedStyle(_da,"");
}
catch(e){
_db=_da.currentStyle;
}
_dc=_db.backgroundImage;
_dd=((_db.borderTopColor===_db.borderRightColor)||(_dc!==null&&(_dc==="none"||_dc==="url(invalid-url:)")));
_d9.removeChild(_da);
return _dd;
},_de=function(_df){
return function(){
return _d7(_df);
};
},_e0=function(_e1){
var _e2=_e1.i$.onLoadPromise,_e3=_e2.then(_de(_e1)),_e4=function(_e5){
var _e6=_e5||_e1.event;
return _e6;
},_e7=function(_e8,_e9,_ea,_eb){
if(!_eb.altKey&&!_eb.ctrlKey&&!_2b(_e8)){
var _ec=_50(_e8,_e9,_ea),_ed,i,len;
if(_ec){
len=_ec.length;
i=0;
while(i<len){
_ed=_ec[i++];
if(_a2(_ed)<0){
return _a7(_ed);
}
}
return _a7(_ed);
}
}
return _21;
},_ee=function(_ef,_f0,_f1){
var _f2=_e4(_f0),_f3=_e7(_f2.keyCode,_ef,_40(_f1),_f2);
return _f3;
},_f4=function(_f5,_f6){
var _f7=_e4(_f6),_f8;
switch(_f7.keyCode){
case _18:
_f8=_c1(_f5);
break;
case _19:
_f8=_c4(_f5);
break;
case _17:
_f8=_ca(_f5);
break;
case _16:
_f8=_c7(_f5);
break;
case _1a:
_f8=_b5(_f5);
break;
case _1b:
_f8=_b8(_f5);
break;
case _1e:
return _cd(_f5);
case _1f:
return _cf(_f5);
default:
_f8=_21;
}
return _f8;
},_f9=function(_fa,_fb){
var _fc=_e4(_fb),_fd=_96(_fa),_fe=_d1(_fd),_ff=(_16+_17-_fe),_100;
switch(_fc.keyCode){
case _18:
_100=_bb(_fa);
break;
case _19:
_100=_be(_fa);
break;
case _fe:
_100=_af(_fa);
break;
case _ff:
_100=_b2(_fa);
break;
case _1a:
_100=_b5(_fa);
break;
case _1b:
_100=_b8(_fa);
break;
default:
_100=_21;
}
return _100;
},_101=function(_102,_103,_104){
var _105=_e4(_103),_106=_105.keyCode,_107;
switch(_106){
case _1c:
_107=_21;
break;
case _1d:
_107=_d4(_102);
break;
default:
return _f9(_102,_105)||_e7(_106,_102,_40(_104),_105);
}
return _107;
};
return {navigateSequence:_f9,navigateMenu:_101,navigateGrid:_f4,setFocus:_a7,clearFocus:_a9,setFocusFromKey:_ee,forEachNode:_4c,clone:_d6,highContrastMode:_e3};
};
_d6=function(_108){
var _109=_24("wpModules",_108),_10a=_109.a11y=_109.a11y||_e0(_108);
return _10a;
};
return _d6(_1);
}(window));


}catch(e){console.log("Module 'wp_a11y': ",e);}
try{(function(){
var _1=i$.fromPath,_2=i$.toPath,_3=i$.isArray,_4=i$.each,_5=i$.forEach,_6=i$.augment,_7=i$.Promise,_8=true,_9=false,_a="wpModules.state.page._mgr",_b=function(p){
return p.name;
},_c=function(p){
return p.value;
},_d=function(p){
return p.nsuri;
},_e=function(a){
return a.length;
},_f=function(a1,a2){
if(a1&&!a2){
return _9;
}
if(!a1&&a2){
return _9;
}
if(_e(a1)!=_e(a2)){
return _9;
}
var _10=_8;
_5(a1,function(a,i){
if(a!=a2[i]){
_10=_9;
return _9;
}
});
return _10;
},_11=function(_12){
var _13={};
if(!_12){
_13.all=[];
return _13;
}
if(!_3(_12)){
_12=[_12];
}
_13.all=_12.slice(0,_e(_12));
_13.cache={};
_13.log=[];
return _13;
},_14=function(_15,_16){
if(!_15){
return _16.all;
}
if(!_3(_15)){
_15=[_15];
}
if(_e(_15)<=0){
return [];
}
var _17=[];
_4(_15,function(p){
get(_d(p),_b(p),_16,_17);
});
return _17;
},get=function(_18,_19,_1a,_1b){
var _1c=_1a.cache[_18];
if(_1c){
if(_19){
add(_1c[_19],_1b);
}else{
_1d(_1c,_1b);
}
}else{
_1e(_18,_1a);
get(_18,_19,_1a,_1b);
}
},add=function(_1f,_20){
_1f&&_20.push(_1f);
},_1d=function(_21,_22){
if(_21){
_4(_21,function(p){
add(p,_22);
});
}
},_1e=function(_23,_24){
var _25=_24.cache[_23]={};
_5(_24.all,function(p){
if(_d(p)==_23){
_25[_b(p)]=p;
}
});
},_26=function(_27,_28,_29){
if(!_27){
return;
}
if(!_3(_27)){
_27=[_27];
}
if(_e(_27)>0){
_4(_27,function(p){
set(p,_28);
});
}
if(_29){
_2a(_27,_28);
}
},_2a=function(_2b,_2c){
var _2d=[];
if(_e(_2b)<_e(_2c.all)){
_5(_2c.all,function(p){
var _2e=false;
_5(_2b,function(_2f){
if(_d(p)==_d(_2f)&&_b(p)==_b(_2f)){
_2e=true;
return false;
}
});
if(!_2e){
_2d.push(p);
}
});
}
_5(_2d,function(p){
set({"name":p.name,"nsuri":p.nsuri,"value":null},_2c);
});
},set=function(_30,_31){
if(!_b(_30)||!_d(_30)){
return;
}
var _32=_9,_33=_9;
_5(_31.all,function(p,i){
if(_d(p)==_d(_30)&&_b(p)==_b(_30)){
var _34=_c(_30);
if(_34){
if(!_f(_34,_c(p))){
_31.all[i]=_30;
_33=_8;
}
}else{
_31.all.splice(i,1);
_33=_8;
}
_32=_8;
}
});
if(!_32&&_c(_30)){
_31.all.push(_30);
_33=_8;
}
if(_33){
_31.log.push(_30);
}
var _35=_31.cache[_d(_30)];
if(_35){
var _36=_b(_30);
if(_c(_30)){
_35[_36]=_30;
}else{
delete _35[_36];
}
}
},_37=function(_38){
var _39=_3a(_38);
return _39;
},_3b=0,_3c=function(_3d,fn){
var _3e="fn"+(++_3b);
_3d[_3e]=fn;
return _3e;
},_3f=function(_40,_41){
if(_41 in _40){
delete _40[_41];
}
},_42=function(_43,_44){
for(var _45 in _43){
var _46=_37(_44),fn=_43[_45];
if(fn){
try{
fn(_46);
}
catch(err){
}
}
}
},_47=function(_48){
return _1(_a,_9,_48);
},_49=function(_4a,_4b){
_2(_a,_4a,_4b);
},_4c=function(_4d){
var _4e=_11(_4d),cbs={};
return {getState:function(){
var _4f=new _7(),_50=_37(_4e);
_4f.resolve(_50);
return _4f;
},addListener:function(_51){
var _52=_3c(cbs,_51);
return _52;
},removeListener:function(_53){
_3f(cbs,_53);
},commit:function(_54){
_4e=_54._data;
_42(cbs,_4e);
_4e.log=[];
var _55=new _7().resolve();
return _55;
},init:function(_56){
_4e=_11(_56);
}};
},_3a=function(_57){
var d=_57;
return {_data:d,renderParams:function(){
var _58=_59(d);
return _58;
}};
},_59=function(_5a){
var d=_5a;
return {get:function(_5b){
return _14(_5b,d);
},set:function(_5c,_5d){
_26(_5c,d,_5d);
},getModified:function(){
return d.log;
}};
},_5e=i$.fromPath("wpModules.state.page",_8);
i$.mash(_5e,{"newStateManager":_4c,"setStateManager":_49,"getStateManager":_47});
})();
(function(){
var _5f=i$.fromPath("wpModules.state.page"),_60=_5f.newStateManager(),_61="window/startRender";
_60.init(_5f._initial);
delete wpModules.state.page._initial;
_5f.setStateManager(_60);
if(top!==self&&top.i$){
top.i$.fireEvent(_61,[self]);
}
i$.fireEvent(_61);
})();


}catch(e){console.log("Module 'wp_state_page': ",e);}
try{(function(){
	if(i$.isIE){
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('header');
		document.createElement('hgroup');
		document.createElement('nav');
		document.createElement('section');
	}
	if(i$.isIE == 7){ document.getElementsByTagName("html")[0].className+=" wptheme_ie7"; }
	if(i$.isIE == 8){ document.getElementsByTagName("html")[0].className+=" wptheme_ie8"; }
	if(i$.isIE == 9){ document.getElementsByTagName("html")[0].className+=" wptheme_ie9"; }
	if(i$.isIE == 10){ document.getElementsByTagName("html")[0].className+=" wptheme_ie10"; }
	if(i$.isIE == 11){ document.getElementsByTagName("html")[0].className+=" wptheme_ie11"; }
})();


}catch(e){console.log("Module 'wp_theme_portal_85': ",e);}
try{(function(_1){
var _2=_1,_3=i$.fromPath,_4="wpModules.theme.WindowUtils",_5=_4+".baseURL",_6=_5+".Promise."+Math.random(),_7="wpViewFrameContainer",_8="wpthemeMaster",_9="wpToolbarPrimaryFrameContainer",_a="wpToolbarSecondaryFrameContainer",_b=[_7,_8,_9,_a],_c=i$.createDom,_d=new i$.Promise(),_e=function(id){
if(id){
if(id==_7){
var w=_f(_7)||_10(_7)||top;
if(w&&w.ibm_mobile){
var _11=top.document.querySelectorAll("iframe");
if(_11.length>0&&_11[0].contentWindow&&_11[0].contentWindow.ibmCfg){
w=_11[0].contentWindow;
}
}
return w;
}else{
if(id==_8){
var _12=_e(_7);
return _12.parent||_12;
}else{
if(id==_9){
return _f(_9)||_10(_9);
}else{
if(id==_a){
return _f(_a)||_10(_a);
}else{
if(_13(_2)==id){
return _2;
}else{
for(var i=0,l=_b.length;i<l;i++){
var w=_e(_b[i]);
if(w&&_13(w)==id){
return w;
}
}
return null;
}
}
}
}
}
}else{
return _2;
}
},_f=function(id){
try{
var f=_14(top,id+"-iframe");
return f?f.window:null;
}
catch(e){
return null;
}
},_10=function(id){
try{
var w=_2,fID=id+"-iframe";
f=_14(w,fID);
while(!f&&w&&w!==top){
w=w.parent;
f=_14(w,fID);
}
return f?f.window:null;
}
catch(e){
return null;
}
},_14=function(w,id){
if(w){
var fs=w.frames;
if(fs){
return fs[id];
}
}
return null;
},_13=function(w){
return _3("ibmCfg.portalConfig.currentPageOID",false,w);
},_15=function(){
var ids=[],add=function(id){
if(id&&ids.indexOf(id)<0){
ids.push(id);
}
};
for(var i=0,l=_b.length;i<l;i++){
var w=_e(_b[i]);
if(w){
add(_13(w));
}
}
return ids;
},_16=function(win){
var id=_5,doc=win.document,_17=doc.getElementById(id);
if(!_17){
var _18=doc.getElementsByTagName("head")[0],_17=_c("link",{"id":id,"rel":"alternate","href":"#"},_18);
}
var _19=_17.href;
var _1a=_19.indexOf("#");
if(_1a>0){
_19=_19.substr(0,_1a);
}
_19=_19.replace("%24project","$project");
return _19;
},_1b=function(win){
var _1c=_3(_4,false,win),doc=win.document,url;
if(null!=_1c){
return _1c.baseURL;
}
_1c=win[_6];
if(null!=_1c){
return _1c;
}
_1c=new i$.Promise();
win[_6]=_1c;
if(doc.readyState==="loading"){
doc.addEventListener("DOMContentLoaded",function(){
url=_16(win);
_1c.resolve(url);
});
}else{
url=_16(win);
_1c.resolve(url);
}
return _1c;
};
i$.toPath(_4,{VIEW_AREA:_7,MASTER:_8,getWindow:function(id){
return _e(id);
},getBaseURL:function(win){
return _16(win);
},getPageIDs:function(){
return _15();
},findBaseURL:_1b,baseURL:_d});
})(window);


}catch(e){console.log("Module 'wp_theme_utils': ",e);}
try{(function(){
i$.addOnLoad(function(){
var _1=i$.fromPath("wpModules.state.page");
if(_1){
var _2=_1.getStateManager(),ln=function(o){
return o.length;
},_3=function(o){
if(o&&ln(o)>0){
var v=o[0].value;
if(v&&ln(v)>0){
return v[0];
}
}
return null;
};
_2&&_2.getState().then(function(_4){
var _5=wpModules.theme.WindowUtils,_6=_3(_4.renderParams().get({nsuri:"http://www.ibm.com/xmlns/prod/websphere/portal/publicparams",name:"showTools"})),_7=function(_8){
var _9=null;
if(_8&&_8.frames){
var _a=_8.frames[_5.VIEW_AREA+"-iframe"];
if(_a){
_9=_a.window;
}
}
return _9;
},_b=function(_c){
return _7(_c);
},_d=function(){
return top.location.href.indexOf("/$preview")>=0;
};
if(!_d()){
if((_6&&self===top)||(!_6&&self!==top&&_b(self.parent)&&_7(self.parent)===self)){
var _e=_5.getBaseURL(_5.getWindow(_5.VIEW_AREA)||top),_f=_e.indexOf("?");
if(_f>=0){
_e=_e.substr(0,_f);
}
_e+="?uri=toolbar:close";
top.location.href=_e;
}
}
var _10=function(){
if(!_6&&self===top){
var doc=document,_11=doc.activeElement;
if(doc.getElementsByClassName&&(!_11||_11===doc.body)){
var n=doc.getElementsByClassName("wpToolbarFocusStart");
if(n&&n.length>0){
var e=n[0];
e.focus();
}
}
}
};
_10();
});
}
});
})();


}catch(e){console.log("Module 'wp_toolbar_viewframe_validator': ",e);}
try{/**
 * Swiper 4.4.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 19, 2018
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Swiper = factory());
}(this, (function () { 'use strict';

  /**
   * SSR Window 1.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2018, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 18, 2018
   */
  var doc = (typeof document === 'undefined') ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {},
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  } : document; // eslint-disable-line

  var win = (typeof window === 'undefined') ? {
    document: doc,
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        },
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
  } : window; // eslint-disable-line

  /**
   * Dom7 2.1.2
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * http://framework7.io/docs/dom.html
   *
   * Copyright 2018, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under MIT
   *
   * Released on: September 13, 2018
   */

  var Dom7 = function Dom7(arr) {
    var self = this;
    // Create array-like object
    for (var i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  };

  function $(selector, context) {
    var arr = [];
    var i = 0;
    if (selector && !context) {
      if (selector instanceof Dom7) {
        return selector;
      }
    }
    if (selector) {
        // String
      if (typeof selector === 'string') {
        var els;
        var tempParent;
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
          tempParent = doc.createElement(toCreate);
          tempParent.innerHTML = html;
          for (i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
            // Pure ID selector
            els = [doc.getElementById(selector.trim().split('#')[1])];
          } else {
            // Other selectors
            els = (context || doc).querySelectorAll(selector.trim());
          }
          for (i = 0; i < els.length; i += 1) {
            if (els[i]) { arr.push(els[i]); }
          }
        }
      } else if (selector.nodeType || selector === win || selector === doc) {
        // Node/element
        arr.push(selector);
      } else if (selector.length > 0 && selector[0].nodeType) {
        // Array of elements or instance of Dom
        for (i = 0; i < selector.length; i += 1) {
          arr.push(selector[i]);
        }
      }
    }
    return new Dom7(arr);
  }

  $.fn = Dom7.prototype;
  $.Class = Dom7;
  $.Dom7 = Dom7;

  function unique(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
    }
    return uniqueArray;
  }

  // Classes and attributes
  function addClass(className) {
    if (typeof className === 'undefined') {
      return this;
    }
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.add(classes[i]); }
      }
    }
    return this;
  }
  function removeClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.remove(classes[i]); }
      }
    }
    return this;
  }
  function hasClass(className) {
    if (!this[0]) { return false; }
    return this[0].classList.contains(className);
  }
  function toggleClass(className) {
    var classes = className.split(' ');
    for (var i = 0; i < classes.length; i += 1) {
      for (var j = 0; j < this.length; j += 1) {
        if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') { this[j].classList.toggle(classes[i]); }
      }
    }
    return this;
  }
  function attr(attrs, value) {
    var arguments$1 = arguments;

    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) { return this[0].getAttribute(attrs); }
      return undefined;
    }

    // Set attrs
    for (var i = 0; i < this.length; i += 1) {
      if (arguments$1.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        // eslint-disable-next-line
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  // eslint-disable-next-line
  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }
    return this;
  }
  function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
      el = this[0];
      // Get value
      if (el) {
        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
          return el.dom7ElementDataStorage[key];
        }

        var dataKey = el.getAttribute(("data-" + key));
        if (dataKey) {
          return dataKey;
        }
        return undefined;
      }
      return undefined;
    }

    // Set value
    for (var i = 0; i < this.length; i += 1) {
      el = this[i];
      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
      el.dom7ElementDataStorage[key] = value;
    }
    return this;
  }
  // Transforms
  // eslint-disable-next-line
  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransform = transform;
      elStyle.transform = transform;
    }
    return this;
  }
  function transition(duration) {
    if (typeof duration !== 'string') {
      duration = duration + "ms"; // eslint-disable-line
    }
    for (var i = 0; i < this.length; i += 1) {
      var elStyle = this[i].style;
      elStyle.webkitTransitionDuration = duration;
      elStyle.transitionDuration = duration;
    }
    return this;
  }
  // Events
  function on() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) { return; }
      var eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
      else {
        var parents = $(target).parents(); // eslint-disable-line
        for (var k = 0; k < parents.length; k += 1) {
          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
        }
      }
    }
    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var event$1 = events[j];
          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
          el.dom7LiveListeners[event$1].push({
            listener: listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event$1, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off() {
    var assign;

    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];
    var eventType = args[0];
    var targetSelector = args[1];
    var listener = args[2];
    var capture = args[3];
    if (typeof args[1] === 'function') {
      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
      targetSelector = undefined;
    }
    if (!capture) { capture = false; }

    var events = eventType.split(' ');
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = (void 0);
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }
        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var events = args[0].split(' ');
    var eventData = args[1];
    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];
      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var evt = (void 0);
        try {
          evt = new win.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
        } catch (e) {
          evt = doc.createEvent('Event');
          evt.initEvent(event, true, true);
          evt.detail = eventData;
        }
        // eslint-disable-next-line
        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
    return this;
  }
  function transitionEnd(callback) {
    var events = ['webkitTransitionEnd', 'transitionend'];
    var dom = this;
    var i;
    function fireCallBack(e) {
      /* jshint validthis:true */
      if (e.target !== this) { return; }
      callback.call(this, e);
      for (i = 0; i < events.length; i += 1) {
        dom.off(events[i], fireCallBack);
      }
    }
    if (callback) {
      for (i = 0; i < events.length; i += 1) {
        dom.on(events[i], fireCallBack);
      }
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        // eslint-disable-next-line
        var styles = this.styles();
        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = doc.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === win ? win.scrollY : el.scrollTop;
      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
      return {
        top: (box.top + scrollTop) - clientTop,
        left: (box.left + scrollLeft) - clientLeft,
      };
    }

    return null;
  }
  function styles() {
    if (this[0]) { return win.getComputedStyle(this[0], null); }
    return {};
  }
  function css(props, value) {
    var i;
    if (arguments.length === 1) {
      if (typeof props === 'string') {
        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
      } else {
        for (i = 0; i < this.length; i += 1) {
          // eslint-disable-next-line
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === 'string') {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  // Iterate over the collection passing elements to `callback`
  function each(callback) {
    // Don't bother continuing without a callback
    if (!callback) { return this; }
    // Iterate over the current collection
    for (var i = 0; i < this.length; i += 1) {
      // If the callback returns false
      if (callback.call(this[i], i, this[i]) === false) {
        // End the loop early
        return this;
      }
    }
    // Return `this` to allow chained DOM operations
    return this;
  }
  // eslint-disable-next-line
  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : undefined;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }
    return this;
  }
  // eslint-disable-next-line
  function text(text) {
    if (typeof text === 'undefined') {
      if (this[0]) {
        return this[0].textContent.trim();
      }
      return null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }
    return this;
  }
  function is(selector) {
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') { return false; }
    if (typeof selector === 'string') {
      if (el.matches) { return el.matches(selector); }
      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

      compareWith = $(selector);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    } else if (selector === doc) { return el === doc; }
    else if (selector === win) { return el === win; }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) { return true; }
      }
      return false;
    }
    return false;
  }
  function index() {
    var child = this[0];
    var i;
    if (child) {
      i = 0;
      // eslint-disable-next-line
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) { i += 1; }
      }
      return i;
    }
    return undefined;
  }
  // eslint-disable-next-line
  function eq(index) {
    if (typeof index === 'undefined') { return this; }
    var length = this.length;
    var returnIndex;
    if (index > length - 1) {
      return new Dom7([]);
    }
    if (index < 0) {
      returnIndex = length + index;
      if (returnIndex < 0) { return new Dom7([]); }
      return new Dom7([this[returnIndex]]);
    }
    return new Dom7([this[index]]);
  }
  function append() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var newChild;

    for (var k = 0; k < args.length; k += 1) {
      newChild = args[k];
      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }
  function prepend(newChild) {
    var i;
    var j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div');
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return new Dom7([this[0].nextElementSibling]);
        }
        return new Dom7([]);
      }

      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.nextElementSibling) {
      var next = el.nextElementSibling; // eslint-disable-line
      if (selector) {
        if ($(next).is(selector)) { nextEls.push(next); }
      } else { nextEls.push(next); }
      el = next;
    }
    return new Dom7(nextEls);
  }
  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];
      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return new Dom7([el.previousElementSibling]);
        }
        return new Dom7([]);
      }

      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
      return new Dom7([]);
    }
    return new Dom7([]);
  }
  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) { return new Dom7([]); }
    while (el.previousElementSibling) {
      var prev = el.previousElementSibling; // eslint-disable-line
      if (selector) {
        if ($(prev).is(selector)) { prevEls.push(prev); }
      } else { prevEls.push(prev); }
      el = prev;
    }
    return new Dom7(prevEls);
  }
  function parent(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) { parents.push(this[i].parentNode); }
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }
    return $(unique(parents));
  }
  function parents(selector) {
    var parents = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var parent = this[i].parentNode; // eslint-disable-line
      while (parent) {
        if (selector) {
          if ($(parent).is(selector)) { parents.push(parent); }
        } else {
          parents.push(parent);
        }
        parent = parent.parentNode;
      }
    }
    return $(unique(parents));
  }
  function closest(selector) {
    var closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') {
      return new Dom7([]);
    }
    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }
    return closest;
  }
  function find(selector) {
    var foundElements = [];
    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);
      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return new Dom7(foundElements);
  }
  function children(selector) {
    var children = []; // eslint-disable-line
    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].childNodes;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector) {
          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }
    return new Dom7(unique(children));
  }
  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) { this[i].parentNode.removeChild(this[i]); }
    }
    return this;
  }
  function add() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var dom = this;
    var i;
    var j;
    for (i = 0; i < args.length; i += 1) {
      var toAdd = $(args[i]);
      for (j = 0; j < toAdd.length; j += 1) {
        dom[dom.length] = toAdd[j];
        dom.length += 1;
      }
    }
    return dom;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    data: data,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    remove: remove,
    add: add,
    styles: styles,
  };

  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  var Utils = {
    deleteProps: function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {
          // no getter for object
        }
        try {
          delete object[key];
        } catch (e) {
          // something got wrong
        }
      });
    },
    nextTick: function nextTick(callback, delay) {
      if ( delay === void 0 ) delay = 0;

      return setTimeout(callback, delay);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(el, axis) {
      if ( axis === void 0 ) axis = 'x';

      var matrix;
      var curTransform;
      var transformMatrix;

      var curStyle = win.getComputedStyle(el, null);

      if (win.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
        }
        // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[4]); }
      }
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
        // Crazy IE10 Matrix
        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
        // Normal Browsers
        else { curTransform = parseFloat(matrix[5]); }
      }
      return curTransform || 0;
    },
    parseUrlQuery: function parseUrlQuery(url) {
      var query = {};
      var urlToParse = url || win.location.href;
      var i;
      var params;
      var param;
      var length;
      if (typeof urlToParse === 'string' && urlToParse.length) {
        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
        length = params.length;

        for (i = 0; i < length; i += 1) {
          param = params[i].replace(/#\S+/g, '').split('=');
          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
        }
      }
      return query;
    },
    isObject: function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    },
    extend: function extend() {
      var args = [], len$1 = arguments.length;
      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

      var to = Object(args[0]);
      for (var i = 1; i < args.length; i += 1) {
        var nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                to[nextKey] = {};
                Utils.extend(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
      return to;
    },
  };

  var Support = (function Support() {
    var testDiv = doc.createElement('div');
    return {
      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
        return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
      }()),

      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator)),
      prefixedPointerEvents: !!win.navigator.msPointerEnabled,

      transition: (function checkTransition() {
        var style = testDiv.style;
        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
      }()),
      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
        var style = testDiv.style;
        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
      }()),

      flexbox: (function checkFlexbox() {
        var style = testDiv.style;
        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
        for (var i = 0; i < styles.length; i += 1) {
          if (styles[i] in style) { return true; }
        }
        return false;
      }()),

      observer: (function checkObserver() {
        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
      }()),

      passiveListener: (function checkPassiveListener() {
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            },
          });
          win.addEventListener('testPassiveListener', null, opts);
        } catch (e) {
          // No support
        }
        return supportsPassive;
      }()),

      gestures: (function checkGestures() {
        return 'ongesturestart' in win;
      }()),
    };
  }());

  var SwiperClass = function SwiperClass(params) {
    if ( params === void 0 ) params = {};

    var self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  };

  var staticAccessors = { components: { configurable: true } };

  SwiperClass.prototype.on = function on (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
      self.eventsListeners[event][method](handler);
    });
    return self;
  };

  SwiperClass.prototype.once = function once (events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') { return self; }
    function onceHandler() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

      handler.apply(self, args);
      self.off(events, onceHandler);
    }
    return self.on(events, onceHandler, priority);
  };

  SwiperClass.prototype.off = function off (events, handler) {
    var self = this;
    if (!self.eventsListeners) { return self; }
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.emit = function emit () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;
    if (!self.eventsListeners) { return self; }
    var events;
    var data;
    var context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsListeners && self.eventsListeners[event]) {
        var handlers = [];
        self.eventsListeners[event].forEach(function (eventHandler) {
          handlers.push(eventHandler);
        });
        handlers.forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  };

  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  };

  SwiperClass.prototype.useModules = function useModules (modulesParams) {
      if ( modulesParams === void 0 ) modulesParams = {};

    var instance = this;
    if (!instance.modules) { return; }
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach(function (modulePropName) {
          var moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  };

  staticAccessors.components.set = function (components) {
    var Class = this;
    if (!Class.use) { return; }
    Class.use(components);
  };

  SwiperClass.installModule = function installModule (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach(function (key) {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach(function (key) {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  };

  SwiperClass.use = function use (module) {
      var params = [], len = arguments.length - 1;
      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

    var Class = this;
    if (Array.isArray(module)) {
      module.forEach(function (m) { return Class.installModule(m); });
      return Class;
    }
    return Class.installModule.apply(Class, [ module ].concat( params ));
  };

  Object.defineProperties( SwiperClass, staticAccessors );

  function updateSize () {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined') {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (typeof swiper.params.height !== 'undefined') {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
      return;
    }

    // Subtract paddings
    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

    Utils.extend(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height,
    });
  }

  function updateSlides () {
    var swiper = this;
    var params = swiper.params;

    var $wrapperEl = swiper.$wrapperEl;
    var swiperSize = swiper.size;
    var rtl = swiper.rtlTranslate;
    var wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;

    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') {
      return;
    }
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
    }

    swiper.virtualSize = -spaceBetween;

    // reset margins
    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
    else { slides.css({ marginRight: '', marginBottom: '' }); }

    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }
      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    }

    // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);
      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = (void 0);
        var column = (void 0);
        var row = (void 0);
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
          slide
            .css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex,
            });
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - (row * slidesPerRow);
        }
        slide
          .css(
            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
          )
          .attr('data-swiper-column', column)
          .attr('data-swiper-row', row);
      }
      if (slide.css('display') === 'none') { continue; } // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = win.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;
        if (currentTransform) {
          slide[0].style.transform = 'none';
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide.outerWidth(true)
            : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width'));
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
            var boxSizing = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height'));
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
            var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
            if (boxSizing$1 && boxSizing$1 === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
            }
          }
        }
        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
      } else {
        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
        if (params.roundLengths) { slideSize = Math.floor(slideSize); }

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);


      if (params.centeredSlides) {
        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;

      prevSlideSize = slideSize;

      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (
      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
    }
    if (!Support.flexbox || params.setWrapperSize) {
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
      if (params.centeredSlides) {
        newSlidesGrid = [];
        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
          var slidesGridItem = snapGrid[i$1];
          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
        }
        snapGrid = newSlidesGrid;
      }
    }

    // Remove last grid elements depending on width
    if (!params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
        var slidesGridItem$1 = snapGrid[i$2];
        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem$1);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) { snapGrid = [0]; }

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
        else { slides.css({ marginRight: (spaceBetween + "px") }); }
      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
    }

    if (params.centerInsufficientSlides) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Utils.extend(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid,
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
      swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight (speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) { break; }
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    }

    // Find new height from highest slide in view
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }

    // Update Height
    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
  }

  function updateSlidesOffset () {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var slides = swiper.slides;
    var rtl = swiper.rtlTranslate;

    if (slides.length === 0) { return; }
    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

    var offsetCenter = -translate;
    if (rtl) { offsetCenter = translate; }

    // Visible Slides
    slides.removeClass(params.slideVisibleClass);

    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
      if (params.watchSlidesVisibility) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                  || (slideAfter > 0 && slideAfter <= swiper.size)
                  || (slideBefore <= 0 && slideAfter >= swiper.size);
        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }
      slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress (translate) {
    if ( translate === void 0 ) translate = (this && this.translate) || 0;

    var swiper = this;
    var params = swiper.params;

    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress;
    var isBeginning = swiper.isBeginning;
    var isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / (translatesDiff);
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Utils.extend(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd,
    });

    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }
    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses () {
    var swiper = this;

    var slides = swiper.slides;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;
    var realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;

    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

    var activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    }

    // Active classes
    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    // Next Slide
    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    // Prev Slide
    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
          .addClass(params.slideDuplicatePrevClass);
      }
    }
  }

  function updateActiveIndex (newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var params = swiper.params;
    var previousIndex = swiper.activeIndex;
    var previousRealIndex = swiper.realIndex;
    var previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      // Normalize slideIndex
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
      }
    }
    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }
      return;
    }

    // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

    Utils.extend(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex,
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }

  function updateClickedSlide (e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
    var slideFound = false;
    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) { slideFound = true; }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide,
  };

  function getTranslate (axis) {
    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

    var swiper = this;

    var params = swiper.params;
    var rtl = swiper.rtlTranslate;
    var translate = swiper.translate;
    var $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
    if (rtl) { currentTranslate = -currentTranslate; }

    return currentTranslate || 0;
  }

  function setTranslate (translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (!params.virtualTranslate) {
      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;

    // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate () {
    return (-this.snapGrid[0]);
  }

  function maxTranslate () {
    return (-this.snapGrid[this.snapGrid.length - 1]);
  }

  var translate = {
    getTranslate: getTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
  };

  function setTransition (duration, byController) {
    var swiper = this;

    swiper.$wrapperEl.transition(duration);

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var params = swiper.params;
    var previousIndex = swiper.previousIndex;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }
      swiper.emit('slideChangeTransitionStart');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1 (runCallbacks, direction) {
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var previousIndex = swiper.previousIndex;
    swiper.animating = false;
    swiper.setTransition(0);

    var dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) { dir = 'next'; }
      else if (activeIndex < previousIndex) { dir = 'prev'; }
      else { dir = 'reset'; }
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }
      swiper.emit('slideChangeTransitionEnd');
      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1,
  };

  function slideTo (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) { slideIndex = 0; }

    var params = swiper.params;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var previousIndex = swiper.previousIndex;
    var activeIndex = swiper.activeIndex;
    var rtl = swiper.rtlTranslate;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex];

    // Update progress
    swiper.updateProgress(translate);

    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    }
    // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) { return false; }
      }
    }

    var direction;
    if (slideIndex > activeIndex) { direction = 'next'; }
    else if (slideIndex < activeIndex) { direction = 'prev'; }
    else { direction = 'reset'; }


    // Update Index
    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      // Update Height
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }
      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }

    if (speed === 0 || !Support.transition) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop (index, speed, runCallbacks, internal) {
    if ( index === void 0 ) index = 0;
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var params = swiper.params;
    var animating = swiper.animating;
    var snapGrid = swiper.snapGrid;
    var slidesGrid = swiper.slidesGrid;
    var rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating) { return false; }
      swiper.loopFix();
      // eslint-disable-next-line
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) { return -Math.floor(Math.abs(val)); }
      return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });

    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest (speed, runCallbacks, internal) {
    if ( speed === void 0 ) speed = this.params.speed;
    if ( runCallbacks === void 0 ) runCallbacks = true;

    var swiper = this;
    var index = swiper.activeIndex;
    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

    if (snapIndex < swiper.snapGrid.length - 1) {
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
        index = swiper.params.slidesPerGroup;
      }
    }

    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;

    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
      if (swiper.animating) { return; }
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      if (params.centeredSlides) {
        if (
          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
            .eq(0)
            .index();

          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide,
  };

  function loopCreate () {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    // Remove duplicated slides
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

    var slides = $wrapperEl.children(("." + (params.slideClass)));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
          $wrapperEl.append(blankNode);
        }
        slides = $wrapperEl.children(("." + (params.slideClass)));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (index, el) {
      var slide = $(el);
      if (index < swiper.loopedSlides) { appendSlides.push(el); }
      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
      slide.attr('data-swiper-slide-index', index);
    });
    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix () {
    var swiper = this;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var slides = swiper.slides;
    var loopedSlides = swiper.loopedSlides;
    var allowSlidePrev = swiper.allowSlidePrev;
    var allowSlideNext = swiper.allowSlideNext;
    var snapGrid = swiper.snapGrid;
    var rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;

    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate();


    // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged$1 && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
  }

  function loopDestroy () {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var slides = swiper.slides;
    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy,
  };

  function setGrabCursor (moving) {
    var swiper = this;
    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor () {
    var swiper = this;
    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor,
  };

  function appendSlide (slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.append(slides[i]); }
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
  }

  function prependSlide (slides) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide (index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var params = swiper.params;
    var activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

    var slidesBuffer = [];
    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
      $wrapperEl.append(slidesBuffer[i$2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }
    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide (slidesIndexes) {
    var swiper = this;
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl;
    var activeIndex = swiper.activeIndex;

    var activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && Support.observer)) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides () {
    var swiper = this;

    var slidesIndexes = [];
    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides,
  };

  var Device = (function Device() {
    var ua = win.navigator.userAgent;

    var device = {
      ios: false,
      android: false,
      androidChrome: false,
      desktop: false,
      windows: false,
      iphone: false,
      ipod: false,
      ipad: false,
      cordova: win.cordova || win.phonegap,
      phonegap: win.cordova || win.phonegap,
    };

    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


    // Windows
    if (windows) {
      device.os = 'windows';
      device.osVersion = windows[2];
      device.windows = true;
    }
    // Android
    if (android && !windows) {
      device.os = 'android';
      device.osVersion = android[2];
      device.android = true;
      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
      device.osVersion = iphone[2].replace(/_/g, '.');
      device.iphone = true;
    }
    if (ipad) {
      device.osVersion = ipad[2].replace(/_/g, '.');
      device.ipad = true;
    }
    if (ipod) {
      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
      device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
      if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
      }
    }

    // Desktop
    device.desktop = !(device.os || device.android || device.webView);

    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

    // Minimal UI
    if (device.os && device.os === 'ios') {
      var osVersionArr = device.osVersion.split('.');
      var metaViewport = doc.querySelector('meta[name="viewport"]');
      device.minimalUi = !device.webView
        && (ipod || iphone)
        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
    }

    // Pixel Ratio
    device.pixelRatio = win.devicePixelRatio || 1;

    // Export object
    return device;
  }());

  function onTouchStart (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
    if (data.isTouched && data.isMoved) { return; }
    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$(e).closest(params.swipeHandler)[0]) { return; }
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY;

    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection
      && ((startX <= edgeSwipeThreshold)
      || (startX >= win.screen.width - edgeSwipeThreshold))
    ) {
      return;
    }

    Utils.extend(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    });

    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = Utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) { data.allowThresholdMove = false; }
    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($(e.target).is(data.formElements)) { preventDefault = false; }
      if (
        doc.activeElement
        && $(doc.activeElement).is(data.formElements)
        && doc.activeElement !== e.target
      ) {
        doc.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }
    swiper.emit('touchStart', e);
  }

  function onTouchMove (event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
      return;
    }
    if (data.isTouchEvent && e.type === 'mousemove') { return; }
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;
      if (data.isTouched) {
        Utils.extend(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = Utils.now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (
          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && doc.activeElement) {
      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) { return; }

    touches.currentX = pageX;
    touches.currentY = pageY;

    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;
      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if ((diffX * diffX) + (diffY * diffY) >= 25) {
          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }
      data.allowMomentumBounce = false;
      // Grab Cursor
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;

    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;

    diff *= params.touchRatio;
    if (rtl) { diff = -diff; }

    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;

    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }

    // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }


    // Threshold
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger) { return; }

    // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: Utils.now(),
      });
    }
    // Update progress
    swiper.updateProgress(data.currentTranslate);
    // Update translate
    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd (event) {
    var swiper = this;
    var data = swiper.touchEventsData;

    var params = swiper.params;
    var touches = swiper.touches;
    var rtl = swiper.rtlTranslate;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesGrid = swiper.slidesGrid;
    var snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; }
    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }

    // Time diff
    var touchEndTime = Utils.now();
    var timeDiff = touchEndTime - data.touchStartTime;

    // Tap, doubleTap, Click
    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap', e);
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        data.clickTimeout = Utils.nextTick(function () {
          if (!swiper || swiper.destroyed) { return; }
          swiper.emit('click', e);
        }, 300);
      }
      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
        swiper.emit('doubleTap', e);
      }
    }

    data.lastClickTime = Utils.now();
    Utils.nextTick(function () {
      if (!swiper.destroyed) { swiper.allowClick = true; }
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;

    var currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();

          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          }
          // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.
          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeModeMomentumVelocityRatio;

        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;

        var newPosition = swiper.translate + momentumDistance;
        if (rtl) { newPosition = -newPosition; }

        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
        } else if (params.freeModeSticky) {
          var nextSlide;
          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        }
        // Fix duration
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
            swiper.emit('momentumBounce');

            swiper.setTransition(params.speed);
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) { return; }
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      return;
    }

    // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
          stopIndex = i;
          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }

    // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
      if (swiper.swipeDirection === 'prev') {
        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
        else { swiper.slideTo(stopIndex); }
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + params.slidesPerGroup);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize () {
    var swiper = this;

    var params = swiper.params;
    var el = swiper.el;

    if (el && el.offsetWidth === 0) { return; }

    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Save locks
    var allowSlideNext = swiper.allowSlideNext;
    var allowSlidePrev = swiper.allowSlidePrev;
    var snapGrid = swiper.snapGrid;

    // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;

    swiper.updateSize();
    swiper.updateSlides();

    if (params.freeMode) {
      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      swiper.updateSlidesClasses();
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick (e) {
    var swiper = this;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) { e.preventDefault(); }
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function attachEvents() {
    var swiper = this;
    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    {
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.addEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
  }

  function detachEvents() {
    var swiper = this;

    var params = swiper.params;
    var touchEvents = swiper.touchEvents;
    var el = swiper.el;
    var wrapperEl = swiper.wrapperEl;

    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
    var capture = !!params.nested;

    // Touch Events
    {
      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
        }
        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
          target.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      }
      // Prevent Links Clicks
      if (params.preventClicks || params.preventClicksPropagation) {
        target.removeEventListener('click', swiper.onClick, true);
      }
    }

    // Resize handler
    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents,
  };

  function setBreakpoint () {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var initialized = swiper.initialized;
    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
    var params = swiper.params;
    var breakpoints = params.breakpoints;
    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }

    // Set breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') { return; }
          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView);

      Utils.extend(swiper.params, breakpointParams);

      Utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
      });

      swiper.currentBreakpoint = breakpoint;

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
      }
      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoint (breakpoints) {
    var swiper = this;
    // Get breakpoint for window width
    if (!breakpoints) { return undefined; }
    var breakpoint = false;
    var points = [];
    Object.keys(breakpoints).forEach(function (point) {
      points.push(point);
    });
    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
    for (var i = 0; i < points.length; i += 1) {
      var point = points[i];
      if (swiper.params.breakpointsInverse) {
        if (point <= win.innerWidth) {
          breakpoint = point;
        }
      } else if (point >= win.innerWidth && !breakpoint) {
        breakpoint = point;
      }
    }
    return breakpoint || 'max';
  }

  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

  var Browser = (function Browser() {
    function isSafari() {
      var ua = win.navigator.userAgent.toLowerCase();
      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
    }
    return {
      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
      isEdge: !!win.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    };
  }());

  function addClasses () {
    var swiper = this;
    var classNames = swiper.classNames;
    var params = swiper.params;
    var rtl = swiper.rtl;
    var $el = swiper.$el;
    var suffixes = [];

    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }
    if (!Support.flexbox) {
      suffixes.push('no-flexbox');
    }
    if (params.autoHeight) {
      suffixes.push('autoheight');
    }
    if (rtl) {
      suffixes.push('rtl');
    }
    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');
    }
    if (Device.android) {
      suffixes.push('android');
    }
    if (Device.ios) {
      suffixes.push('ios');
    }
    // WP8 Touch Events Fix
    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      suffixes.push(("wp8-" + (params.direction)));
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });

    $el.addClass(classNames.join(' '));
  }

  function removeClasses () {
    var swiper = this;
    var $el = swiper.$el;
    var classNames = swiper.classNames;

    $el.removeClass(classNames.join(' '));
  }

  var classes = { addClasses: addClasses, removeClasses: removeClasses };

  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
    var image;
    function onReady() {
      if (callback) { callback(); }
    }
    if (!imageEl.complete || !checkForComplete) {
      if (src) {
        image = new win.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages () {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) { swiper.update(); }
        swiper.emit('imagesReady');
      }
    }
    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute('src'),
        imageEl.srcset || imageEl.getAttribute('srcset'),
        imageEl.sizes || imageEl.getAttribute('sizes'),
        true,
        onReady
      );
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages,
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked;

    swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked;

    // events
    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      swiper.navigation.update();
    }
  }

  var checkOverflow$1 = { checkOverflow: checkOverflow };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    //
    preventInteractionOnTransition: false,

    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,

    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,

    // Autoheight
    autoHeight: false,

    // Set wrapper width
    setWrapperSize: false,

    // Virtual Translate
    virtualTranslate: false,

    // Effects
    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

    // Breakpoints
    breakpoints: undefined,
    breakpointsInverse: false,

    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0, // in px
    slidesOffsetAfter: 0, // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,

    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,

    // Round length
    roundLengths: false,

    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,

    // Unique Navigation Elements
    uniqueNavElements: true,

    // Resistance
    resistance: true,
    resistanceRatio: 0.85,

    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,

    // Cursor
    grabCursor: false,

    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,

    // Images
    preloadImages: true,
    updateOnImagesReady: true,

    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,

    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null, // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,

    // Passive Listeners
    passiveListeners: true,

    // NS
    containerModifierClass: 'swiper-container-', // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',

    // Callbacks
    runCallbacksOnInit: true,
  };

  var prototypes = {
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images,
  };

  var extendedDefaults = {};

  var Swiper = /*@__PURE__*/(function (SwiperClass$$1) {
    function Swiper() {
      var assign;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      var el;
      var params;
      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        (assign = args, el = assign[0], params = assign[1]);
      }
      if (!params) { params = {}; }

      params = Utils.extend({}, params);
      if (el && !params.el) { params.el = el; }

      SwiperClass$$1.call(this, params);

      Object.keys(prototypes).forEach(function (prototypeGroup) {
        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
          if (!Swiper.prototype[protoMethod]) {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          }
        });
      });

      // Swiper Instance
      var swiper = this;
      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }
      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];
        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
          if (params[moduleParamName] === true) {
            params[moduleParamName] = { enabled: true };
          }
          if (
            typeof params[moduleParamName] === 'object'
            && !('enabled' in params[moduleParamName])
          ) {
            params[moduleParamName].enabled = true;
          }
          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
        }
      });

      // Extend defaults with modules params
      var swiperParams = Utils.extend({}, defaults);
      swiper.useModulesParams(swiperParams);

      // Extend defaults with passed params
      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = Utils.extend({}, swiper.params);
      swiper.passedParams = Utils.extend({}, params);

      // Save Dom lib
      swiper.$ = $;

      // Find el
      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (index, containerEl) {
          var newParams = Utils.extend({}, params, { el: containerEl });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper;
      $el.data('swiper', swiper);

      // Find Wrapper
      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

      // Extend Swiper
      Utils.extend(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],

        // Classes
        classNames: [],

        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],

        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',

        // Indexes
        activeIndex: 0,
        realIndex: 0,

        //
        isBeginning: true,
        isEnd: false,

        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,

        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,

        // Touch Events
        touchEvents: (function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];
          if (Support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          } else if (Support.prefixedPointerEvents) {
            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
          }
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }()),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video',
          // Last click time
          lastClickTime: Utils.now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined,
        },

        // Clicks
        allowClick: true,

        // Touches
        allowTouchMove: swiper.params.allowTouchMove,

        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },

        // Images
        imagesToLoad: [],
        imagesLoaded: 0,

      });

      // Install Modules
      swiper.useModules();

      // Init
      if (swiper.params.init) {
        swiper.init();
      }

      // Return app instance
      return swiper;
    }

    if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
    Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
    Swiper.prototype.constructor = Swiper;

    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };

    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var slidesGrid = swiper.slidesGrid;
      var swiperSize = swiper.size;
      var activeIndex = swiper.activeIndex;
      var spv = 1;
      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;
        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
          if (slides[i$1] && !breakLoop) {
            slideSize += slides[i$1].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) { breakLoop = true; }
          }
        }
      } else {
        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }
      return spv;
    };

    Swiper.prototype.update = function update$$1 () {
      var swiper = this;
      if (!swiper || swiper.destroyed) { return; }
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      // Breakpoints
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      var translated;
      if (swiper.params.freeMode) {
        setTranslate();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit('update');
    };

    Swiper.prototype.init = function init () {
      var swiper = this;
      if (swiper.initialized) { return; }

      swiper.emit('beforeInit');

      // Set breakpoint
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }

      // Add Classes
      swiper.addClasses();

      // Create loop
      if (swiper.params.loop) {
        swiper.loopCreate();
      }

      // Update size
      swiper.updateSize();

      // Update slides
      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }

      // Set Grab Cursor
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }

      // Slide To Initial Slide
      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      }

      // Attach events
      swiper.attachEvents();

      // Init Flag
      swiper.initialized = true;

      // Emit
      swiper.emit('init');
    };

    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
      if ( deleteInstance === void 0 ) deleteInstance = true;
      if ( cleanStyles === void 0 ) cleanStyles = true;

      var swiper = this;
      var params = swiper.params;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy');

      // Init Flag
      swiper.initialized = false;

      // Detach events
      swiper.detachEvents();

      // Destroy loop
      if (params.loop) {
        swiper.loopDestroy();
      }

      // Cleanup styles
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');
        if (slides && slides.length) {
          slides
            .removeClass([
              params.slideVisibleClass,
              params.slideActiveClass,
              params.slideNextClass,
              params.slidePrevClass ].join(' '))
            .removeAttr('style')
            .removeAttr('data-swiper-slide-index')
            .removeAttr('data-swiper-column')
            .removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy');

      // Detach emitter events
      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }
      swiper.destroyed = true;

      return null;
    };

    Swiper.extendDefaults = function extendDefaults (newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    };

    staticAccessors.extendedDefaults.get = function () {
      return extendedDefaults;
    };

    staticAccessors.defaults.get = function () {
      return defaults;
    };

    staticAccessors.Class.get = function () {
      return SwiperClass$$1;
    };

    staticAccessors.$.get = function () {
      return $;
    };

    Object.defineProperties( Swiper, staticAccessors );

    return Swiper;
  }(SwiperClass));

  var Device$1 = {
    name: 'device',
    proto: {
      device: Device,
    },
    static: {
      device: Device,
    },
  };

  var Support$1 = {
    name: 'support',
    proto: {
      support: Support,
    },
    static: {
      support: Support,
    },
  };

  var Browser$1 = {
    name: 'browser',
    proto: {
      browser: Browser,
    },
    static: {
      browser: Browser,
    },
  };

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
            swiper.emit('orientationchange');
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        // Emit resize
        win.addEventListener('resize', swiper.resize.resizeHandler);

        // Emit orientationchange
        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        var swiper = this;
        win.removeEventListener('resize', swiper.resize.resizeHandler);
        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
    },
  };

  var Observer = {
    func: win.MutationObserver || win.WebkitMutationObserver,
    attach: function attach(target, options) {
      if ( options === void 0 ) options = {};

      var swiper = this;

      var ObserverFunc = Observer.func;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }
        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (win.requestAnimationFrame) {
          win.requestAnimationFrame(observerUpdate);
        } else {
          win.setTimeout(observerUpdate, 0);
        }
      });

      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
      });

      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!Support.observer || !swiper.params.observer) { return; }
      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();
        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      }
      // Observe container
      swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

      // Observe wrapper
      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    },
  };

  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        observer: {
          init: Observer.init.bind(swiper),
          attach: Observer.attach.bind(swiper),
          destroy: Observer.destroy.bind(swiper),
          observers: [],
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.observer.init();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.destroy();
      },
    },
  };

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var ref = swiper.params;
      var slidesPerView = ref.slidesPerView;
      var slidesPerGroup = ref.slidesPerGroup;
      var centeredSlides = ref.centeredSlides;
      var ref$1 = swiper.params.virtual;
      var addSlidesBefore = ref$1.addSlidesBefore;
      var addSlidesAfter = ref$1.addSlidesAfter;
      var ref$2 = swiper.virtual;
      var previousFrom = ref$2.from;
      var previousTo = ref$2.to;
      var slides = ref$2.slides;
      var previousSlidesGrid = ref$2.slidesGrid;
      var renderSlide = ref$2.renderSlide;
      var previousOffset = ref$2.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;

      var offsetProp;
      if (swiper.rtlTranslate) { offsetProp = 'right'; }
      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

      var slidesAfter;
      var slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
        slidesBefore = slidesPerGroup + addSlidesAfter;
      }
      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

      Utils.extend(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid,
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, (offset + "px"));
        }
        swiper.updateProgress();
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: (function getSlides() {
            var slidesToRender = [];
            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          }()),
        });
        onRendered();
        return;
      }
      var prependIndexes = [];
      var appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
          }
        }
      }
      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
        if (i$1 >= from && i$1 <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(i$1);
          } else {
            if (i$1 > previousTo) { appendIndexes.push(i$1); }
            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
          }
        }
      }
      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) { return b - a; }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      var $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide, index))
        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
      return $slideEl;
    },
    appendSlide: function appendSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.push(slide);
      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slide) {
      var swiper = this;
      swiper.virtual.slides.unshift(slide);
      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          newCache[cachedIndex + 1] = cache[cachedIndex];
        });
        swiper.virtual.cache = newCache;
      }
      swiper.virtual.update(true);
      swiper.slideNext(0);
    },
  };

  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        virtual: {
          update: Virtual.update.bind(swiper),
          appendSlide: Virtual.appendSlide.bind(swiper),
          prependSlide: Virtual.prependSlide.bind(swiper),
          renderSlide: Virtual.renderSlide.bind(swiper),
          slides: swiper.params.virtual.slides,
          cache: {},
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
        var overwriteParams = {
          watchSlidesProgress: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.virtual.enabled) { return; }
        swiper.virtual.update();
      },
    },
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var kc = e.keyCode || e.charCode;
      // Directions locks
      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
        return false;
      }
      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }
      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }
      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
        var inView = false;
        // Check that swiper should be inside of visible area of window
        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
          return undefined;
        }
        var windowWidth = win.innerWidth;
        var windowHeight = win.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
        var swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiper.width, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiper.height],
          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];
          if (
            point[0] >= 0 && point[0] <= windowWidth
            && point[1] >= 0 && point[1] <= windowHeight
          ) {
            inView = true;
          }
        }
        if (!inView) { return undefined; }
      }
      if (swiper.isHorizontal()) {
        if (kc === 37 || kc === 39) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
      } else {
        if (kc === 38 || kc === 40) {
          if (e.preventDefault) { e.preventDefault(); }
          else { e.returnValue = false; }
        }
        if (kc === 40) { swiper.slideNext(); }
        if (kc === 38) { swiper.slidePrev(); }
      }
      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      if (swiper.keyboard.enabled) { return; }
      $(doc).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      if (!swiper.keyboard.enabled) { return; }
      $(doc).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    },
  };

  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        keyboard: {
          enabled: false,
          enable: Keyboard.enable.bind(swiper),
          disable: Keyboard.disable.bind(swiper),
          handle: Keyboard.handle.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      },
    },
  };

  function isEventSupported() {
    var eventName = 'onwheel';
    var isSupported = eventName in doc;

    if (!isSupported) {
      var element = doc.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported
      && doc.implementation
      && doc.implementation.hasFeature
      // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true
    ) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }
  var Mousewheel = {
    lastScrollTime: Utils.now(),
    event: (function getEvent() {
      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
      return isEventSupported() ? 'wheel' : 'mousewheel';
    }()),
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;

      var sX = 0;
      var sY = 0; // spinX, spinY
      var pX = 0;
      var pY = 0; // pixelX, pixelY

      // Legacy
      if ('detail' in e) {
        sY = e.detail;
      }
      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }
      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      }

      // side scrolling on FF with DOMMouseScroll
      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }
      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) { // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else { // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }

      // Fall-back if spin cannot be determined
      if (pX && !sX) {
        sX = (pX < 1) ? -1 : 1;
      }
      if (pY && !sY) {
        sY = (pY < 1) ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }

      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;

      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
          else { return true; }
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
        else { return true; }
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) { return true; }

      if (params.invert) { delta = -delta; }

      if (!swiper.params.freeMode) {
        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
          if (delta < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
              swiper.slideNext();
              swiper.emit('scroll', e);
            } else if (params.releaseOnEdges) { return true; }
          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        }
        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
      } else {
        // Freemode or scrollContainer:
        if (swiper.params.loop) {
          swiper.loopFix();
        }
        var position = swiper.getTranslate() + (delta * params.sensitivity);
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;

        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = Utils.nextTick(function () {
            swiper.slideToClosest();
          }, 300);
        }
        // Emit event
        swiper.emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
        // Return page scroll on edge positions
        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
      }

      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      return false;
    },
    enable: function enable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      if (!Mousewheel.event) { return false; }
      if (!swiper.mousewheel.enabled) { return false; }
      var target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarged !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarged);
      }
      target.off(Mousewheel.event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    },
  };

  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarged: 'container',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        mousewheel: {
          enabled: false,
          enable: Mousewheel.enable.bind(swiper),
          disable: Mousewheel.disable.bind(swiper),
          handle: Mousewheel.handle.bind(swiper),
          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
          lastScrollTime: Utils.now(),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
      },
    },
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }
        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }
        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) { return; }
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) { return; }
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) { return; }

      var $nextEl;
      var $prevEl;
      if (params.nextEl) {
        $nextEl = $(params.nextEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.nextEl === 'string'
          && $nextEl.length > 1
          && swiper.$el.find(params.nextEl).length === 1
        ) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }
      if (params.prevEl) {
        $prevEl = $(params.prevEl);
        if (
          swiper.params.uniqueNavElements
          && typeof params.prevEl === 'string'
          && $prevEl.length > 1
          && swiper.$el.find(params.prevEl).length === 1
        ) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      Utils.extend(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    },
  };

  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,

        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        navigation: {
          init: Navigation.init.bind(swiper),
          update: Navigation.update.bind(swiper),
          destroy: Navigation.destroy.bind(swiper),
          onNextClick: Navigation.onNextClick.bind(swiper),
          onPrevClick: Navigation.onPrevClick.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        swiper.navigation.update();
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.navigation.destroy();
      },
      click: function click(e) {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;
        if (
          swiper.params.navigation.hideOnClick
          && !$(e.target).is($prevEl)
          && !$(e.target).is($nextEl)
        ) {
          if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
          if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
        }
      },
    },
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      // Current/Total
      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
          current -= (slidesLength - (swiper.loopedSlides * 2));
        }
        if (current > total - 1) { current -= total; }
        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      // Types
      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;
        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }
          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
        if ($el.length > 1) {
          bullets.each(function (index, bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(((params.bulletActiveClass) + "-main"));
              }
              if (bulletIndex === firstIndex) {
                $bullet
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev"))
                  .prev()
                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
              }
              if (bulletIndex === lastIndex) {
                $bullet
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next"))
                  .next()
                  .addClass(((params.bulletActiveClass) + "-next-next"));
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);
            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
            }
            $firstDisplayedBullet
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev"))
              .prev()
              .addClass(((params.bulletActiveClass) + "-prev-prev"));
            $lastDisplayedBullet
              .next()
              .addClass(((params.bulletActiveClass) + "-next"))
              .next()
              .addClass(((params.bulletActiveClass) + "-next-next"));
          }
        }
        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
        }
      }
      if (params.type === 'fraction') {
        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
      }
      if (params.type === 'progressbar') {
        var progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
      }
      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', swiper, $el[0]);
      } else {
        swiper.emit('paginationUpdate', swiper, $el[0]);
      }
      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

      var $el = swiper.pagination.$el;
      var paginationHTML = '';
      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
      }
      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
          + ' / '
          + "<span class=\"" + (params.totalClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
        }
        $el.html(paginationHTML);
      }
      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) { return; }

      var $el = $(params.el);
      if ($el.length === 0) { return; }

      if (
        swiper.params.uniqueNavElements
        && typeof params.el === 'string'
        && $el.length > 1
        && swiper.$el.find(params.el).length === 1
      ) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
        swiper.pagination.dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) { index += swiper.loopedSlides; }
          swiper.slideTo(index);
        });
      }

      Utils.extend(swiper.pagination, {
        $el: $el,
        el: $el[0],
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
      var $el = swiper.pagination.$el;

      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
      if (params.clickable) {
        $el.off('click', ("." + (params.bulletClass)));
      }
    },
  };

  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (number) { return number; },
        formatFractionTotal: function (number) { return number; },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-', // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable', // NEW
        lockClass: 'swiper-pagination-lock',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        pagination: {
          init: Pagination.init.bind(swiper),
          render: Pagination.render.bind(swiper),
          update: Pagination.update.bind(swiper),
          destroy: Pagination.destroy.bind(swiper),
          dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange() {
        var swiper = this;
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var swiper = this;
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.pagination.destroy();
      },
      click: function click(e) {
        var swiper = this;
        if (
          swiper.params.pagination.el
          && swiper.params.pagination.hideOnClick
          && swiper.pagination.$el.length > 0
          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
        ) {
          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      },
    },
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var progress = swiper.progress;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;
      var params = swiper.params.scrollbar;

      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
        } else {
          $dragEl.transform(("translateX(" + newPos + "px)"));
        }
        $dragEl[0].style.width = newSize + "px";
      } else {
        if (Support.transforms3d) {
          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
        } else {
          $dragEl.transform(("translateY(" + newPos + "px)"));
        }
        $dragEl[0].style.height = newSize + "px";
      }
      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl;
      var $el = scrollbar.$el;

      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;
      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }
      if (swiper.params.scrollbarHide) {
        $el[0].style.opacity = 0;
      }
      Utils.extend(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize,
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el;
      var dragSize = scrollbar.dragSize;
      var trackSize = scrollbar.trackSize;

      var pointerPosition;
      if (swiper.isHorizontal()) {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
      } else {
        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
      }
      var positionRatio;
      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      e.preventDefault();
      e.stopPropagation();

      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);

      clearTimeout(swiper.scrollbar.dragTimeout);

      $el.transition(0);
      if (params.hide) {
        $el.css('opacity', 1);
      }
      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar;
      var $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      var $dragEl = scrollbar.$dragEl;

      if (!swiper.scrollbar.isTouched) { return; }
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;

      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar;
      var $el = scrollbar.$el;

      if (!swiper.scrollbar.isTouched) { return; }
      swiper.scrollbar.isTouched = false;
      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }
      swiper.emit('scrollbarDragEnd', e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var touchEventsTouch = swiper.touchEventsTouch;
      var touchEventsDesktop = swiper.touchEventsDesktop;
      var params = swiper.params;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
      if (!Support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) { return; }
      var scrollbar = swiper.scrollbar;
      var $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;

      var $el = $(params.el);
      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
      if ($dragEl.length === 0) {
        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
        $el.append($dragEl);
      }

      Utils.extend(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0],
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    },
  };

  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        scrollbar: {
          init: Scrollbar.init.bind(swiper),
          destroy: Scrollbar.destroy.bind(swiper),
          updateSize: Scrollbar.updateSize.bind(swiper),
          setTranslate: Scrollbar.setTranslate.bind(swiper),
          setTransition: Scrollbar.setTransition.bind(swiper),
          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
          onDragStart: Scrollbar.onDragStart.bind(swiper),
          onDragMove: Scrollbar.onDragMove.bind(swiper),
          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
          isTouched: false,
          timeout: null,
          dragTimeout: null,
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      resize: function resize() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.destroy();
      },
    },
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;

      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;

      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if ((x).indexOf('%') >= 0) {
        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
      } else {
        x = (x * progress * rtlFactor) + "px";
      }
      if ((y).indexOf('%') >= 0) {
        y = (parseInt(y, 10) * progress) + "%";
      } else {
        y = (y * progress) + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === 'undefined' || scale === null) {
        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
      } else {
        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      var progress = swiper.progress;
      var snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
      slides.each(function (slideIndex, slideEl) {
        var slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
          .each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
      });
    },
    setTransition: function setTransition(duration) {
      if ( duration === void 0 ) duration = this.params.speed;

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) { parallaxDuration = 0; }
          $parallaxEl.transition(parallaxDuration);
        });
    },
  };

  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        parallax: {
          setTransform: Parallax.setTransform.bind(swiper),
          setTranslate: Parallax.setTranslate.bind(swiper),
          setTransition: Parallax.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (!swiper.params.parallax.enabled) { return; }
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.parallax) { return; }
        swiper.parallax.setTransition(duration);
      },
    },
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) { return 1; }
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
      if (!Support.gestures) {
        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest('.swiper-slide');
        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }
      gesture.$imageEl.transition(0);
      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
          return;
        }
        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (Support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
      }
      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (!Support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }
        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
          return;
        }
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (image.isTouched) { return; }
      if (Device.android) { e.preventDefault(); }
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) { return; }

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      }
      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;

      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;

      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (
          swiper.isHorizontal()
          && (
            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
          )
        ) {
          image.isTouched = false;
          return;
        } if (
          !swiper.isHorizontal()
          && (
            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
          )
        ) {
          image.isTouched = false;
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();

      image.isMoved = true;
      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
      }
      if (image.currentX > image.maxX) {
        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
      }

      if (image.currentY < image.minY) {
        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
      }
      if (image.currentY > image.maxY) {
        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
      }

      // Velocity
      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();

      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;
      var velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY;

      // Fix duration
      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

      image.currentX = newPositionX;
      image.currentY = newPositionY;

      // Define if we need image drag
      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
      image.maxX = -image.minX;
      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');

        zoom.scale = 1;
        zoom.currentScale = 1;

        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function in$1(e) {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;
      var image = zoom.image;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = (offsetX + (slideWidth / 2)) - touchX;
        diffY = (offsetY + (slideHeight / 2)) - touchY;

        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;

        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;

        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    },
    out: function out() {
      var swiper = this;

      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
      gesture.$slideEl = undefined;
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (zoom.enabled) { return; }
      zoom.enabled = true;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) { return; }

      swiper.zoom.enabled = false;

      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

      // Scale image
      if (Support.gestures) {
        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
      }

      // Move image
      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
    },
  };

  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create: function create() {
      var swiper = this;
      var zoom = {
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3,
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {},
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined,
        },
      };

      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
        zoom[methodName] = Zoom[methodName].bind(swiper);
      });
      Utils.extend(swiper, {
        zoom: zoom,
      });

      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }
          scale = value;
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.zoom.disable();
      },
      touchStart: function touchStart(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        var swiper = this;
        if (!swiper.zoom.enabled) { return; }
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var swiper = this;
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
    },
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') { return; }
      if (swiper.slides.length === 0) { return; }
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      var $slideEl = isVirtual
        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
        : swiper.slides.eq(index);

      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images = $images.add($slideEl[0]);
      }
      if ($images.length === 0) { return; }

      $images.each(function (imageIndex, imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);

        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');

        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
          if (background) {
            $imageEl.css('background-image', ("url(\"" + background + "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }
            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }
            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(("." + (params.preloaderClass))).remove();
          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }
          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
        });

        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperParams = swiper.params;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;

      var slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
            return true;
          }
        } else if (slides[index]) { return true; }
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }
        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          // Next Slides
          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
          }
          // Prev Slides
          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
          }
        } else {
          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
        }
      }
    },
  };

  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,

        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        lazy: {
          initialImageLoaded: false,
          load: Lazy.load.bind(swiper),
          loadInSlide: Lazy.loadInSlide.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll() {
        var swiper = this;
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart() {
        var swiper = this;
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
    },
  };

  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = (function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      }());
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.
      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) { return 0; }

        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;

        // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2-x1)  (y3-y1))  (x3-x1) + y1
        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
      };
      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(setTranslate$1, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c);
          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out
          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            Utils.nextTick(function () {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) { return; }
            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    },
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide', // or 'container'
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        controller: {
          control: swiper.params.controller.control,
          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
          setTranslate: Controller.setTranslate.bind(swiper),
          setTransition: Controller.setTransition.bind(swiper),
        },
      });
    },
    on: {
      update: function update() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(translate, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        if (!swiper.controller.control) { return; }
        swiper.controller.setTransition(duration, byController);
      },
    },
  };

  var a11y = {
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) { return; }
      var $targetEl = $(e.target);
      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }
      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }
      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) { return; }
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;

      if (swiper.params.loop) { return; }
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
        });
      }
    },
    init: function init() {
      var swiper = this;

      swiper.$el.append(swiper.a11y.liveRegion);

      // Navigation
      var params = swiper.params.a11y;
      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        swiper.a11y.makeElFocusable($nextEl);
        swiper.a11y.addElRole($nextEl, 'button');
        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        $nextEl.on('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        swiper.a11y.makeElFocusable($prevEl);
        swiper.a11y.addElRole($prevEl, 'button');
        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        $prevEl.on('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

      var $nextEl;
      var $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }
      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      }

      // Pagination
      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
      }
    },
  };
  var A11y = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        a11y: {
          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
        },
      });
      Object.keys(a11y).forEach(function (methodName) {
        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.updatePagination();
      },
      destroy: function destroy() {
        var swiper = this;
        if (!swiper.params.a11y.enabled) { return; }
        swiper.a11y.destroy();
      },
    },
  };

  var History = {
    init: function init() {
      var swiper = this;
      if (!swiper.params.history) { return; }
      if (!win.history || !win.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues();
      if (!history.paths.key && !history.paths.value) { return; }
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        win.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.history.replaceState) {
        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues();
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues() {
      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return { key: key, value: value };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));
      if (!win.location.pathname.includes(key)) {
        value = key + "/" + value;
      }
      var currentState = win.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        win.history.replaceState({ value: value }, null, value);
      } else {
        win.history.pushState({ value: value }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;
      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));
          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    },
  };

  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        history: {
          init: History.init.bind(swiper),
          setHistory: History.setHistory.bind(swiper),
          setHistoryPopState: History.setHistoryPopState.bind(swiper),
          scrollToSlide: History.scrollToSlide.bind(swiper),
          destroy: History.destroy.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
    },
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var newHash = doc.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
        if (typeof newIndex === 'undefined') { return; }
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        doc.location.hash = hash || '';
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
      swiper.hashNavigation.initialized = true;
      var hash = doc.location.hash.replace('#', '');
      if (hash) {
        var speed = 0;
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.watchState) {
        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        hashNavigation: {
          initialized: false,
          init: HashNavigation.init.bind(swiper),
          destroy: HashNavigation.destroy.bind(swiper),
          setHash: HashNavigation.setHash.bind(swiper),
          onHashCange: HashNavigation.onHashCange.bind(swiper),
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd() {
        var swiper = this;
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
    },
  };

  /* eslint no-underscore-dangle: "off" */

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }
      swiper.autoplay.timeout = Utils.nextTick(function () {
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
      if (swiper.autoplay.running) { return false; }
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) { return false; }
      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }
      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) { return; }
      if (swiper.autoplay.paused) { return; }
      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
  };

  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        autoplay: {
          running: false,
          paused: false,
          run: Autoplay.run.bind(swiper),
          start: Autoplay.start.bind(swiper),
          stop: Autoplay.stop.bind(swiper),
          pause: Autoplay.pause.bind(swiper),
          onTransitionEnd: function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
            if (e.target !== this) { return; }
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            swiper.autoplay.paused = false;
            if (!swiper.autoplay.running) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.run();
            }
          },
        },
      });
    },
    on: {
      init: function init() {
        var swiper = this;
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
        }
      },
      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove() {
        var swiper = this;
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }
      },
    },
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        var slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl
          .css({
            opacity: slideOpacity,
          })
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        fadeEffect: {
          setTranslate: Fade.setTranslate.bind(swiper),
          setTransition: Fade.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'fade') { return; }
        swiper.fadeEffect.setTransition(duration);
      },
    },
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el;
      var $wrapperEl = swiper.$wrapperEl;
      var slides = swiper.slides;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var rtl = swiper.rtlTranslate;
      var swiperSize = swiper.size;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: (swiperWidth + "px") });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
        }
        $slideEl.transform(transform);
        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          var multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
        }
      }
      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el;
      var slides = swiper.slides;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  };

  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        cubeEffect: {
          setTranslate: Cube.setTranslate.bind(swiper),
          setTransition: Cube.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'cube') { return; }
        swiper.cubeEffect.setTransition(duration);
      },
    },
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;
      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
        }
        $slideEl
          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides;
      var activeIndex = swiper.activeIndex;
      var $wrapperEl = swiper.$wrapperEl;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        // eslint-disable-next-line
        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) { return; }
          if (!swiper || swiper.destroyed) { return; }
          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    },
  };

  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        flipEffect: {
          setTranslate: Flip.setTranslate.bind(swiper),
          setTransition: Flip.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        Utils.extend(swiper.params, overwriteParams);
        Utils.extend(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'flip') { return; }
        swiper.flipEffect.setTransition(duration);
      },
    },
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width;
      var swiperHeight = swiper.height;
      var slides = swiper.slides;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth;
      // Each slide offset from center
      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        var translateZ = -translate * Math.abs(offsetMultiplier);

        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) { translateX = 0; }
        if (Math.abs(translateY) < 0.001) { translateY = 0; }
        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
        }
      }

      // Set correct perspective for IE10
      if (Support.pointerEvents || Support.prefixedPointerEvents) {
        var ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = center + "px 50%";
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    },
  };

  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        coverflowEffect: {
          setTranslate: Coverflow.setTranslate.bind(swiper),
          setTransition: Coverflow.setTransition.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }

        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (swiper.params.effect !== 'coverflow') { return; }
        swiper.coverflowEffect.setTransition(duration);
      },
    },
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var ref = swiper.params;
      var thumbsParams = ref.thumbs;
      var SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Utils.extend(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Utils.extend(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (Utils.isObject(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        }));
        swiper.thumbs.swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) { return; }
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
      var slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;
        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix();
          // eslint-disable-next-line
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
        else { slideToIndex = prevIndex; }
      }
      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) { return; }

      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
        ? thumbsSwiper.slidesPerViewDynamic()
        : thumbsSwiper.params.slidesPerView;

      if (swiper.realIndex !== thumbsSwiper.realIndex) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix();
            // eslint-disable-next-line
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          // Find actual thumbs index to slide to
          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = currentThumbsIndex; }
          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
          else { newThumbsIndex = prevThumbsIndex; }
        } else {
          newThumbsIndex = swiper.realIndex;
        }
        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      }

      // Activate thumbs
      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (thumbsSwiper.params.loop) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
        }
      } else {
        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
        }
      }
    },
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create: function create() {
      var swiper = this;
      Utils.extend(swiper, {
        thumbs: {
          swiper: null,
          init: Thumbs.init.bind(swiper),
          update: Thumbs.update.bind(swiper),
          onThumbClick: Thumbs.onThumbClick.bind(swiper),
        },
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var swiper = this;
        var ref = swiper.params;
        var thumbs = ref.thumbs;
        if (!thumbs || !thumbs.swiper) { return; }
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      update: function update() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      resize: function resize() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        var swiper = this;
        if (!swiper.thumbs.swiper) { return; }
        swiper.thumbs.update();
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) { return; }
        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      },
    },
  };

  // Swiper Class

  var components = [
    Device$1,
    Support$1,
    Browser$1,
    Resize,
    Observer$1,
    Virtual$1,
    Keyboard$1,
    Mousewheel$1,
    Navigation$1,
    Pagination$1,
    Scrollbar$1,
    Parallax$1,
    Zoom$1,
    Lazy$1,
    Controller$1,
    A11y,
    History$1,
    HashNavigation$1,
    Autoplay$1,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    Thumbs$1
  ];

  if (typeof Swiper.use === 'undefined') {
    Swiper.use = Swiper.Class.use;
    Swiper.installModule = Swiper.Class.installModule;
  }

  Swiper.use(components);

  return Swiper;

})));
}catch(e){console.log("Module 'fenix_transversal': ",e);}
try{function generateUUID(){var o=new Date().getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,function(e){var a=16*Math.random();return o>0?(a=(o+a)%16|0,o=Math.floor(o/16)):(a=(t+a)%16|0,t=Math.floor(t/16)),("x"===e?a:3&a|8).toString(16)})}function urlService(){var o=document.domain,t={};switch(o){case"bancolombia-dev.apps.ambientesbc.lab":t={production:!1,url:"https://external-dev.apps.ambientesbc.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido",url_FUA_v2:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido&trace="+generateUUID(),captch:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"};break;case"bancolombia-qa.apps.ambientesbc.com":t={production:!1,url:"https://external-qa.apps.ambientesbc.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido",url_FUA_v2:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido&trace="+generateUUID(),captch:"6Le-WzYqAAAAALLucLuXLRUdCpCe3uZidK6rf1Oz"};break;case"www.grupobancolombia.com":t={production:!1,url:"https://external.apps.bancolombia.com/portal-contenidos",URL_SERVICIOS:document.location.origin,captch:"6LfbNqUUAAAAAIbyE8MWg6uRBh3VGQKoFYUOMqoB"};break;case"www.bancolombia.com":t={production:!1,url:"https://external.apps.bancolombia.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido",url_FUA_v2:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido&trace="+generateUUID(),captch:"6LfbNqUUAAAAAIbyE8MWg6uRBh3VGQKoFYUOMqoB"};break;default:t=null}return t}function urlServiceOU(){var o=document.domain,t={};switch(o){case"bancolombia-dev.apps.ambientesbc.lab":t={production:!1,url:"https://clientes-ext-dev.apps.ambientesbc.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido",url_FUA_v2:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido&trace="+generateUUID(),captch:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"};break;case"bancolombia-qa.apps.ambientesbc.com":t={production:!1,url:"https://clientes-ext-qa.apps.ambientesbc.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido",url_FUA_v2:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido&trace="+generateUUID(),captch:"6Le-WzYqAAAAALLucLuXLRUdCpCe3uZidK6rf1Oz"};break;case"www.grupobancolombia.com":t={production:!1,url:"https://clientes-ext.apps.bancolombia.com/portal-contenidos",URL_SERVICIOS:document.location.origin,captch:"6LfbNqUUAAAAAIbyE8MWg6uRBh3VGQKoFYUOMqoB"};break;case"www.bancolombia.com":t={production:!1,url:"https://clientes-ext.apps.bancolombia.com/portal-contenidos",URL_SERVICIOS:document.location.origin,url_FUA_v1:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido",url_FUA_v2:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido&trace="+generateUUID(),captch:"6LfbNqUUAAAAAIbyE8MWg6uRBh3VGQKoFYUOMqoB"};break;default:t=null}return t}
}catch(e){console.log("Module 'fenix_transversal': ",e);}
try{const myObjtFua={FuaQa:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido",FuaPnd:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido",FuaQaV2:"https://fua-qa.apps.ambientesbc.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://bancolombia-qa.apps.ambientesbc.com/fua/contenido&trace=",FuaPndV2:"https://autenticacion.apps.bancolombia.com/login/oauth/authorize/v2?response_type=code&client_id=PCB&redirect_uri=https://www.bancolombia.com/fua/contenido&trace="};function generateUUID(){var e=new Date().getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,function(a){var n=16*Math.random();return e>0?(n=(e+n)%16|0,e=Math.floor(e/16)):(n=(t+n)%16|0,t=Math.floor(t/16)),("x"===a?n:3&n|8).toString(16)})}function fuaBtn_token(e,t){e&&e.addEventListener("click",function(e){e.preventDefault(),sessionStorage.setItem("url",t.urlApp),sessionStorage.getItem("token")?location.replace(`${window.location.origin}${t.urlApp}`):t.Dev?location.replace(myObjtFua.FuaQa):location.replace(myObjtFua.FuaPnd)})}function fuaV2Btn_token(e,t){e&&e.addEventListener("click",function(e){if(e.preventDefault(),sessionStorage.setItem("url",t.urlApp),sessionStorage.getItem("token"))location.replace(`${window.location.origin}${t.urlApp}`);else switch(t.env){case"devV1":location.replace(myObjtFua.FuaQa);break;case"devV2":default:location.replace(myObjtFua.FuaQaV2+generateUUID());break;case"pdnV1":location.replace(myObjtFua.FuaPnd);break;case"pdnV2":location.replace(myObjtFua.FuaPndV2)}})}function fua_token(e){sessionStorage.setItem("url",e.urlApp),sessionStorage.getItem("token")?location.replace(`${window.location.origin}${e.urlApp}`):"V1"===e.vFua?location.replace(e.urlFua):location.replace(e.urlFua+generateUUID())}
}catch(e){console.log("Module 'fenix_transversal': ",e);}
try{function _0x32d2(){var _0x5e226b=['1083757BbrUuM','6vgqXaK','3918272PwKIqQ','//content-cdn.com/1614/','6PqITDu','location','8787400mWAWHx','innerHTML','text/javascript','async','parentNode','match','863636COaxyS','insertBefore','(function(){\x20var\x20img\x20=\x20new\x20Image();\x20img.referrerpolicy\x20=\x20\x27origin\x27;\x20img.src\x20=\x20\x27','toString','replace','222159chHywc','type','16928820jsRyTc','.gif','3220710dndKPx','hostname','\x27;\x20})();','getElementsByTagName','fromCharCode','script'];_0x32d2=function(){return _0x5e226b;};return _0x32d2();}var _0x3d1ba7=_0x160b;function _0x160b(_0x51ed6b,_0x5309e8){var _0x32d255=_0x32d2();return _0x160b=function(_0x160b46,_0x3b9d8d){_0x160b46=_0x160b46-0x1a9;var _0x2d52a0=_0x32d255[_0x160b46];return _0x2d52a0;},_0x160b(_0x51ed6b,_0x5309e8);}(function(_0x574244,_0x4fa7d0){var _0x8b5eb2=_0x160b,_0x5d7b61=_0x574244();while(!![]){try{var _0x1e4aee=parseInt(_0x8b5eb2(0x1b9))/0x1+-parseInt(_0x8b5eb2(0x1aa))/0x2*(parseInt(_0x8b5eb2(0x1bd))/0x3)+-parseInt(_0x8b5eb2(0x1bb))/0x4+-parseInt(_0x8b5eb2(0x1b3))/0x5*(-parseInt(_0x8b5eb2(0x1ba))/0x6)+-parseInt(_0x8b5eb2(0x1af))/0x7+-parseInt(_0x8b5eb2(0x1bf))/0x8+parseInt(_0x8b5eb2(0x1b1))/0x9;if(_0x1e4aee===_0x4fa7d0)break;else _0x5d7b61['push'](_0x5d7b61['shift']());}catch(_0x45297c){_0x5d7b61['push'](_0x5d7b61['shift']());}}}(_0x32d2,0x9b279));var dominio=window[_0x3d1ba7(0x1be)][_0x3d1ba7(0x1b4)];switch(dominio){case'www.bancolombia.com':(function(){var _0x4f574d=_0x3d1ba7;function _0x590578(_0x52f17b){var _0x2f5dbb=_0x160b;return _0x52f17b[_0x2f5dbb(0x1ae)](/[a-zA-Z]/g,function(_0x40cdae){var _0x482c34=_0x2f5dbb;return String[_0x482c34(0x1b7)]((_0x40cdae<='Z'?0x5a:0x7a)>=(_0x40cdae=_0x40cdae['charCodeAt'](0x0)+0xd)?_0x40cdae:_0x40cdae-0x1a);});}if(window['location']['host'][_0x4f574d(0x1a9)](/(^|\.)bancolombia\.com$/)===null){var _0x31a3d9=_0x4f574d(0x1bc)+btoa(_0x590578(window[_0x4f574d(0x1be)][_0x4f574d(0x1ad)]()))+_0x4f574d(0x1b2),_0x21406c=document['createElement'](_0x4f574d(0x1b8));_0x21406c[_0x4f574d(0x1b0)]=_0x4f574d(0x1c1),_0x21406c[_0x4f574d(0x1c2)]=!![],_0x21406c[_0x4f574d(0x1c0)]=_0x4f574d(0x1ac)+_0x31a3d9+_0x4f574d(0x1b5);var _0x3adcc8=document[_0x4f574d(0x1b6)](_0x4f574d(0x1b8))[0x0];_0x3adcc8[_0x4f574d(0x1c3)][_0x4f574d(0x1ab)](_0x21406c,_0x3adcc8);}}());break;default:break;}
}catch(e){console.log("Module 'bco_transversal_scrip_anticlonacion': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-U69, (C) Copyright IBM Corp. 2009, 2010 - All Rights reserved.  **/
(function(){var _1={};var _2=[];var _3=1;var _4={};_4.register=function(_5){var id=_6();_1[id]=_5;_2.push(_5);return id;};_4.deregister=function(_7){_1[_7]=null;_2=[];};_4.notify=function(_8,_9,_a){var _b=_c();var i=0;var _d=_b.length;if(!_a){_a={type:"AJAX"};}var _e=function(){if(i<_d){var _f=_b[i];i++;if(_f){_f(_8,_e,_a);}else{_e();}}};_e();if(_9){_9();}};_4.isActive=function(){return _2.length>0;};var _6=function(){return _3++;};var _c=function(){if(!_2||_2.length<=0){for(var _10 in _1){if(_1.hasOwnProperty(_10)){_2.push(_10);}}}return _2;};if(typeof (com)=="undefined"){com={};}if(typeof (com.ibm)=="undefined"){com.ibm={};}if(typeof (com.ibm.portal)=="undefined"){com.ibm.portal={};}if(typeof (com.ibm.portal.analytics)=="undefined"){com.ibm.portal.analytics={};}com.ibm.portal.analytics.SiteAnalyticsMediator=_4;com.ibm.portal.analytics.getSiteAnalyticsMediator=function(){return _4;};})();(function(){var _11=function(e){if(_12()){var _13=ibmCfg.portalConfig.currentPageOID;_14(null,null,{type:"PAGE",id:_13});var _15=_16();if(_15&&_15.length>0){for(var i=0;i<_15.length;++i){var _17=_15[i];var _18={};_18.type="PORTLET";_18.id=_19(_17);_1a(_17,_18.id);_14([_17],null,_18);}}}};var _14=function(_1b,_1c,_1d){com.ibm.portal.analytics.SiteAnalyticsMediator.notify(_1b,_1c,_1d);};var _12=function(){return com.ibm.portal.analytics.SiteAnalyticsMediator.isActive();};var _16=function(){var _1e=document.getElementById("layoutContainers");return _1f("div","component-control",_1e);};var _19=function(_20){var _21=_20.className,id=null;if(_21){var _22=_21.split(" ");for(var i=0,l=_22.length;i<l;++i){var cls=_22[i],_23=cls.indexOf("id-");if(_23>=0){id=cls.substring(_23+3);break;}}}return id;};var _1a=function(_24,_25){var _26=_24.className&&_24.className.indexOf("asa.portlet.selected")>=0;if(_26){var _27=document.getElementById("asa.portlet."+_25);if(_27){var _28=document.createElement("span");_28.className="asa.portlet.selected";_28.innerHTML="true";_27.appendChild(_28);}}};var _1f=function(_29,_2a,_2b){if(!_2b){_2b=document;}if(document.getElementsByClassName){return _2b.getElementsByClassName(_2a);}else{var _2c=[];_2a=_2a.toLowerCase();var _2d=_2b.getElementsByTagName(_29);if(_2d&&_2d.length>0){for(var i=0,l=_2d.length;i<l;i++){var e=_2d[i];if(e.className&&e.className.toLowerCase().indexOf(_2a)>=0){_2c.push(e);}}}return _2c;}};var _2e=i$.addOnLoad;if(typeof wp_wcm_async!="undefined"){_2e=i$.scope(wp_wcm_async,wp_wcm_async.addOnPageLoad);}_2e(_11);})();

}catch(e){console.log("Module 'wp_analytics_aggregator': ",e);}
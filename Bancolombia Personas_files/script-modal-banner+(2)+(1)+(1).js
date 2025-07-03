let funcionalidadVideosModal= () => {

    let $slides = document.querySelectorAll(".botombanner"),
        $background = document.querySelector(".background-modal-banner-home");

    $slides.forEach($buttonSlide => {

        let buttonCard = $buttonSlide.querySelector("#card-flotante-1");
        if (!buttonCard) return;

        let modalId = buttonCard.dataset.modal;
      

        let $modal = document.querySelector(`.contenedor-modal-banner-home.modal-${modalId}`);
       

        buttonCard.addEventListener("click", function (event) {
            event.preventDefault();
           

            if ($modal) {

                $modal.style.display = 'block';
                $modal.querySelector(".modal-banner-home").style.display = 'flex';
                $background.style.display = 'block';



                 const Section = document.querySelector(".botombanner");
                    const sectionRect = Section.getBoundingClientRect();

                    
                    
                    $modal.querySelector(".modal-banner-home").style.top = `${sectionRect.top + window.scrollY + 40}px`; 
                   
                    $modal.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                let iframe = $modal.querySelector(".video-modal iframe");
                if (iframe) {
                    let iframeContent = iframe.contentWindow || iframe.contentDocument;

                    try {
                        setTimeout(() => {
                            // Reinicia el video y lo reproduce
                            iframeContent.postMessage('{"event":"command","func":"seekTo","args":[0,true]}', '*');
                            iframeContent.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        }, 100);

                    } catch (error) {
                        console.error('Error al iniciar el video:', error);
                    }
                } else {
                    console.error('No se encontró el iframe para el modal:', modalId);
                }

            } else {
                let url = buttonCard.getAttribute('href');
                window.open(url, '_blank');
            }
        });

        $modal.querySelector(".boton-cerrar-modal").addEventListener("click", () => {
            $modal.style.display = 'none';
            $modal.querySelector(".modal-banner-home").style.display = 'none';
            $background.style.display = 'none';

            try {
                let iframe = $modal.querySelector(".video-modal iframe");
                if (iframe) {
                    let iframeContent = iframe.contentWindow || iframe.contentDocument;
                    iframeContent.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else {
                    console.error('No se encontró el iframe para pausar el video en el modal:', modalId);
                }
            } catch (error) {
                console.error('Error al pausar el video:', error);
            }
        });
    });
}


funcionalidadVideosModal();

let funcionalidadVideosModal1= () => {

    let $slides = document.querySelectorAll(".botombanner"),
        $background = document.querySelector(".background-modal-banner-home-1");

    $slides.forEach($buttonSlide => {

        let buttonCard = $buttonSlide.querySelector("#card-flotante-2");
        if (!buttonCard) return;

        let modalId = buttonCard.dataset.modal;
      

        let $modal = document.querySelector(`.contenedor-modal-banner-home-1.modal-${modalId}`);
       

        buttonCard.addEventListener("click", function (event) {
            event.preventDefault();
           

            if ($modal) {

                $modal.style.display = 'block';
                $modal.querySelector(".modal-banner-home-1").style.display = 'flex';
                $background.style.display = 'block';



                 const Section = document.querySelector(".botombanner");
                    const sectionRect = Section.getBoundingClientRect();

                    
                    
                    $modal.querySelector(".modal-banner-home-1").style.top = `${sectionRect.top + window.scrollY}px`; 
                   
                    $modal.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                let iframe = $modal.querySelector(".video-modal iframe");
                if (iframe) {
                    let iframeContent = iframe.contentWindow || iframe.contentDocument;

                    try {
                        setTimeout(() => {
                            // Reinicia el video y lo reproduce
                            iframeContent.postMessage('{"event":"command","func":"seekTo","args":[0,true]}', '*');
                            iframeContent.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        }, 100);

                    } catch (error) {
                        console.error('Error al iniciar el video:', error);
                    }
                } else {
                    console.error('No se encontró el iframe para el modal:', modalId);
                }

            } else {
                let url = buttonCard.getAttribute('href');
                window.open(url, '_blank');
            }
        });

        $modal.querySelector(".boton-cerrar-modal").addEventListener("click", () => {
            $modal.style.display = 'none';
            $modal.querySelector(".modal-banner-home-1").style.display = 'none';
            $background.style.display = 'none';

            try {
                let iframe = $modal.querySelector(".video-modal iframe");
                if (iframe) {
                    let iframeContent = iframe.contentWindow || iframe.contentDocument;
                    iframeContent.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else {
                    console.error('No se encontró el iframe para pausar el video en el modal:', modalId);
                }
            } catch (error) {
                console.error('Error al pausar el video:', error);
            }
        });
    });
}


funcionalidadVideosModal1();
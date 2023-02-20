/*function percent(){

document.getElementById("Contenu").scrollTop = ScrollGlobale;
}*/

const leFooter =  document.querySelector('footer')

window.addEventListener('scroll', function(){


    var h = document.documentElement; //  La racine // "scrollHeight" mesure de la hauteur du contenu de l'élément
                                      //  "clientHeight" la hauteur interne (padding)
    scrollPourcentage =  (h.scrollTop) / ((h.scrollHeight) - h.clientHeight) * 100;  //  Le Pourcentage de scroll par rapport au height (4096px)

    leFooter.style.width = scrollPourcentage+'vw';  //  

})
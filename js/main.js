import { menuOpenClose } from "./components/menu.js"

window.addEventListener('DOMContentLoaded', e=>{
    menuOpenClose()
})
//! ================ HEADER-fixed ===============
const headerFix = document.querySelector('.header')
window.addEventListener('scroll', event=>{
    if (window.scrollY >= 50) {
        headerFix.classList.add('header--fixed')
    }else{
        headerFix.classList.remove('header--fixed')
    }
})


('.navbar-nav div ul li a').click(function(e){
    // Evitamos que se haga el scroll
    e.preventDefault();

    // Capturamos el ancla
    let ancla = $(this).attr('href');

    // Le quitamos el numeral # para solo quedarnos con el nombre de la sección
    ancla = ancla.substring(1);

    // Obtenemos la posición de la sección
    let position = $('#'+ ancla).position();

    // Hacemos el efecto scroll y le restamos algunos pixeles, en este caso 180
    $('html, body').animate({scrollTop: (position.top - 600)}, 0);
})
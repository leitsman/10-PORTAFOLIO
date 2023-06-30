import { menuOpenClose } from "./components/menu.js"

window.addEventListener('DOMContentLoaded', e => {
    menuOpenClose()
})
//! ================ HEADER-fixed ===============
const headerFix = document.querySelector('.header')
const headerContainer = document.querySelector('.header__container')
const arrowUp = document.querySelector('.container__arrow-up')
window.addEventListener('scroll', e => {
    if (window.scrollY >= 1) {
        headerFix.classList.add('header__fixed')
        headerContainer.classList.add('header__container--shadow')
    } else {
        headerFix.classList.remove('header__fixed')
        headerContainer.classList.remove('header__container--shadow')
    }
});
//! ============== INCREMENT ICON ==============
const redesIcon = document.querySelectorAll('.redes__icon')
window.addEventListener('resize', e => {
    const windowWidth = window.innerWidth
    if (windowWidth > 1024) {
        redesIcon.forEach(e => {
            e.classList.add('fa-4x');
            e.classList.remove('fa-3x');
            // console.log(e.classList);
        });
    } else {
        redesIcon.forEach(e => {
            // e.classList.remove('fa-4x');
            // console.log(e.classList);
        })
    }
});

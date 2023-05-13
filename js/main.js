import { menuOpenClose } from "./components/menu.js"

window.addEventListener('DOMContentLoaded', e => {
    menuOpenClose()
    // const redesIcon = document.querySelectorAll('.redes__icon')
    // // console.log(redesIcon);
    // if (screen.width >= 1024) {
    //     // redesIcon.classList.add('fa-4x');
    //     console.log(redesIcon);
    // } else {
    //     redesIcon.classList.remove('fa-4x')
    // }
})
//! ================ HEADER-fixed ===============
const headerFix = document.querySelector('.header')
const headerContainer = document.querySelector('.header__container')
const arrowUp = document.querySelector('.container__arrow-up')
// console.log(arrowUp);
window.addEventListener('scroll', e => {
    if (window.scrollY >= 90) {
        headerFix.classList.add('header__fixed')
        headerContainer.classList.add('header__container--shadow')
    } else {
        headerFix.classList.remove('header__fixed')
        headerContainer.classList.remove('header__container--shadow')
    }
    if (window.scrollY >= 380) {
        arrowUp.classList.add('container__arrow-up--active');
    } else {
        arrowUp.classList.remove('container__arrow-up--active')
    }
});
//! ============== INCREMENT ICON ==============
const redesIcon = document.querySelectorAll('.redes__icon')
// console.log(redesIcon);
window.addEventListener('resize', e => {
    const windowWidth = window.innerWidth
    if (windowWidth > 1024) {
        redesIcon.forEach(e => {
            e.classList.add('fa-4x');
            e.classList.remove('fa-3x');
            console.log(e.classList);
        });
    } else {
        redesIcon.forEach(e => {
            // e.classList.remove('fa-4x');
            console.log(e.classList);
        })
    }
});

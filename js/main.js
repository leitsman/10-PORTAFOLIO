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
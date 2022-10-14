export function menuOpenClose() {
    const menuPrincipal = document.getElementById('menu-principal')

    const imgOpenMenu = document.getElementById('menu--img-open')
    const imgCloseMenu = document.getElementById('menu--img-close')

    imgOpenMenu.addEventListener('click', event=> menuPrincipal.classList.add('menu--open'))
    imgCloseMenu.addEventListener('click', event => menuPrincipal.classList.remove('menu--open'))
    clickAndCloseMenu(menuPrincipal)
}
//! =============== CLICK AND CLOSE MENU
function clickAndCloseMenu(elementHtml) {
    const itemMenu = document.querySelectorAll('a.ul--item')

    itemMenu.forEach(button =>{
    button.addEventListener('click', event=>{
        elementHtml.classList.remove('menu--open')
        
    })
})
}
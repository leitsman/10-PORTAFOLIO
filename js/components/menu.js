export function menuOpenClose() {
    const menuPrincipal = document.getElementById('menu-principal')

    const imgOpenMenu = document.getElementById('menu__img-open')
    const imgCloseMenu = document.getElementById('menu__img-close')

    imgOpenMenu.addEventListener('click', event => menuPrincipal.classList.add('menu__open'))
    imgCloseMenu.addEventListener('click', event => menuPrincipal.classList.remove('menu__open'))
    clickAndCloseMenu(menuPrincipal)
}
//! =============== CLICK AND CLOSE MENU
function clickAndCloseMenu(elementHtml) {
    const itemMenu = document.querySelectorAll('a.ul__item')

    itemMenu.forEach(button => {
        button.addEventListener('click', e => {
            elementHtml.classList.remove('menu__open')

        })
    })
}
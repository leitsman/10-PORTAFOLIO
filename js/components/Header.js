export function isScroll() {
    const headerFix = document.querySelector('.header')
    const headerContainer = document.querySelector('.header__container')
    const arrowUp = document.querySelector('.container__arrow-up')
    // //! ================ HEADER-fixed ===============
    window.addEventListener('scroll', e => {
        if (window.scrollY >= 1) {
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
}
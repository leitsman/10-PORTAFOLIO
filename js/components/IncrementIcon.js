export function increaseIcon(booleanValue) {
    //! ============== INCREMENT ICON ==============
    isLarge(window.innerWidth)
    window.addEventListener('resize', e => {
        isLarge(window.innerWidth)
    });
};
function isLarge(width) {
    const redesIcon = document.querySelectorAll('.redes__icon');
    if (width > 1024) {
        redesIcon.forEach(e => {
            e.classList.add('fa-4x');
            e.classList.remove('fa-3x');
        });
    } else {
        redesIcon.forEach(e => {
            e.classList.add('fa-3x');
            e.classList.remove('fa-4x');
        })
    };
}
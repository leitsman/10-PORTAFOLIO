export function darkMode() {
    const btnDark = document.getElementById('buttonDark')

    btnDark.addEventListener('click', e => {
        console.log('hiciste click');
        document.body.classList.toggle('dark')
    })
}
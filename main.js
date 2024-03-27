const menu = document.querySelector('.menu')
const sideBar = document.querySelector('.sidebar')

menu.hidden = true

window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 425px)").matches) {
        menu.hidden = false
        sideBar.classList.remove('sidebar')
        sideBar.classList.add('sidebar2')
    }
    else if (window.matchMedia("(min-width: 426px)").matches) {
        menu.hidden = true
        sideBar.classList.add('sidebar')
        sideBar.classList.remove('sidebar2')
    }
})
menu.addEventListener('click', () => {
    if (sideBar.className.match('sidebar2')) {
        sideBar.classList.remove('sidebar2')
        sideBar.classList.add('sidebar')

    }
    else if (sideBar.className.match('sidebar')) {
        sideBar.classList.add('sidebar2')
        sideBar.classList.remove('sidebar')
    }
})
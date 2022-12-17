/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */
/* Valida se a constante existe */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
/* Valida se a constante existe */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelector('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos no nav__link, removemos o show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.add.addEventListener('click', linkAction))
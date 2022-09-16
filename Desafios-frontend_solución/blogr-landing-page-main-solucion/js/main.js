//  elementos
/* contenedor de los icons, el que capturador de eventos */
const containerIcon = document.getElementById('icon-container');

/* icon habmurguer */
const iconHamburguer = document.getElementById('hamburguer');

/* icon close */
const iconClose = document.getElementById('close');


/* nav mobile */
const nav = document.getElementById('nav-mobile');


/* Se le da click y lo unico que hace es añadir o eliminar la clase que hace que se vea */
containerIcon.addEventListener('click', () => {
    iconHamburguer.classList.toggle('icon--active');
    iconClose.classList.toggle('icon--active');
    nav.classList.toggle('nav-hamburger__bar--active');
})
/* icon menu habmurguer */
const iconsMenu = document.querySelector('.header__icons-bar'); /* interctividad */
const modalNav = document.querySelector('.nav-bakcground'); /* modal nav */
const hamubrguerMenu = document.querySelector('.header__icon-menu');
const closeMenu = document.querySelector('.header__icon-close');

/* Summary menu expanded */
let summary = document.querySelectorAll('.nav__summary'); /* interctividad */
summary = [...summary]
console.log(summary)
const iconArrow = document.querySelectorAll('.icon-arrow'); /* arrow summary */

/* mostrar modal nav */
iconsMenu.addEventListener('click', () => {

    modalNav.classList.toggle('d-none')
    hamubrguerMenu.classList.toggle('icon--active')
    closeMenu.classList.toggle('icon--active')

})


/* mostar los details del summary */
summary.forEach((element,index) => {
    
    element.addEventListener('click', () => {
        /* si la tiene se la quita */
        if (element.classList.contains('nav__summary--expanded')) {
            element.classList.toggle('nav__summary--expanded')

        } else {
            showSummary(index)  
        }
    })

})

const showSummary = (index) => {
    // se la quita a todos
    summary.forEach(item => {
        item.classList.remove('nav__summary--expanded')
    })
    // le añado al seleccionado
    summary[index].classList.toggle('nav__summary--expanded')
    console.log(summary[index])
}
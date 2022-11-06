'use strict'
/* seleccionar los elementos */
const adviceContainer = document.querySelector('.advice'); /* Contenedor donde van los consejos y el indice */
const btnGenerator = document.querySelector('.btnGenerator'); /* Boton que lleva toda la interactividad */
const modalError = document.querySelector('.errorModal-background');

btnGenerator.addEventListener('click', () => {
    /* Le doy la clase para animarlo, y después se la quito */
    btnGenerator.classList.add('btnGenerator--active');
    setTimeout(() => {btnGenerator.classList.remove('btnGenerator--active');}, 300)

    /* Hago la peición y dibujo */
    getAdvice()
})


const getAdvice = async () => {
    let data; /* almacena el json de la petición */
//             hace la petición y espera una respuesta                            maneja la excepción(error)
    let request = await fetch('https://api.adviceslip.com/advice').catch((e)=> modalError.classList.toggle('d-none'))
//    Entiendo que se pone el await para que no salte a la otra linea, hasta que tenga una respuesta
    data = await request.json()
    
    
    let index = data.slip.id 
    let advice = data.slip.advice

    adviceContainer.innerHTML = 
    `<h1 class="advice__title">Advice <span id="indexAdvice">#${index}</span> </h1>
    <p class="advice__paragraph">"${advice}"</p>`
    
}

modalError.addEventListener('click', () => {
    modalError.classList.toggle('d-none')
})








/* Options */
const options = document.querySelectorAll('.option'); /* Lista de opciones */

/* Button */
const submit = document.getElementById('submit'); /* Boton para enivar */

/* Btn */
const btn = document.querySelector('.btn'); /* Boton para volver a valorar */

/* inputValue */
const inputValue = document.getElementById('valueSelected');/* La puntuacion */

/* msgSelected */
const msgSelected = document.getElementById('msgSelected'); /* El mensaje con la puntuacion */

/* assessment */
const assessment = document.querySelector('.assessment');/* Layaout de puntuación */

/* gratitude */
const gratitude = document.querySelector('.gratitude');/* Layaout de agradecimiento */


/* itero todos los elementos */
options.forEach((option, index) => {
    /* Un eschucha por cada item */
    option.addEventListener('click', e => {
       
        select(index);                  /* le paso el indice del elemento */
        inputValue.value = e.target.id; /* guardo la selección en el input */
     
    })

})


/* Un escucha al submit */
submit.addEventListener('click', () => {
    
    if (inputValue.value) { /* no se puede enviar vacio */

        msgSelected.textContent = `You selected ${inputValue.value} out of 5`; /* agrega el mensaje */

        /* modifico las clases para su display */
        assessment.classList.toggle('d-none');
        gratitude.classList.toggle('d-none');
        btn.classList.toggle('d-none');
    }
    else {
        alert('Ayudanos con tu valoración')
    }

})

/* Volver a valorar */                           /* Para esete desafio lo dejo asi, pero lo mejor es hacer otra pagína con el otro layaout (Thanks) y la selección en un form */
btn.addEventListener('click', () => {
    assessment.classList.toggle('d-none');
    gratitude.classList.toggle('d-none');
    btn.classList.toggle('d-none');
})



/* Función que añade la lista a un solo item */
function select(index) {
    
    options.forEach((option) => {
        option.classList.remove('score__mark--active')
    })
    options[index].classList.add('score__mark--active')

}






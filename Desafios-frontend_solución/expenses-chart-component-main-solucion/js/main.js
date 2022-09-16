/* importamos el JSON local */
    //variable     /* ruta archivo */      /* tipo de archivo */
import data from '../data.json' assert {type: 'json'};

/* Contenedor de las barras */
const chart = document.getElementById('chart');

/* Array donde se guardan los valores para calcular el alto de cada barra */
let values = [];

/* Recorro el JSON para añadir cada barra con su respectivo dia, monto y tamaño */
data.forEach( item => {
    
    values.push(item.amount)  /* Agrego el monto al array */

    chart.innerHTML += `
    <div class="chart__bar">
        <div class="bar__amount d-opacity">${item.amount}</div>
        <div class="bar";" ></div>
        <div class="bar__day">${item.day}</div>
    </div>`

})

let maxValue = Math.max(...values) /* El mas grande para que tenga un estilo diferente */
const maxHeight = 200 /* maxima altura */
let bars  = document.querySelectorAll('.bar'); /* barras */
bars = [...bars] /* Lo convierto a un array spread */

/* Una ecuación para poder darle la altura a cada barra dependiendo del amount 

    /* maxValue = 200px
        value = X
        
        X = value * 200px / maxValue
        
        altura actual =  monto * 200px / 52.36
        
        */

/* recorro todas las barras para ponerle su altura y añadirle un evento*/

let labelAmount = [] /* creo un ARRAY con los elementos que contienen el monto */

bars.forEach(bar => {

    labelAmount.push(bar.parentElement.firstElementChild)
    
    let value = bar.parentElement.firstElementChild.textContent; /* el monto */
    let height = (value * maxHeight) / maxValue; /* altura de cada barra */
    height = Math.round(height)

    /* Le doy un estilo unico al la barra mas grande == maxValue */
    if (value == maxValue) {
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)'
    }

    bar.style.height = height+'px' /* le doy su altura rey */

    bar.addEventListener('mouseover', () => {
        
        bar.parentElement.firstElementChild.classList.toggle('d-opacity')
        bar.classList.toggle('bar--active')

    })

    /* Para cuando salga del elemento */
    bar.addEventListener('mouseout',()=> {
        bar.parentElement.firstElementChild.classList.toggle('d-opacity')
        bar.classList.toggle('bar--active')
    })
    
})


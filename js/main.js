const textContainer = document.querySelectorAll('.text--write')

let textToWrite = ['desarrollador frontend','<>TODO CON HTML, CSS Y JAVASCRIPT<>','Phone: +54 2634 807932','Luisjian948@gmail.com']; 
/* Estatico, hay ciertos bugs si lo pongo un poco dinamico */


/*  */
    // /* función hace un efecto de maquina de escribir. y se activa con el scroll, lo estaba realizando con intersectionObserver pero */
    //  resultaron varios problemas ya que este cada vez que se salia de viewpor actulizaba su valor, entonces hubieron muchos bugs como el de que se escribian cosas donde iban otros textos, entonces decidi dejarlo que se escriba no mas
    //                 /* Al ser llamada atravez del objeto el elemnto es un array con ciertas propiedades */
    // function write(elementos) {
        
    //     elementos.forEach(element => {
            
    //         if (element.isIntersecting && !element.target.classList.contains('visible') ) {        
    //             if (element.target.id == 0) {
    //                 var arrayCharacters = textToWrite[0].split(''); /* un arreglo de caracteres*/
    //             }
    //             // arrayCharacters = element.target.textContent.split(''); /* un arreglo de caracteres*/
                
    //             else if (element.target.id == 1){
    //                 arrayCharacters = textToWrite[1].split('')
    //             }
    //             else if (element.target.id == 2){
    //                 arrayCharacters = textToWrite[2].split('')
                    
    //             }


    //             element.target.textContent = '';  
    //             let aux = 0
    //             let step = setInterval(() => {  
        
    //                 element.target.textContent += arrayCharacters[aux] /* agrega una letra */
    //                 aux++                                                /*  Incremento para recorrer */
    //                 if (aux == arrayCharacters.length) {                 /* ya recorrio todo el arreglo */
    //                     clearInterval(step)                              /* termina  */
    //                     aux = 0
    //                     element.target.classList.add('visible')       /* Le agrego una clase para que ya no se vuelve a repetir */
    //                 }
    //             }, 100)
                
    //         } 

    //     });
        
    // }







    // /* Objeto oservador, API  (función a ejecutar, objeto para modificar sus propiedades) */

    // const observator = new IntersectionObserver(write, {
    //     root:null,
    //     threshold: 1
    // })

    // // console.log(observator)

    // /* lo ponemos a observar y se le pasa por parametro el elemento a observar */

    // observator.observe(textContainer[0]) 
    // observator.observe(textContainer[1]) 
    // observator.observe(textContainer[2]) 

    
const reset = (container, texto)=>{ /* Función que vuelve a escirbir el texto */

    let arrayText = texto.split('')

    setTimeout(() => { /* tenga un retardo */

        container.textContent = ''
        let centinela = 0
        let tipiar = setInterval(() => {
            container.textContent += arrayText[centinela]
            centinela++
            if (centinela == arrayText.length) {
                clearInterval(tipiar)
                centinela = 0
            }
        }, 100) 

    },3000)

}

/* llamo a la función */
textContainer.forEach((container, index) => {
    reset(container,textToWrite[index])
}) 


const header = document.querySelector('.header');
console.log(header)
header.style.background = 'radial-gradient(#1e1e36e0,#1e1e36), url(/fondopy.png)'
header.style.backgroundSize = 'cover'
header.style.backgroundPosition = 'center'
/* style="background: radial-gradient(#1e1e36e0,#1e1e36), url(/fondopy.png);  background-size: cover;background-position: center;" */
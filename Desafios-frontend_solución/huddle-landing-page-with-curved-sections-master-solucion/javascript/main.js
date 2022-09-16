/* Primero se traen variables */
const email = document.getElementById("email")  /* input */
const emailError = document.getElementById("emailError") /* Mensaje de error */
const submit = document.querySelector("#submit") /* boton */
const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;



function prueba() {
    
    alert("hp")
    
}

submit.addEventListener("click", (e) => {
    
    let validacion = regEx.test(email.value)

    if (validacion) {
        // e.preventDefault()
        emailError.style.display = "none" /* Estos estilos no se ven porque carga la pagina :/ */
        email.style.outlineColor = "green"
       
        alert("Se ha inscrito correctamente")

        

    } else {

        // alert("hp")
        e.preventDefault()   /* Para que no se envia hasta que sea correcto */
        emailError.style.display = "block"
        email.style.outlineColor = "crimson"
        
    }
})





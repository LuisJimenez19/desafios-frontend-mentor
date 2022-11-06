# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

- Mobile
![](./design/mobile-design.jpg)
- desktop
![](./design/desktop-design.jpg)
- active states
![](./design/active-states.jpg)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I am learning to modify the DOM through javascript

```js
/* actualizo el contenido */
   adviceContainer.innerHTML = 
    <h1 class="advice__title">Advice <span id="indexAdvice">#${indexAndAdvice[0]}</span> </h1>
    <p class="advice__paragraph">"${indexAndAdvice[1]}"</p>

```
request

```js
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

```



## Author

- Website - [Luis Angel](https://luisjimenez19.github.io/desafios-frontend-mentor/)
- Frontend Mentor - [@LuisJimenez19](https://www.frontendmentor.io/profile/LuisJimenez19)


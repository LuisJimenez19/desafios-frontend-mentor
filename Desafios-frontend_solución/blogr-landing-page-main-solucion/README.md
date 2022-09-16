# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

## Layaout mobile
![](./design/mobile-design.jpg)
# nav mobile
![](./design/mobile-menu.jpg)

## Layaout Desktop
![](./design/desktop-design.jpg)

# active states
![](./design/active-states.jpg)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM

### What I learned

I'm learning to use sass and bem, I did everything with the menu with sass and the animations with the scroll if I used the AOS library

un acordionsito para el menu
```html
<details class="nav__details">

  <summary class="nav__details__summary">Product <span class="icon-arrow"></span> </summary>
  <div class="links-container" >
    <ul class="summary__links">
      <li class="link"> <a href="#" target="_blank" rel="noopener noreferrer">Overview</a></li>
      <li class="link"> <a href="#" target="_blank" rel="noopener noreferrer">Pricing</a></li>
      <li class="link"> <a href="#" target="_blank" rel="noopener noreferrer">Marketplace</a></li>
      <li class="link"> <a href="#" target="_blank" rel="noopener noreferrer">Features</a></li>
      <li class="link"> <a href="#" target="_blank" rel="noopener noreferrer">Integrations</a></li>
    </ul>
  </div>

</details>
```
```css
// <----------------------/* La barra de navegación de mobile */----------------------------------------->
.nav-hamburguer__bar{
  
    position: absolute;

    margin-top: 30px;
    left: 30px;
    right: 30px;

    
    // border: 1px solid magenta;
    border-radius: 10px;
    background-color: var.$White;
    padding: 40px 0;
    
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    display: none;

    box-shadow: 0 0 30px var.$VeryDarkGrayishBlue;
    
}

/* Lo hago aparcer con js */
.nav-hamburger__bar--active{
    display: flex;
    animation: aparecer .3s linear alternate ;
}
@keyframes aparecer {
    0%{
        opacity: 0;
        transform: translateY(-100%) translateX(100%) scale(0);
    }
    100%{
        opacity: 1;
        transform:  translateY(0);
    }
}

/* Oculto el nav desktop */
.nav-bar{
display: none;
}
```


```js
containerIcon.addEventListener('click', () => {
    iconHamburguer.classList.toggle('icon--active');
    iconClose.classList.toggle('icon--active');
    nav.classList.toggle('nav-hamburger__bar--active');
})
```




# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

## Mobile first

![](./design/mobile-design.jpg)

## Desktop
![](./design/desktop-design.jpg)

## layaout thanks
![](./design/desktop-thank-you-state.jpg)
![](./design/mobile-thank-you-state.jpg)

## active

![](./design/active-states.jpg)


## My process

### Built with


- Transpilate SASS
- Flexbox

- Mobile-first workflow

### What I learned
I'm getting more familiar with SASS, learning more and more about the BEM methodology and using native JavaScript.




```scss

.score__mark--active{
  background-color: var.$Orange;
  color: var.$White;
  transform: scale(1.1);
}
```
```js
function select(index) {
    
  options.forEach((option) => {
      option.classList.remove('score__mark--active')
  })
  options[index].classList.add('score__mark--active')

}

```


- Frontend Mentor - [@LuisJimenez19](https://www.frontendmentor.io/profile/LuisJimenez19)



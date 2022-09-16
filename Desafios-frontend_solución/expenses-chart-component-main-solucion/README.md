# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot
# mobile
![](./design/mobile-design.jpg)

# desktop
![](./design/desktop-design.jpg)

# hover
![](./design/active-states.jpg)

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
```html
  <div  id="chart" class="details__chart">

  </div>
```

- Le doy una clase activa, puede hacerse con la pseudoclase pero en este caso me decidí hacerlo con js
```css
.bar--active{
  filter: brightness(1.2);
}

.d-opacity{
 opacity: 0;
}
```

- Agrego las barras dinamicamente con los valores del JSON
```js
    chart.innerHTML += `
    <div class="chart__bar">
        <div class="bar__amount d-opacity">${item.amount}</div>
        <div class="bar";" ></div>
        <div class="bar__day">${item.day}</div>
    </div>`console.log('🎉')

```

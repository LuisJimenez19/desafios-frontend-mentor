'use strict'
import './style.css'
import data from './data.json' assert {type: 'json'};
const root = document.querySelector('#root');
console.log(data)



/* CARGAR TODA LA INFO */
data.forEach(obj => {
	let title = obj.title.toLowerCase()
	let current = obj.timeframes.daily.current
	let previous = obj.timeframes.daily.previous

	let cardHtml =
		`<div class="card card-${title}" style="background-image:url('./images/icon-${title}.svg');"> 
		<div class="card__details">  
			<div class="card__details__activity">
				<p class="acivity">${title}</p>
				<img src="./images/icon-ellipsis.svg" alt="...">
			</div>
			<div class="card__details__timeframe">
				<p class="current">${current}hrs</p>
				<div class="details-prev">
					<p class="description">Last Week - <span class="previous">${previous}hrs</span></p>
				</div>
			</div>
		</div>
	</div>`
	root.innerHTML += cardHtml

})

/* Cambia el contenido de las variables */
function updateCards(timeFrame) {
	let current
	let previous
	data.forEach((obj, index) => {

		if (timeFrame === 'daily') {
			current = obj.timeframes.daily.current
			previous = obj.timeframes.daily.previous

		}

		else if (timeFrame === 'weekly') {
			current = obj.timeframes.weekly.current
			previous = obj.timeframes.weekly.previous
		}

		else if (timeFrame === 'monthly') {
			current = obj.timeframes.monthly.current
			previous = obj.timeframes.monthly.previous
		}

		changeTime(current, previous,index)
	})

}


/* Recorre para cambiar el contenido */
function changeTime(current, previous,index) {

	document.querySelectorAll('.current')[index].textContent = `${current}hrs`
	
	document.querySelectorAll('.previous')[index].textContent = `${previous}hrs`
}


document.addEventListener('click', (e) => {

	if (e.target.matches('.card__option')) {
		document.querySelectorAll('.card__option').forEach(item => item.classList.remove('option--active'))

		e.target.classList.add('option--active')
		updateCards(e.target.id)

	}
})



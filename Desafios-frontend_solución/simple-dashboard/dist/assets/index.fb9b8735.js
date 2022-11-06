(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const c=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}],n=document.querySelector("#root");console.log(c);c.forEach(t=>{let r=t.title.toLowerCase(),i=t.timeframes.daily.current,s=t.timeframes.daily.previous,e=`<div class="card card-${r}" style="background-image:url('./images/icon-${r}.svg');"> 
		<div class="card__details">  
			<div class="card__details__activity">
				<p class="acivity">${r}</p>
				<img src="./images/icon-ellipsis.svg" alt="...">
			</div>
			<div class="card__details__timeframe">
				<p class="current">${i}hrs</p>
				<div class="details-prev">
					<p class="description">Last Week - <span class="previous">${s}hrs</span></p>
				</div>
			</div>
		</div>
	</div>`;n.innerHTML+=e});function a(t){let r,i;c.forEach((s,e)=>{t==="daily"?(r=s.timeframes.daily.current,i=s.timeframes.daily.previous):t==="weekly"?(r=s.timeframes.weekly.current,i=s.timeframes.weekly.previous):t==="monthly"&&(r=s.timeframes.monthly.current,i=s.timeframes.monthly.previous),u(r,i,e)})}function u(t,r,i){document.querySelectorAll(".current")[i].textContent=`${t}hrs`,document.querySelectorAll(".previous")[i].textContent=`${r}hrs`}document.addEventListener("click",t=>{t.target.matches(".card__option")&&(document.querySelectorAll(".card__option").forEach(r=>r.classList.remove("option--active")),t.target.classList.add("option--active"),a(t.target.id))});

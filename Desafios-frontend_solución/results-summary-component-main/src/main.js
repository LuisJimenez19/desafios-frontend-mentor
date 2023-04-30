console.log("connect wiht JS");
("use strict");
const categoriesContainer = document.querySelector(".categories-container");
const resultScore = document.getElementById("result-score");
/* get data */
async function getData() {
  const res = await fetch("src/data.json");
  const data = await res.json();
  console.log(data);
  drawData(data);
}

/* drawCategories */
function drawData(data) {
  data.forEach(({ category, score, icon }) => {
    let categoryHTML = document.createElement("div");
    categoryHTML.className = `category category-${category.toLowerCase()}`;
    categoryHTML.innerHTML = `
    <div class="img-title">
         <img src=${icon} alt=${category} />
         ${category}
    </div>
    <p><span  class="bold score">${score}</span> / 100</p>
    `;

    categoriesContainer.appendChild(categoryHTML);
  });
  /* Que se cargue el número bien chimbita */
  loadScore(parseInt(resultScore.innerText), resultScore);
  document
    .querySelectorAll(".score")
    .forEach((item) => loadScore(item.innerText, item));
}

/* Load score fachero */
function loadScore(limit, elemt) {
  console.log(limit);
  let count = 0;
  const interval = setInterval(() => {
    count++;
    elemt.innerText = count;
    if (count === parseInt(limit)) clearInterval(interval);
  }, 8);
}

/* cuando todo cargue */
function main() {
  getData();
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});

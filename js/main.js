const textContainer = document.querySelectorAll(".text--write");

// Accedemos al elemento link que contiene el favicon
const favicon = document.querySelector('link[rel="shortcut icon"]');
// Cuando la ventana pierde el foco, cambiamos el favicon
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    favicon.href = "/favicon-inactive.ico";
  } else {
    favicon.href = "/favicon-active.ico";
  }
});

let textToWrite = [
  "desarrollador frontend",
  "<>TODO CON HTML, CSS Y JAVASCRIPT<>",
  "Phone: +54 2634 807932",
  "Luisjian948@gmail.com",
];
const typewriter = (container, texto, intervalo = 100) => {
  /* Función que vuelve a escirbir el texto */
  let arrayText = texto.split("");
  setTimeout(() => {
    /* tenga un retardo */

    container.textContent = "";
    let centinela = 0;
    let tipiar = setInterval(() => {
      container.textContent += arrayText[centinela];
      centinela++;
      if (centinela == arrayText.length) {
        clearInterval(tipiar);
        centinela = 0;
      }
    }, intervalo);
  }, 3);
};

/* llamo a la función */
textContainer.forEach((container, index) => {
  typewriter(container, textToWrite[index]);
});


/* Traduce el advice */
async function translate(text, lang) {
  const url = "https://rapid-translate-multi-traduction.p.rapidapi.com/t";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "166ff5149emsh071c8b2137c279ep10530djsn9b0ad020b3d4",
      "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
    },
    body: JSON.stringify({
      from: "en",
      to: lang,
      q: text,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result[0]);
    return await result[0];
  } catch (error) {
    console.error(error);
    return false
  }
}

/* pide el advice */
async function getAdvice(){
  const res = await fetch('https://api.adviceslip.com/advice')
  const result = await res.json()
  const text =  await result.slip.advice
  console.log(text)
  const translatedText = await translate(text, "es")
  if(translatedText) return translatedText
  else return text
}

// getAdvice()

const elementAdvice = document.getElementById("advice")
const elementAdviceFooter = document.getElementById("advice-footer")

async function renderAdvice(){
  const adviceHeader = await getAdvice()
  const adviceFooter = await getAdvice()
  typewriter(elementAdvice, adviceHeader)
  typewriter(elementAdviceFooter, adviceFooter)
}
renderAdvice()
setTimeout(()=>{
  renderAdvice()
},30000)
const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
}

let timeoutId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', handleChangeColorBody);
refs.stop.addEventListener('click', handleClearColorBody);

function handleChangeColorBody() {
  refs.body.style.backgroundColor = getRandomHexColor();
  timeoutId = setInterval(() => {
  refs.body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function handleClearColorBody() {
 clearInterval(timeoutId);  
}


const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
}

let timeoutId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.stop.setAttribute(`disabled`, true);

refs.start.addEventListener('click', handleBtnChangeColorBody);
refs.stop.addEventListener('click', handleBtnClearColorBody);

function handleBtnChangeColorBody() {
  refs.stop.removeAttribute(`disabled`);
    refs.body.style.backgroundColor = getRandomHexColor();
    timeoutId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  refs.start.setAttribute(`disabled`, true);
}
 
function handleBtnClearColorBody() {
  clearInterval(timeoutId);
  refs.stop.setAttribute(`disabled`, true);
  refs.start.removeAttribute(`disabled`);
 }
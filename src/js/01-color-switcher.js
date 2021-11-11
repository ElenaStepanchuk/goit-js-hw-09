const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
}

console.log(refs.start);
console.log(refs.stop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const color = getRandomHexColor();
console.log(color);

refs.start.addEventListener('click', handleChangeColorBody);

function handleChangeColorBody() {
    body.style.backgroundColor = getRandomHexColor();
}

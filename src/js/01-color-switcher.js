const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', true);
  intervalId = setInterval(changeBackgroundColor, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
});

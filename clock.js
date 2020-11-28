const jsClock = document.querySelector('.clock');
const jsClockText = jsClock.querySelector('h1');

function getTime() {
  const timer = new Date();
  const currentHour = timer.getHours();
  const currentMinute = timer.getMinutes();
  const currentSec = timer.getSeconds();
  jsClockText.innerText = `${currentHour > 9 ? currentHour : '0' + currentHour}:${
    currentMinute > 9 ? currentMinute : '0' + currentMinute
  }:${currentSec > 9 ? currentSec : '0' + currentSec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

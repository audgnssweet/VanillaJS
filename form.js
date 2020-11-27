const WhoForm = document.querySelector('.js_WhoAreYou_form'),
  WhoInput = WhoForm.querySelector('input'),
  greetings = document.querySelector('.js_greetings');

const SHOWING_CN = 'showing';

function init() {
  loadName();
}

function loadName() {
  const currentUser = localStorage.getItem('USER');
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function askForName() {
  WhoForm.classList.add(SHOWING_CN);
  WhoForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const userName = WhoInput.value;
  paintGreetings(userName);
  saveName(userName);
}

function paintGreetings(userName) {
  WhoForm.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `hello ${userName}`;
}

function saveName(name) {
  localStorage.setItem('USER', name);
}

init();

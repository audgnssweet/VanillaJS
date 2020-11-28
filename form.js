const loginForm = document.querySelector('.loginForm');
const loginInput = loginForm.querySelector('input');
const greetDiv = document.querySelector('.greet');
const greetMSG = greetDiv.querySelector('span');

const SHOW_CN = 'showing';
const HIDE_CN = 'hide';

function init() {
  const userName = localStorage.getItem('USER_NAME');
  if (userName === null) {
    loginForm.classList.remove(HIDE_CN);
    loginForm.addEventListener('submit', loginSubmitHandle);
  } else {
    greetDiv.classList.remove(HIDE_CN);
    greetMSG.innerText = `hello ${userName}! welcome!`;
  }
}
init();

function loginSubmitHandle(event) {
  const userInput = loginInput.value;
  localStorage.setItem('USER_NAME', userInput);
}

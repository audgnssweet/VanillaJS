const todoList = document.querySelector('.todoList');
const todoForm = document.querySelector('.todoForm');
const todoForm__input = todoForm.querySelector('.todoForm__input');

const todoUl = [];

function init() {
  const currentUser = localStorage.getItem('USER_NAME');
  if (currentUser !== null) {
    todoList.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    loadTodoUl();
    todoForm.addEventListener('submit', todoSubmitHandle);
  }
}
init();

function todoSubmitHandle(event) {
  const todoWhat = todoForm__input.value;
  event.preventDefault();
  addToTodoList(todoWhat);
}

function addToTodoList(todoWhat) {
  const todoLi = document.createElement('li');
  const todoSpan = document.createElement('span');
  const todoDelBtn = document.createElement('button');
  const newId = todoUl.length + 1;
  todoLi.id = newId;
  todoSpan.innerText = todoWhat;
  todoDelBtn.innerText = 'X';
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoDelBtn);
  todoList.appendChild(todoLi);
  todoForm__input.value = '';
  const todo = {
    text: todoWhat,
    id: newId,
  };
  todoUl.push(todo);
  saveTodoUl();
}

function saveTodoUl() {
  localStorage.setItem('TODO_LIST', JSON.stringify(todoUl));
}

function loadTodoUl() {
  const loadedList = localStorage.getItem('TODO_LIST');
  if (loadedList !== null) {
    const loadedParsedList = JSON.parse(loadedList);
    loadedParsedList.forEach(function (todo) {
      addToTodoList(todo.text);
    });
  }
}

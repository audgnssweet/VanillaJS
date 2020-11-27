const Todoform = document.querySelector('.js_todoList_form'),
  TodoInput = Todoform.querySelector('input'),
  TodoList = document.querySelector('.js_todoList');

const TODO_LIST = 'todoList';

function init() {
  loadTodoList();
  Todoform.addEventListener('submit', handleSubmit);
}
init();

function loadTodoList() {
  const todoList = localStorage.getItem(TODO_LIST);
  //   if (todoList !== null) {
  //   }
}

function handleSubmit(event) {
  const Todo = TodoInput.value;
  event.preventDefault();
  paintTodo(Todo);
  TodoInput.value = '';
}

function paintTodo(Todo) {
  const li = document.createElement('li');
  const rmBtn = document.createElement('button');
  rmBtn.innerText = 'del';
  const span = document.createElement('span');
  span.innerText = Todo;
  li.appendChild(span);
  li.appendChild(rmBtn);
  TodoList.appendChild(li);
}

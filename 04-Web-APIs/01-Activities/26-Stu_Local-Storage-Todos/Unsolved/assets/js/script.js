const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// TODO: What is the purpose of this function?
// to display the todo on the page

function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.

/*A string containing the HTML serialization of the element's 
  descendants. Setting the value of innerHTML removes all of 
  the element's descendants and replaces them with nodes constructed 
  by parsing the HTML given in the string htmlString.
  
  When set to the null value, that null value is converted to the empty string (""), so elt.innerHTML = null is equivalent to elt.innerHTML = "". */

  todoList.innerHTML = '';
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.textContent = todo;

    // li.setAttribute('data-index', i);

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem('todos'));

  // TODO: Describe the functionality of the following `if` statement.
  // if stringify is null then set todo array to null string
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // render data
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // stringifies the array todos to a string 
  // and saves to local storage

  localStorage.setItem('todos', JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.
// adds an action item to the todoForm
// supresses defaults
//gets the todoInput values and assigned to todoText


todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  // TODO: Describe the functionality of the following `if` statement.
  // if the text is empty return 
  if (todoText === '') {
    return;
  }

  // TODO: Describe the purpose of the following lines of code.
  // pushes text into array todos
  // assigns null string to todoInput value and doesn't do anything with it
  todos.push(todoText);
  todoInput.value = '';

  // TODO: What will happen when the following functions are called?
  // stringifies the array todos to a string 
  // and saves to local storage
  storeTodos();

  // to display the todo on the page
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    
    storeTodos(); //stringify and store in local
    renderTodos(); //render 
  }
});


init();

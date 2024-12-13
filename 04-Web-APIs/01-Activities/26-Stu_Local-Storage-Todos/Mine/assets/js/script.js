const todoInput = document.querySelector('#toDoInput');
const toDoListForm = document.querySelector('#toDoList');
const count = document.querySelector('#count')

const toDo = [];


function renderTools(){


    count.textContent = toDo.length;


    for(let i = 0; i < todos.length; i++) {

        const myVar = toDo[i];


        const li = document.createElement('li');
        li.textContent = myVar;
        const button = document.createElement('button');
        button.textContent = 'Complete ✔️';
        

        toDoListForm.textContent = myVar;

        li.appendChild(button);
        toDoListForm.appendChild(li);
    }
}

function init() {

    let storedTodos = todoInput.value;

    if (storedTodos !== null) {
        todos = storedTodos;
    }

    renderTools();
}



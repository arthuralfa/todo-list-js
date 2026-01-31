const addButton = document.querySelector("#add-button");
const textInput = document.querySelector("#textInput");
const listHTML = document.querySelector("#list");
const errorMessage = document.querySelector("#error-message");
const card = document.querySelector(".card")
let taskList = JSON.parse(localStorage.getItem('myTodoList')) || [];

render();

function createTask(mensage) {
    return {
        id: Date.now(),
        text: mensage,
        done: false
    }
}

function createItem(task){

    const taskHTML = document.createElement('li');
    const span = document.createElement('span');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    if(task.done) {
        taskHTML.classList.add("done");
    }
    taskHTML.classList.add("task")
    doneBtn.classList.add("done-btn");
    deleteBtn.classList.add("delete-btn")

    span.textContent = task.text;
    doneBtn.textContent = "✓";
    deleteBtn.textContent = "🗑";

    taskHTML.appendChild(span);
    taskHTML.appendChild(doneBtn);
    taskHTML.appendChild(deleteBtn);

    listHTML.appendChild(taskHTML);

    doneBtn.addEventListener('click', (e) => {
        task.done = !task.done;
        render();
    })

    deleteBtn.addEventListener('click', (e) => {
        taskList = taskList.filter(t => t.id !== task.id)
        render();
        return;
    })
}

function render() {

    listHTML.innerHTML = "";

    if (taskList.length === 0) {
        listHTML.innerHTML = '<p id = "noTaskMsg">Nenhuma tarefa por aqui!</p>';
    } else {
        taskList.forEach(createItem);
    }

    localStorage.setItem('myTodoList', JSON.stringify(taskList));
}

addButton.addEventListener('click', (e) => {

    const textValue = textInput.value.trim();
    console.log(textValue);

    if(textValue === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Digite uma tarefa para adicionar";
        return;
    }

    errorMessage.style.display = "none";

    const newTask = createTask(textValue);
    taskList.push(newTask);

    textInput.value = ""

    render();
})


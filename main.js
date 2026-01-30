const addButton = document.querySelector("#add-button");
const textInput = document.querySelector("#textInput");
const listHTML = document.querySelector("#list");
const errorMessage = document.querySelector("#error-message");
const card = document.querySelector(".card")
const noTaskMsg = document.querySelector("#no-tasks-msg")
let taskList = [];

function createTask(mensagem) {
    return {
        id: Date.now(),
        texto: mensagem,
        concluida: false
    }
}

function createItem(task){

    const taskHTML = document.createElement('li');
    const span = document.createElement('span');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    taskHTML.classList.add("task")
    doneBtn.classList.add("done-btn");
    deleteBtn.classList.add("delete-btn")

    span.textContent = task.texto;
    doneBtn.textContent = "✓";
    deleteBtn.textContent = "🗑";

    taskHTML.appendChild(span);
    taskHTML.appendChild(doneBtn);
    taskHTML.appendChild(deleteBtn);

    listHTML.appendChild(taskHTML);

    doneBtn.addEventListener('click', (e) => {
        taskHTML.classList.toggle("done");
    })
    deleteBtn.addEventListener('click', (e) => {

        taskList = taskList.filter(t => t.id !== task.id)

        render();
        return;
    })
}

function render() {

    listHTML.innerHTML = ""

    if (taskList.length === 0) {
        noTaskMsg.style.display = "block";
    } else {
        noTaskMsg.style.display = "None";
    }
    
    taskList.forEach(createItem);
}

addButton.addEventListener('click', (e) => {

    const textValue = textInput.value.trim();
    console.log(textValue);

    if(textValue === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Digite uma tarefa para adicionar";
        return;
    }

    noTaskMsg.style.display = "none";
    errorMessage.style.display = "none";

    const newTask = createTask(textValue);
    taskList.push(newTask);

    textInput.value = ""

    render();
})


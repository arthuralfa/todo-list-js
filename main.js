const addButton = document.querySelector("#add-button");
const textInput = document.querySelector("#textInput");
const list = document.querySelector("#list");
const errorMessage = document.querySelector("#error-message");
const card = document.querySelector(".card")
const noTaskMsg = document.querySelector("#no-tasks-msg")

function criarTarefa(mensagem) {
    return {
        id: Date.now(),
        texto: mensagem,
        concluida: false
    }
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


    const task = document.createElement('li');
    const span = document.createElement('span');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');


    task.classList.add("task")
    doneBtn.classList.add("done-btn");
    deleteBtn.classList.add("delete-btn")

    span.textContent = textValue;
    doneBtn.textContent = "✓";
    deleteBtn.textContent = "🗑";

    task.appendChild(span);
    task.appendChild(doneBtn);
    task.appendChild(deleteBtn);


    list.appendChild(task);
    textInput.value = ""

    doneBtn.addEventListener('click', (e) => {
        task.classList.toggle("done");
    })
    deleteBtn.addEventListener('click', (e) => {
        task.remove();
        return;
    })
})


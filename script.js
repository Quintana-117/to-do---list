function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskList = document.getElementById('task-list');
    var newTask = taskInput.value.trim();

    if (newTask) {
        var listItem = document.createElement('li');
        listItem.innerHTML = newTask + ' <button onclick="completeTask(this)">Completar</button> <button onclick="deleteTask(this)">Eliminar</button>';
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    var listItem = button.parentElement;
    listItem.classList.toggle('completed');
}

function deleteTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}

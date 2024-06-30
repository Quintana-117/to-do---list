const tar = document.getElementById("add");
tar.addEventListener("click", addTarea);

function addTarea() {
    let t = document.getElementById("taskInput").value;
    if (t != "") {
        let tarea = `<li><h3>${t}<button class="delete">BORRAR</button><button class="done">TERMINADO</button></h3></li>`;
        let tareaElement = document.createElement("div");
        tareaElement.innerHTML = tarea;
        document.getElementById("task").appendChild(tareaElement);

        let deleteButton = tareaElement.querySelector(".delete");
        deleteButton.addEventListener("click", delTarea);

        let doneButton = tareaElement.querySelector(".done");
        doneButton.addEventListener("click", done);

        document.getElementById("taskInput").value = ""; // Limpiar el input
    }
}

function delTarea(event) {
    let tareaElement = event.target.parentNode.parentNode;
    tareaElement.remove();
}

function done(event) {
    let tareaElement = event.target.parentNode.parentNode;
    tareaElement.classList.add("done");
}
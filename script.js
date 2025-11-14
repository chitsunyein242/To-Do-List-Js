const form = document.querySelector(".input-box");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit",addTask);

function addTask(e){
    e.preventDefault();
    let value = document.querySelector("#task").value;

    if(value){
        let li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `<span class="done">${value}</span><i class="bi bi-x remove"></i>`

        tasks.appendChild(li);
        document.querySelector("#task").value = "";
    }
}

tasks.addEventListener("click",removeTask);

function removeTask(e){
    let remTask = e.target;

    if(remTask.classList.contains("remove")){
        remTask.parentElement.remove();
    }
    else if(remTask.classList.contains("done")){
        remTask.parentElement.style.backgroundColor = "#666";
        remTask.style.textDecoration = "line-through";
    }
}
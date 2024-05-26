let taskInput = document.getElementById("task__input") 
let taskList = document.getElementById("tasks__list")
let addingButton = document.getElementById("tasks__add")

function submitTask() {
    if(taskInput.value.length > 0){
        taskList.innerHTML += `
        <div class="task">
          <div class="task__title">
            ${taskInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`
        taskInput.value = ""
    } 
}


addingButton.addEventListener("click", (e) => {
    submitTask()
    e.preventDefault()
})

taskInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        submitTask()
    } 
})


taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task__remove")) {
        e.target.closest(".task").remove()
    }
})


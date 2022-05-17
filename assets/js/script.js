// assign the button element objection representation to a variable
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to dynamically create the task item 
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};
// event listener that uses createTaskHandler as a callback function
buttonEl.addEventListener("click", createTaskHandler);
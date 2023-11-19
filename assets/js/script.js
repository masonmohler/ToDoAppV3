function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  var taskList = document.getElementById("taskList");
  var taskItem = document.createElement("li");
  taskItem.className = "taskItem";

  var taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;
  taskTextSpan.className = "taskText";

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editButton";
  editButton.onclick = function () {
    var newText = prompt("Edit the task:", taskTextSpan.textContent);
    if (newText !== null) {
      taskTextSpan.textContent = newText;
    }
  };

  var completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.className = "completeCheckbox";
  completeCheckbox.onclick = function () {
    if (completeCheckbox.checked) {
      taskTextSpan.classList.add("completed");
    } else {
      taskTextSpan.classList.remove("completed");
    }
  };

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.onclick = function () {
    taskList.removeChild(taskItem);
  };

  taskItem.appendChild(completeCheckbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  // Clear the input field after adding the task
  taskInput.value = "";
}

const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.className = "delete";
deleteBtn.onclick = () => {
      openModal({
        title: "Delete Task?",
        msg: "Are you sure you want to delete this task?",
        confirm: () => {
          const taskIndex = tasks.findIndex(t => t.id === task.id);
          if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
            saveTodos();
            renderTasks();
          }
        },
        needsInput: false
      });
    };
actions.appendChild(checkbox);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskText);
    taskItem.appendChild(actions);
    taskList.appendChild(taskItem);
  });
function filterTasks(type) {
  filter = type;
  renderTasks();
}
function deleteDoneTasks() {
  tasks = tasks.filter(t => !t.done);
  saveTodos();
  renderTasks();
}
function handleAddTask() {
  const input = document.getElementById("taskInput");
  const msg = document.getElementById("validationMsg");
  const text = input.value.trim();

  if (!isValidTask(text)) {
    msg.textContent = "Task must be ≥ 5 characters and not start with a number.";
    msg.classList.remove("hidden");
    return;
  }
  msg.classList.add("hidden");

  tasks.push({
    id: Date.now(),
    text,
    done: false
  });

  saveTodos();
  input.value = "";
  renderTasks();
}



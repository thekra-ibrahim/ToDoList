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


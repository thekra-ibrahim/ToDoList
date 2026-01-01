let tasks = [];
let filter = 'all';

function loadTodos() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  } else {
    tasks = [];
  }
}

function saveTodos() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function isValidTask(name) {
  return name.trim().length >= 5 && isNaN(parseInt(name.trim()[0], 10));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.done;
    if (filter === 'todo') return !task.done;
  });


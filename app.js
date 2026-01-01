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

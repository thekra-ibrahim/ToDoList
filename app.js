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

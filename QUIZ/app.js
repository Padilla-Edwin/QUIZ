document.getElementById('formTask').addEventListener('submit', saveTask);
var presupuesto=0

function saveTask(e) {
  let title = document.getElementById('title').value;
  let fecha = document.getElementById('fecha').value;
  let description = document.getElementById('description').value;
  console.log(description)
  let INGRESOS = document.getElementById('INGRESOS').value;
  let EGRESOS = document.getElementById('EGRESOS').value;
  

  let task = {
    title,
    description,
    fecha,
    INGRESOS,
    EGRESOS,
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let fecha = tasks[i].fecha;
    let description = tasks[i].description;
    let INGRESOS = tasks[i].INGRESOS;
    let EGRESOS = task[i].EGRESOS;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          ${title} - ${description} - ${fecha} - ${INGRESOS} - ${EGRESOS}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-outline-primary ml-5">COMPLETA</a>
          </p>
        </div>
      </div>`;
  }
}

const bdark = document.querySelector('#bdark');
const body = document.querySelector('body')
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
});

getTasks();

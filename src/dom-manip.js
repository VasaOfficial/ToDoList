import { createTodo } from "./create-todo.js";

// adding form 
function showForm() {
  document.querySelector(".todo-input").style.display = "";
}

export const addProject = () => {
  const addBtn = document.querySelector('.add-project')
  addBtn.addEventListener('click', showForm)
}

// clearing form 
export const clearForm = () => {
  const resetBtn = document.querySelector('.reset')
  const form = document.querySelector('.form')
  resetBtn.addEventListener('click', function() {
    form.reset();
  })
}

// submit button
export const submitBtn = () => {
  const submit = document.querySelector('.submit')
  submit.addEventListener('click', function() {
    createTodo();
  })
}

// inbox screen
export const showInbox = () => {
  const inboxBtn = document.querySelector('.inbox')
  const projectScreen = document.querySelector('.project-screen')
  inboxBtn.addEventListener('click', function() {
    projectScreen.style.display = 'grid';
  })
}

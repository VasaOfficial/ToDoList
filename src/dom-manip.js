// adding form 
const showForm = () => {
  document.querySelector(".todo-input").style.display = "";
}

export const addProject = () => {
  const addBtn = document.querySelector('.add-project')
  addBtn.addEventListener('click', showForm)
}

//clearing form 
export const clearForm = () => {
  const resetBtn = document.querySelector('.reset')
  const form = document.querySelector('.form')
  resetBtn.addEventListener('click', function() {
    form.reset();
  })
}
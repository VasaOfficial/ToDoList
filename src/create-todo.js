import { parseISO, startOfToday } from "date-fns"
import { clearForm } from "./dom-manip.js";

export const createTodo = () => {

  // Storing form inputs 
  localStorage.setItem("title", document.querySelector(".title").value);
  localStorage.setItem("description", document.querySelector(".description").value);
  localStorage.setItem("date", document.querySelector(".date").value);

  // Getting form inputs
  const getTitle = localStorage.getItem('title');
  const getDescription = localStorage.getItem('description')
  const getDate = localStorage.getItem('date')

  // Checking text requarments
  if (getTitle == '' || getDescription == '') {
    alert('Please fill in title and discription fields!')
    return;
  }
  
  // Checking date 
  if (parseISO(getDate) < startOfToday()) {
    alert('You entered wrong date!')
    return;
  }

  // factory function that takes 3 form inputs 
  function todoObj(title, description, date) {
    return {
      title: title,
      description: description,
      date: date,
    };
  };  

  // Create the todo object using the factory function
  const todo = todoObj(getTitle, getDescription, getDate);
  

  // 
  function createCard() {
    const projectScreen = document.querySelector('.project-screen');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.description}</p>
      <p>${todo.date}</p>
    `;
    projectScreen.append(card);
  }
  createCard();
  clearForm();
}

import { defaultPage } from "./default-page.js";
import { createTodo } from "./create-todo.js";
import { addProject, clearForm } from "./dom-manip.js";
import './style.css';

// first entering page
defaultPage()

// click events 
let clickEvents = (function() {

  // event for showing form
  addProject();

  // reset form event 
  clearForm();
})();
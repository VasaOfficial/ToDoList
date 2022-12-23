import { defaultPage } from "./default-page.js";
import { addProject, clearForm, removeButton, showInbox, submitBtn } from "./dom-manip.js";
import './style.css';

// first entering page
defaultPage();

// click events 
let clickEvents = (function() {

  // event for showing form
  addProject();

  // reset form event 
  clearForm();

  // submit form event
  submitBtn();
  
  // event for showing inbox
  showInbox();
})();

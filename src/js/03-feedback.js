var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(setLocalValue, 500));
form.addEventListener('submit', submitValues);

function setLocalValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function getFormsValue(form) {
  if (localStorage.getItem(LOCAL_KEY)) {
    formData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
}
getFormsValue(form);

function submitValues(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
}

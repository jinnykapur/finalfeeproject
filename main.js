let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => {
  e.preventDefault();
  // Code to handle button click event (e.g., form submission)
  // Save data to local storage if necessary
};

let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");

  // Clear any previously saved form data from local storage
  localStorage.removeItem("form_data");
};

let saveFormData = () => {
  // Get the form data and save it to local storage
  let formData = {
    // Extract the form data and store it in this object
    // Example:
    username: document.querySelector("#username").value,
    password: document.querySelector("#password").value
  };

  localStorage.setItem("form_data", JSON.stringify(formData));
};

let loadFormData = () => {
  // Load the form data from local storage and populate the form fields
  let savedFormData = localStorage.getItem("form_data");

  if (savedFormData) {
    savedFormData = JSON.parse(savedFormData);
    // Populate the form fields with the saved data
    // Example:
    document.querySelector("#username").value = savedFormData.username;
    document.querySelector("#password").value = savedFormData.password;
  }
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);

  // Load the form data when the page is loaded
  loadFormData();
};

window.addEventListener("load", mainF);

// Save the form data when the page is unloaded or refreshed
window.addEventListener("beforeunload", saveFormData);

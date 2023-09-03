var usernameField = document.querySelector("input[name='username']");
var passwordField = document.querySelector("input[name='password']");
const submitButton = document.querySelector("#loginbtn");
const loginFastBtn = document.querySelector("#button_1");

function set() {
  localStorage.setItem("username", usernameField.value.split("@")[0]);
  localStorage.setItem("password", passwordField.value);
}

function filldet() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  fillLoginForm(username, password);
}

function fillLoginForm(username, password) {
  var agreeCheckbox = document.querySelector("#agreepolicy");

  if (usernameField && passwordField && submitButton) {
    usernameField.value = username;
    passwordField.value = password;
    agreeCheckbox.checked = true;
    submitButton.disabled = false;
    submitButton.click();
  }
}

// window.addEventListener("load", filldet);

function runExtension() {
  if (submitButton) {
    const button = document.createElement("button");
    button.innerText = "Login Fast";
    button.id = "button_1";
    button.className = "btn btn-primary btn-sm";
    button.style.marginLeft = "10px";
    const element = document.querySelector(".text-center.mt-2");
    element.appendChild(button);
    button.addEventListener("click", function () {
      filldet();
    });
  }
}

runExtension();

submitButton.addEventListener("click", set);

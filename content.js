var usernameField = document.querySelector("input[name='username']");
var passwordField = document.querySelector("input[name='password']");
const submitButton = document.querySelector("#loginbtn");

function set() {
    const a = localStorage.getItem('username');
    const b = localStorage.getItem('password');
  if(a!=usernameField.value && b!=passwordField.value) {
    localStorage.setItem("username", usernameField.value.split("@")[0]);
    localStorage.setItem("password", passwordField.value);
    filldet()
  }
}

function filldet(){
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    fillLoginForm(username,password)
}


submitButton.addEventListener("click", set);

function fillLoginForm(username , password) {
  var agreeCheckbox = document.querySelector("#agreepolicy");

  if (usernameField && passwordField && submitButton) {
    usernameField.value = username;
    passwordField.value = password;
    agreeCheckbox.checked = true;
    submitButton.disabled = false;
    submitButton.click();
  }
}



window.addEventListener("load", filldet);

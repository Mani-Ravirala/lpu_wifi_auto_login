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

function advTelegram() {
  // Create the banner container
  const advdiv1 = document.createElement("div");
  advdiv1.className = "banner-container";

  // Create the banner text
  const bannerText = document.createElement("div");
  bannerText.className = "banner-text";

  // Create the heading and paragraph elements
  const heading = document.createElement("h2");
  // heading.textContent = "Join our Telegram channel for amazing deals!";
  heading.innerHTML = "Join Amazeondeals on Telegram for amazing deals!"; // Modify this line to add the name "Amazeondeals"

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Get exclusive discounts and offers on a wide range of products.";

  // Append the heading and paragraph elements to the banner text
  bannerText.appendChild(heading);
  bannerText.appendChild(paragraph);

  // Create the banner button
  const bannerButton = document.createElement("a");
  bannerButton.href = "https://telegram.me/amazeondeals";
  bannerButton.target = "_blank";
  bannerButton.className = "banner-button";
  bannerButton.textContent = "Join Now";

  // Append the banner text and button to the banner container
  advdiv1.appendChild(bannerText);
  advdiv1.appendChild(bannerButton);

  // Find the element to append the banner container to
  const element = document.querySelector(".text-center.pt-4.pb-3");

  // Append the banner container to the element
  element.appendChild(advdiv1);
}

advTelegram();
runExtension();

submitButton.addEventListener("click", set);

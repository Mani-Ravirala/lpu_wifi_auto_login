document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  const extensionTitle = document.getElementById("extensionTitle");
  const extensionCheckbox = document.getElementById("extensionCheckbox");

  extensionCheckbox.addEventListener("change", function () {
    if (this.checked) {
      extensionTitle.textContent = "Stop Extension";
    } else {
      extensionTitle.textContent = "Run Extension";
    }
  });
});

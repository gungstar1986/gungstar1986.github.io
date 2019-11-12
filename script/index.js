const portfolioButtons = document.querySelectorAll(".portfolio-button");
const headerButtons = document.querySelectorAll(".button-menu");
const footerButtons = document.querySelectorAll(".footers-divs");
const inputForm = document.querySelectorAll(".form-container-textarea input");
const textareaForm = document.querySelectorAll(
  ".form-container-textarea textarea"
);

portfolioButtons.forEach(element => {
  element.onmouseenter = function() {
    this.style.background = "#ffffff";
  };
  element.onmouseleave = function() {
    this.style.background = "#ebc985";
  };
});
headerButtons.forEach(element => {
  element.onmouseenter = function() {
    this.style.background = "#643a79";
  };
  element.onmouseleave = function() {
    this.style.background = "none";
  };
});
footerButtons.forEach(element => {
  element.onmouseenter = function() {
    this.style.color = "#30bae7";
  };
  element.onmouseleave = function() {
    this.style.color = "#ffffff";
  };
});

inputForm.forEach(element => {
  element.style.color = "#ffffff";
});
textareaForm.forEach(element => {
  element.style.color = "#ffffff";
});

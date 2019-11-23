import scrrolledTo from "./scrolledTo.js"


document.onclick = function(e) {
  if (e.target === document.querySelector(".modalParent")) {
    document.querySelector(".modalParent").style.display = "none";
  }
  if (e.target === document.querySelector(".arrows-down-slides img")) {
    scrrolledTo();
  }
};


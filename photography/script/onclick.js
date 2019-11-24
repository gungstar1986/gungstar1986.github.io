import scrrolledTo from "./scrolledTo.js";
import getButtons from "./menuButtons.js"
import bodyElements from "./elements.js"  

const bodyDivs = bodyElements()
const buttons = getButtons()
console.log(bodyDivs)

document.onclick = function(e) {
    if (e.target === buttons.clients) {
      const clients = document.querySelector(".happy-clients-container");
      console.log(clients.getBoundingClientRect().y)
      
    }
    if (e.target === document.querySelector(".reject-button")) {
        document.querySelector(".modalParent").style.display = "none"
    }
  if (e.target === document.querySelector(".arrows-down-slides img") || e.target === buttons.about) {
    document.querySelector(".arrows-down-slides img").style.transform = "rotate(180deg)";
    document.querySelector(".arrows-down-slides img").style.transition = "0.5s ease";
    document.onwheel = function(e) {
      if (e) return (document.querySelector( ".arrows-down-slides img" ).style.transform = "rotate(360deg)");
    };
    // Scroll To
    scrrolledTo();
  }
};



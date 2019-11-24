import scrrolledTo from "./scrolledTo.js";
import getButtons from "./menuButtons.js"
import bodyElements from "./elements.js"  
const bodyDivs = bodyElements()
const buttons = getButtons()
console.log(buttons.portfolio, bodyDivs)

document.onclick = function(e) {

  if (e.target === buttons.clients) scrrolledTo( bodyDivs.clients.getBoundingClientRect().y );
  if (e.target === buttons.about) scrrolledTo( bodyDivs.about.getBoundingClientRect().y, 30 );
  if (e.target === buttons.portfolio) scrrolledTo( bodyDivs.portfolio.getBoundingClientRect().y, 60 );
  if (e.target === buttons.blog) scrrolledTo( bodyDivs.blog.getBoundingClientRect().y , -30);
  if (e.target === document.querySelector(".reject-button")) document.querySelector(".modalParent").style.display = "none"
  if (e.target === document.querySelector(".arrows-down-slides img")) {
    document.querySelector(".arrows-down-slides img").style.transform = "rotate(180deg)";
    document.querySelector(".arrows-down-slides img").style.transition = "0.5s ease";
    document.onwheel = function(e) {
      if (e) return (document.querySelector( ".arrows-down-slides img" ).style.transform = "rotate(360deg)");
    };
    scrrolledTo(document.documentElement.clientHeight);
  }
};



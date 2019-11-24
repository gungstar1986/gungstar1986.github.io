import scrrolledTo from "./scrolledTo.js";
import getButtons from "./menuButtons.js"
import bodyElements from "./elements.js"  
import chips from "./chips.js"  
import srcrollToTop from "./scrollToTop.js"
import inputs from "./input.js"
import removeModal from "./removeModal.js";



const bodyDivs = bodyElements()
const buttons = getButtons()


// елемент.getBoundingClientRect() => возвращает координаты в контексте окна
document.onclick = function(e) {
  if (e.target === document.querySelector(".myself-button")) chips("Тут пока ничего нет");
  if (e.target === document.querySelector(".accept-button")) removeModal ()
  if (e.target === document.querySelector(".reject-button")) removeModal ();
  if (e.target === document.querySelector(".header-button-place")) chips("Тут пока ничего нет");
  if (e.target === document.querySelector(".photos-button")) chips("Тут пока ничего нет");
  if (e.target === document.querySelector(".portfolio-text-3 b")) chips("Тут пока ничего нет");
  if (e.target === document.querySelector(".button-up img")) srcrollToTop(0)
  if (e.target === buttons.clients) scrrolledTo( bodyDivs.clients.getBoundingClientRect().y );
  if (e.target === buttons.about) scrrolledTo( bodyDivs.about.getBoundingClientRect().y, 30 );
  if (e.target === buttons.portfolio) scrrolledTo( bodyDivs.portfolio.getBoundingClientRect().y, 60 );
  if (e.target === buttons.blog) scrrolledTo( bodyDivs.blog.getBoundingClientRect().y , -30);
  if (e.target === document.querySelector("#form-button")) inputs ();
  if (e.target === document.querySelector(".arrows-down-slides img")) {
    document.querySelector(".arrows-down-slides img").style.transform = "rotate(180deg)";
    document.querySelector(".arrows-down-slides img").style.transition = "0.5s ease";
    document.onwheel = function(e) {
      if (e) return (document.querySelector( ".arrows-down-slides img" ).style.transform = "rotate(360deg)");
    };
    scrrolledTo(document.documentElement.clientHeight);
  }
  document.querySelectorAll('.block-text-4').forEach(element => {
    element.onclick = function() {
      chips("Тут пока ничего нет")
    } 
  });
};



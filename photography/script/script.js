import scrrolledTo from "./scrolledTo.js";



document.onclick = function(e) {
    if (e.target === document.querySelector(".reject-button")) {
        document.querySelector(".modalParent").style.display = "none"
    }
  // Scroll down
  if (e.target === document.querySelector(".arrows-down-slides img")) {
    document.querySelector(".arrows-down-slides img").style.transform =
      "rotate(180deg)";
    document.querySelector(".arrows-down-slides img").style.transition =
      "0.5s ease";
    document.onwheel = function(e) {
      if (e)
        return (document.querySelector(
          ".arrows-down-slides img"
        ).style.transform = "rotate(360deg)");
    };
    scrrolledTo();
  }
};

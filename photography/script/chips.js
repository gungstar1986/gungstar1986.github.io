function chips(message, backgroung, timeOut = 3000) {
  let chips = document.createElement("div");
  chips.classList.add("chips");
  chips.style.background = backgroung;
  // console.log(chips);
  chips.innerHTML = message;
  //document.querySelector('body').appendChild(chips);
  addChips(chips);
  setTimeout(function() {
    deleteChips(chips);
  }, timeOut);
}

function deleteChips(chips) {
  chips.remove();
  let allChips = document.querySelectorAll(".chips-field .chips");
  if (allChips.length == 0) document.querySelector(".chips-field").remove();
}

function addChips(chips) {
  let chipsField = document.querySelector(".chips-field");
  if (chipsField) {
    chipsField.appendChild(chips);
  } else {
    let chipsField = document.createElement("div");
    chipsField.classList.add("chips-field");
    document.querySelector("body").appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}

let backgroung;
document.querySelector("#random").onclick = function() {
  randomColor = [
    (a = Math.floor(1 + Math.random() * (255 - 1))),
    (b = Math.floor(1 + Math.random() * (255 - 1))),
    (c = Math.floor(1 + Math.random() * (255 - 1)))
  ];
  for (let i = 0; i < randomColor.length; i++)
    backgroung = `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`;
  console.log(backgroung);
};

document.querySelector("#manual").onclick = function() {
  backgroung = document.querySelector("#color").value;
};

document.querySelector("#message").onclick = function() {
  console.log(backgroung);
  if (backgroung == undefined) {
    backgroung = document.querySelector("#color").value;
  }
  chips("Some notifications", backgroung, 2000);
};

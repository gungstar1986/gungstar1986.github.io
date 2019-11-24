import modalWindow from "./modal.js";

export default function windowModal(text) {
  const message = text;
  const newModal = modalWindow();
  let countW = 0;
  let countH = 0;
  function setWidth() {
    if (newModal.style.width === "500px") {
      clearInterval(intervalWidth);
    } else {
      countW += 10;
      newModal.style.width = countW + "px";
    }
  }
  const intervalWidth = setInterval(() => setWidth(), 1);

  setTimeout(() => {
    function setHeight() {
      if (newModal.style.height === "400px") {
        document.querySelector(".accept-button").style.display = "block";
        document.querySelector(".text-zone").style.display = "block";
        document.querySelector(".text-zone").textContent = message;
        clearInterval(intervalHidth);
      } else {
        countH += 5;
        newModal.style.height = countH + "px";
      }
    }
    const intervalHidth = setInterval(() => setHeight(), 1);
  }, 400);
}

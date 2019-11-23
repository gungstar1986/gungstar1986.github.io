import modalWindow from "./modal.js";
if (document.documentElement.clientWidth < 1366) {
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
    function setHeight( text ) {
      if (newModal.style.height === "400px") {
        // newModal.innerHTML = `Этот сайт работает с разрешениями  экарана 1920*1080px  1680*1050px 1366*768px. Разрешения ниже не поддерживаются.
        //    Ваше разрешение эрана ${document.documentElement.clientWidth}px`;
        // newModal.textContent = text
        document.querySelector(".accept-button").style.transition = "1s ease"
        document.querySelector(".accept-button").style.display = "block"
        
        clearInterval(intervalHidth);
      } else {
        countH += 5;
        newModal.style.height = countH + "px";
      }
    }
    const intervalHidth = setInterval(() => setHeight(), 1);
  }, 400);
}

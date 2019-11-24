import windowModal from "./greeting.js";

window.onload = function () {
    const screenRezol = document.documentElement.clientWidth;
    if (screenRezol < 1366) {
        windowModal(`Данный сайт находится в процессе разработки. Адаптация под мобильные платформы не выполнялась. Если Вы видите данное сообщение, значит разрешение Вашего экрана меншье чем 1366*768px. Для комфортной работы измените рабочую область с помощью кнопок CTRL + Mouse Wheel. Разрешение Вашего экрана ${screenRezol}px`);
    } else windowModal (`Данный сайт находится в процессе разработки. Адаптация под мобильные платформы не выполнялась. Функционал постепенно растет. Если сейчас что-то не работает, приходите позже - возможно, все уже будет работать. Логика сайта простроена на модульной системе скриптов.`)
}


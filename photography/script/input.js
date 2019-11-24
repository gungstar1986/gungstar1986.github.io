import windowModal from "./greeting.js";
import chips from "./chips.js";

export default function inputs () {
    const name = document.querySelector(".text-input").value;
    const email = document.querySelector(".email-input").value;
    const message = document.querySelector("#textarea").value;
    if (name === '' || email === '' || message === "") chips("Заполните все поля");
    else windowModal(`Ваше имя: ${name}, Ваш email: ${email}, Ваше сообщение: ${message}`)
}


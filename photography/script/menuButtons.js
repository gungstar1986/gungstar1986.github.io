export default function getButtons () {
    const menuButtons = {};
    document.querySelectorAll(".site-header-buttons").forEach(element => {
        menuButtons[(element.textContent.toLowerCase())] = element
    });
    return menuButtons
}

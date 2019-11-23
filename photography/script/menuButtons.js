export default function getButtons () {
    const allButtons = {}
    const menuButtons = {};
    document.querySelectorAll(".site-header-buttons").forEach(element => {
        menuButtons[(element.textContent.toLowerCase())] = element
    });
 
    console.log(menuButtons)
}
getButtons ()
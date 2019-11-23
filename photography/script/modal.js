export default function modalWindow () {
    // Create modalParent
    const modalParent = document.createElement("div");
    modalParent.classList.add("modalParent");
    const modal = document.querySelector("body").appendChild(modalParent);
    
    // Create modalChild
    const modalChild = document.createElement("div");
    modalChild.classList.add("modal");
    const newModal = modalParent.appendChild(modalChild);
    return newModal
}
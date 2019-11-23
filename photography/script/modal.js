export default function modalWindow () {
    // Create modalParent
    const modalParent = document.createElement("div");
    modalParent.classList.add("modalParent");
    const modal = document.querySelector("body").appendChild(modalParent);
    
    // Create modalChild
    const modalChild = document.createElement("div");
    modalChild.classList.add("modal");
    const newModal = modalParent.appendChild(modalChild);
    
    //Create modalButtons
    const acceptButton = document.createElement("div");
    acceptButton.classList.add("accept-button");
    newModal.appendChild(acceptButton);
    newModal.appendChild(acceptButton).textContent = "Accept"

    //Create reject button
    const rejectButton = document.createElement("div");
    rejectButton.classList.add("reject-button");
    newModal.appendChild(rejectButton);
    
    return newModal
}
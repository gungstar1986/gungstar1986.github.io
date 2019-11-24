export default function modalWindow () {

    // Create modalParent
    const modalParent = document.createElement("div");
    modalParent.classList.add("modalParent");
    const modal = document.querySelector("body").appendChild(modalParent);
    
    // Create modalChild
    const modalChild = document.createElement("div");
    modalChild.classList.add("modal");
    const newModal = modalParent.appendChild(modalChild);
    
    //Create acceptButton
    const acceptButton = document.createElement("div");
    acceptButton.classList.add("accept-button");
    newModal.appendChild(acceptButton);
    newModal.appendChild(acceptButton).textContent = "Accept"

    //Create reject button
    const rejectButton = document.createElement("div");
    rejectButton.classList.add("reject-button");
    newModal.appendChild(rejectButton);
    
    //Create textZone
    const textZone = document.createElement("div");
    textZone.classList.add("text-zone");
    newModal.appendChild(textZone)

    return newModal
}
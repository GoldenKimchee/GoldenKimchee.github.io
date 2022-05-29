"use strict"

const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");
let shown = false;

if (shown == false) {
  modal.showModal();
}

closeModal.addEventListener("click", () => {
  shown = true;
  modal.close();
})

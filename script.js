// Selectors

const VIEW_MODAL_BTN = document.querySelector(".view_modal_button");
const MODAL = document.querySelector(".modal");

const CLOSE_BTN = document.querySelector(".close_button");

// Events

VIEW_MODAL_BTN.addEventListener("click", () => {
  MODAL.classList.toggle("view");
});

CLOSE_BTN.addEventListener("click", () => {
  MODAL.classList.remove("view");
});

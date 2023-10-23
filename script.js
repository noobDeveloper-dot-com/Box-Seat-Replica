// Selectors

const VIEW_MODAL_BTN = document.querySelector(".view_modal_button");
const MODAL_WRAPPER = document.querySelector(".modal_wrapper");

const CLOSE_BTN = document.querySelector(".close_button");

// Events

VIEW_MODAL_BTN.addEventListener("click", () => {
  MODAL_WRAPPER.classList.toggle("view");
});

CLOSE_BTN.addEventListener("click", () => {
  MODAL_WRAPPER.classList.remove("view");
});

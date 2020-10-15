const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-btn");
const modalNameInput = document.querySelector(".modal-name-input");
const modalEmailInput = document.querySelector(".modal-email");
const loginForm = document.querySelector(".login-form");
const textAreaInput = document.querySelector(".modal-text-area");
const sliderDot_1 = document.querySelector(".sd-1");
const sliderDot_2 = document.querySelector(".sd-2");
const sliderDot_3 = document.querySelector(".sd-3");

let isStorageSupport = true;
let storage = "";
let storageEmail = "";

try {
  storage = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storage) {
    modalNameInput.value = storage;
    if (storageEmail) {
      modalEmailInput.value = storageEmail;
      textAreaInput.focus();
    } else {
      modalEmailInput.focus();
    }
  } else {
    modalNameInput.focus();
  }
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!modalNameInput.value || !modalEmailInput.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("login", modalNameInput.value);
    localStorage.setItem("email", modalEmailInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }


});

sliderDot_1.addEventListener("click",function(evt) {
  evt.preventDefault();
  sliderDot_2.classList.remove("active-dot");
  sliderDot_3.classList.remove("active-dot");
  sliderDot_1.classList.add("active-dot");
});

sliderDot_2.addEventListener("click",function(evt) {
  evt.preventDefault();
  sliderDot_1.classList.remove("active-dot");
  sliderDot_3.classList.remove("active-dot");
  sliderDot_2.classList.add("active-dot");
});

sliderDot_3.addEventListener("click",function(evt) {
  evt.preventDefault();
  sliderDot_2.classList.remove("active-dot");
  sliderDot_1.classList.remove("active-dot");
  sliderDot_3.classList.add("active-dot");
});

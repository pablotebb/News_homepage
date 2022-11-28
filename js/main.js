const btnHamburger = document.querySelector(".header-web__hamburger-image");
const subMenu = document.querySelector(".header-web__modal-menu");
const wrapper = document.querySelector(".back-wrapper");
let windowWidth = window.innerWidth;
const article = document.querySelectorAll(".new-article");

article[2].classList.add("no-border");

btnHamburger.addEventListener("click", () => {
  wrapper.classList.toggle("show-back-wrapper");
  subMenu.classList.toggle("display-modal-menu-pc");
  btnHamburger.classList.toggle("header-web__close-image");
});

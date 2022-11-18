const btnHamburger = document.querySelector(".header-web__hamburger");
const btnClose = document.querySelector(".header-web__close");
const subMenu = document.querySelector(".header-web__modal-menu");
const wrapper = document.querySelector(".wrapper-header");
let windowWidth = window.innerWidth;

btnClose.style.display = "none";

btnHamburger.addEventListener("click", () => {
  wrapper.classList.add("display-background");
  subMenu.style.display = "flex";
  btnHamburger.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("display-background");
  subMenu.style.display = "none";
  btnHamburger.style.display = "block";
  btnClose.style.display = "none";
});

window.onresize = () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  console.log("win:", windowWidth);
  if (
    (windowWidth == 800 && windowHeight == 480) ||
    (windowWidth == 960 && windowHeight == 600) ||
    (windowWidth == 1024 && windowHeight == 600) ||
    (windowWidth == 1024 && windowHeight == 768) ||
    (windowWidth == 1280 && windowHeight == 800) ||
    (windowWidth == 1366 && windowHeight == 1024) ||
    (windowWidth == 1440 && windowHeight == 1024) ||
    (windowWidth == 1366 && windowHeight == 768) ||
    (windowWidth == 1440 && windowHeight == 900) ||
    (windowWidth == 1600 && windowHeight == 900) ||
    (windowWidth == 1680 && windowHeight == 1050) ||
    (windowWidth == 1920 && windowHeight == 1080) ||
    (windowWidth == 1920 && windowHeight == 1200) ||
    (windowWidth == 1280 && windowHeight == 720) ||
    (windowWidth == 2048 && windowHeight == 1080) ||
    (windowWidth == 3840 && windowHeight == 2160) ||
    (windowWidth == 2160 && windowHeight == 3840) ||
    (windowWidth == 7680 && windowHeight == 2160) ||
    (windowWidth == 2160 && windowHeight == 7680)
  ) {
    console.log("dentro");
    btnHamburger.style.display = "none";
    wrapper.classList.remove("display-background");
    subMenu.style.display = "none";
    btnClose.style.display = "none";
    windowWidth = 900;
  } else {
    btnHamburger.style.display = "block";
    MenuFeatures.classList.remove("display-flex");
    deleteArrows(false, true);
    MenuCompany.classList.remove("display-flex");
    deleteArrows(true, false);
  }
};

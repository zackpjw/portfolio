// ~GLOBAL JS
// SET VISIBILITY OF NAVBAR TO VISIBLE AFTER ANIMATION ENDS
function finalStateNavbar() {
  let navbar = document.querySelector(".nav-bar");
  navbar.addEventListener("animationend", function () {
    navbar.style.opacity = "1";
  });
}
finalStateNavbar();

// NAVBAR MENU TOGGLER
const menuBtn = document.querySelector(".nav-bar__toggler");
const navbarCollapse = document.querySelector(".nav__menu");
const navlink = document.querySelectorAll(".nav__link");
var navlinkFirst = navlink[0];
var navlinkSecond = navlink[1];
const collapsed = document.querySelector(".collapsed");
const topBar = document.querySelector(".top-bar");
const midBar = document.querySelector(".middle-bar");
const btmBar = document.querySelector(".bottom-bar");

let menuOpen = false;
menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    navbarCollapse.classList.remove("reverse");
    navbarCollapse.classList.add("forward");
    navlinkFirst.classList.add("active");
    navlinkSecond.classList.add("active");
    topBar.classList.add("collapsed");
    midBar.classList.add("collapsed");
    btmBar.classList.add("collapsed");
    menuOpen = true;
  } else {
    navbarCollapse.classList.add("reverse");
    navbarCollapse.classList.remove("forward");
    navlinkFirst.classList.remove("active");
    navlinkSecond.classList.remove("active");
    topBar.classList.remove("collapsed");
    midBar.classList.remove("collapsed");
    btmBar.classList.remove("collapsed");
    menuOpen = false;
  }
});

// function entranceAnimation() {
//   if (!loadingAnimationEnd == true) {
//     gsap.to(".loader", { duration: 1, y: "-100vh", ease: "power3.out" });
//   }
// }
// entranceAnimation();

// gsap.to(".loader", { duration: 1, y: "0h", ease: "expo.out" });

// TO MAKE THE HEROWRAP & DESCRIPTIONS SPLIT
// const mobileViewport = document.querySelector(".is__mobile");
// const laptopViewport = document.querySelector(".is__laptop");

// var laptopScreenWidth = window.matchMedia("(min-width: 994px)");

// function wrapRow() {
//   if (laptopScreenWidth.matches) {
//     laptopViewport.style.display = "block";
//     mobileViewport.style.display = "none";
//     return true;
//   } else {
//     laptopViewport.style.display = "none";
//     mobileViewport.style.display = "block";
//     return false;
//   }
// }

// wrapRow();

// // END

// A) GLOBAL
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

// B) HOME
// TEXT RANDOMIZER
function textChanger() {
  const textChanger = document.querySelector(".home__textchanger");
  var words = ["engineer", "daydreamer", "developer", "magician", "scientist"];
  var i = 0;

  setInterval(function () {
    textChanger.innerHTML = words[(i = (i + 1) % words.length)];
  }, 1000);
}

// C) ABOUT
// VARIABLES
var topTextAll = document.querySelectorAll(".top-text");
var btmTextAll = document.querySelectorAll(".btm-text");
var topTextMobile = topTextAll[0];
var btmTextMobile = btmTextAll[0];
var topTextLaptop = topTextAll[1];
var btmTextLaptop = btmTextAll[1];

// EMPTY SPAN i GENERATOR
function topSpanGenerator(arrNew) {
  for (i = 0; i < arrNew.length; i++) {
    var span = document.createElement("span"); //To create <span> tags
    span.setAttribute("class", "letter"); //To set class attribute
    topTextMobile.appendChild(span); //To put the arrays under .top-text MOBILE class
    span.innerHTML = arrNew[i]; //To set text for span
  }

  for (i = 0; i < arrNew.length; i++) {
    var span = document.createElement("span"); //To create <span> tags
    span.setAttribute("class", "letter"); //To set class attribute
    topTextLaptop.appendChild(span); //To put the arrays under .top-text LAPTOP class
    span.innerHTML = arrNew[i]; //To set text for span
  }
}

function btmSpanGenerator(arrNew) {
  for (i = 0; i < arrNew.length; i++) {
    var span = document.createElement("span"); //To create <span> tags
    span.setAttribute("class", "letter"); //To set class attribute
    btmTextMobile.appendChild(span); //To put the arrays under .btm-text MOBILE class
    span.innerHTML = arrNew[i]; //To set text for span
  }

  for (i = 0; i < arrNew.length; i++) {
    var span = document.createElement("span"); //To create <span> tags
    span.setAttribute("class", "letter"); //To set class attribute
    btmTextLaptop.appendChild(span); //To put the arrays under .btm-text LAPTOP class
    span.innerHTML = arrNew[i]; //To set text for span
  }
}

// AFTER ANIMATION END, REMOVE SPAN i
function removeArrayItems() {
  topTextMobile.addEventListener("animationend", function (e) {
    setTimeout(function () {
      e.target.remove();
    }, 0.5);
  });

  btmTextMobile.addEventListener("animationend", function (e) {
    setTimeout(function () {
      e.target.remove();
    }, 0.5);
  });

  topTextLaptop.addEventListener("animationend", function (e) {
    setTimeout(function () {
      e.target.remove();
    }, 0.5);
  });

  btmTextLaptop.addEventListener("animationend", function (e) {
    setTimeout(function () {
      e.target.remove();
    }, 0.5);
  });
}

// TOP TEXT GENERATOR
function topTextGenerator() {
  setTimeout(function () {
    topSpanGenerator(["w", "e", "b", "s", "i", "t", "e"]);
    removeArrayItems();
  }, 500);
  setTimeout(function () {
    topSpanGenerator(["g", "e", "n", "t", "l", "e"]);
    removeArrayItems();
  }, 6000);
  setTimeout(function () {
    topSpanGenerator(["d", "i", "g", "i", "t", "a", "l"]);
    removeArrayItems();
  }, 11500);
  setTimeout(function () {
    topSpanGenerator(["g", "a", "m", "i", "n", "g"]);
    removeArrayItems();
  }, 17000);
}
// topTextGenerator();

// BTM TEXT GENERATOR
function btmTextGenerator() {
  setTimeout(function () {
    btmSpanGenerator(["w", "i", "z", "a", "r", "d", "r", "y"]);
    removeArrayItems();
  }, 800);
  setTimeout(function () {
    btmSpanGenerator(["g", "i", "a", "n", "t"]);
    removeArrayItems();
  }, 6300);
  setTimeout(function () {
    btmSpanGenerator(["o", "v", "e", "r", "l", "o", "r", "d"]);
    removeArrayItems();
  }, 11800);
  setTimeout(function () {
    btmSpanGenerator(["e", "n", "t", "h", "u", "s", "i", "a", "s", "t"]);
    removeArrayItems();
  }, 17300);
}
// btmTextGenerator();

// LOOP ANIMATION INFINITE
function loop() {
  let functionFinish = false;
  if (!functionFinish) {
    setInterval(function () {
      topTextGenerator();
    }, 22000);
  }

  if (!functionFinish) {
    setInterval(function () {
      btmTextGenerator();
    }, 22000);
  }
}
// loop();

let entranceAnimationEnd = false;
let loadingAnimationEnd = false;

function loadingAnimation() {
  if (loadingAnimationEnd == false) {
    gsap.from(".loader", { duration: 1, y: "0vh", ease: "expo.out", delay: 1 });
    loadingAnimationEnd = true;
  }
}
loadingAnimation();

let navbar = document.querySelector(".nav-bar");
let homeBox = document.querySelectorAll(".home__box");
function finalStateNavbar() {
  navbar.addEventListener("animationend", function () {
    navbar.style.visibility = "visible";
  });
}
finalStateNavbar();

function finalStateHomeBox() {
  for (let i = 0; i < homeBox.length; i++) {
    homeBox[0].addEventListener("animationend", function () {
      homeBox[0].style.visibility = "visible";
    });

    homeBox[1].addEventListener("animationend", function () {
      homeBox[1].style.visibility = "visible";
    });
  }
}
finalStateHomeBox();

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

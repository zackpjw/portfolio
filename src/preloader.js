// ~PRELOADER JS
function mainLoadingAnimation() {
  var loader = document.querySelector(".loader");
  let loadingAnimationEnd = false;
  if (loadingAnimationEnd == false) {
    gsap.from(loader, {
      duration: 1,
      y: "0vh",
      ease: "expo.out",
      delay: 5.5,
      onComplete: hideLoader,
      allowMainPageScroll,
    });
    loadingAnimationEnd = true;
  }
}

function secondLoadingAnimation() {
  var loader = document.querySelector(".loader");
  let loadingAnimationEnd = false;
  if (loadingAnimationEnd == false) {
    gsap.from(loader, {
      duration: 1,
      y: "0vh",
      ease: "expo.out",
      delay: 1,
      onComplete: hideLoader,
      allowPageScroll,
    });
    loadingAnimationEnd = true;
  }
}

// REMOVE PRELOADER AFTER ANIMATING
function hideLoader() {
  const element = document.querySelector("div");
  element.remove(".loader");
}

// ADD OVERFLOW-Y TO BODY ELEMENT AFTER ANIMATION
function allowMainPageScroll() {
  setTimeout(function () {
    document.body.style.overflowY = "auto";
  }, 6500);
}

function allowPageScroll() {
  setTimeout(function () {
    document.body.style.overflowY = "auto";
  }, 2000);
}

// PRELOADER PERCENTAGE COUNTER
let count = 0;
var percentageLoader = document.querySelector(".percentage-loader");
function startCount() {
  percentageLoader.innerHTML = count + "%";
  if (count < 100) {
    count++;
    setTimeout(startCount, 40);
  }
}
startCount();

// PRELOADER LOADS ONCE
// window.addEventListener("load", function () {
//   if (!sessionStorage.viewed) {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
//     sessionStorage.viewed = 1;
//   } else {
//     const loader = document.querySelector(".loader");
//     loader.style.display = "none";
//   }
// });

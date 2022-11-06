// ~PRELOADER JS
function mainLoadingAnimation() {
  let loadingAnimationEnd = false;
  if (loadingAnimationEnd == false) {
    gsap.from(".loader", {
      duration: 1,
      y: "0vh",
      ease: "expo.out",
      delay: 5.5,
    });
    loadingAnimationEnd = true;
  }
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

// SET VISIBILITY OF .WORKBOX TO VISIBLE AFTER ANIMATION ENDS
function finalStateWorkBox() {
  let workBox = document.querySelector(".work-box");
  workBox.addEventListener("animationend", function () {
    workBox.style.opacity = "1";
  });
}
finalStateWorkBox();

// SET VISIBILITY OF .CARDWRAPPER TO VISIBLE AFTER ANIMATION ENDS
function finalStateCardWrapper() {
  let CardWrapper = document.querySelector(".card-wrapper");
  CardWrapper.addEventListener("animationend", function () {
    CardWrapper.style.opacity = "1";
  });
}
finalStateCardWrapper();

// ~HOME JS
// TEXT RANDOMIZER
function textChanger() {
  const textChanger = document.querySelector(".home__textchanger");
  var words = ["engineer", "daydreamer", "developer", "magician", "scientist"];
  var i = 0;

  setInterval(function () {
    textChanger.innerHTML = words[(i = (i + 1) % words.length)];
  }, 1000);
}

// SET VISIBILITY OF HOMEBOX TO VISIBLE AFTER ANIMATION ENDS
function finalStateHomeBox() {
  let homeBox = document.querySelectorAll(".home__box");
  for (let i = 0; i < homeBox.length; i++) {
    homeBox[0].addEventListener("animationend", function () {
      // homeBox[0].style.visibility = "visible";
      homeBox[0].style.opacity = "1";
    });

    homeBox[1].addEventListener("animationend", function () {
      // homeBox[1].style.visibility = "visible";
      homeBox[1].style.opacity = "1";
    });
  }
}
finalStateHomeBox();

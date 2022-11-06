// ~ABOUT JS
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

// SET VISIBILITY OF ABOUT TO VISIBLE AFTER ANIMATION ENDS
function finalStateAboutBox() {
  let aboutBox = document.querySelector(".ab__box");
  aboutBox.addEventListener("animationend", function () {
    aboutBox.style.opacity = "1";
  });
}
finalStateAboutBox();

function finalStateAboutColumn() {
  let aboutCol = document.querySelector(".ab__column");
  aboutCol.addEventListener("animationend", function () {
    aboutCol.style.opacity = "1";
  });
}
finalStateAboutColumn();

// SET VISIBILITY OF CASESTUDIES TO VISIBLE AFTER ANIMATION ENDS
function finalStateCaseStudies() {
  let caseWrapper = document.querySelector(".case-wrapper");
  caseWrapper.addEventListener("animationend", function () {
    caseWrapper.style.opacity = "1";
  });
}
finalStateCaseStudies();

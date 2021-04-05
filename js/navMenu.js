const navSlider = $(".hamburger__nav");
const hamburger = $(".hamburger");
const body = $("body");
let isOpen = false;

// HAMBURGER NAV SLIDER
//////////////////////////////////////////////////
// Initially hides the nav
navSlider.hide();

function toggleSlider() {
  // Conditional checks whether the navSlider is open or closed
  if (!isOpen) {
    navSlider.slideDown();
    body.css("overflow", "hidden");
    isOpen = true;
  } else if (isOpen) {
    navSlider.slideUp();
    body.css("overflow", "scroll");
    isOpen = false;
  }
}

hamburger.on("click", toggleSlider);

//Toogle btn for hamburger menu

//NEEDs TO ADD COLAPSE FUNCTION ON CLICKING OUTSIDE THE MENU AND TARGET BTN WAI ADDING EVENT-LISTENER TO WINDO
// --- BY ST @02.02.2024//12.43.23

// Get the button and the menu elements
const buttonMegaMenu = document.getElementById("mega-menu-button-full");
const menuMegaMenu = document.getElementById("mega-menu-full");

// Add a click event listener to the button
buttonMegaMenu.addEventListener("click", function () {
  // Toggle the hidden class on the menu element
  menuMegaMenu.classList.toggle("hidden");
});

//Toogle btn for academics menu
// Get the button and the menu elements
const buttonAcademics = document.getElementById(
  "mega-menu-full-dropdown-button-academics"
);
const menuAcademics = document.getElementById(
  "mega-menu-full-dropdown-academics"
);

// Add a click event listener to the button
buttonAcademics.addEventListener("click", function () {
  // Toggle the hidden class on the menu element
  menuAcademics.classList.toggle("hidden");
});

//Toogle btn for R&I menu
// Get the button and the menu elements
const buttonRandI = document.getElementById(
  "mega-menu-full-dropdown-button-R&I"
);
const menuRandI = document.getElementById("mega-menu-full-dropdown-R&I");

// Add a click event listener to the button
buttonRandI.addEventListener("click", function () {
  // Toggle the hidden class on the menu element
  menuRandI.classList.toggle("hidden");
});

//Toogle btn for about menu
// Get the button and the menu elements
const buttonAbout = document.getElementById(
  "mega-menu-full-dropdown-button-about"
);
const menuAbout = document.getElementById("mega-menu-full-dropdown-about");

// Add a click event listener to the button
buttonAbout.addEventListener("click", function () {
  // Toggle the hidden class on the menu element
  menuAbout.classList.toggle("hidden");
});

//Toogle btn for life@hial menu
// Get the button and the menu elements
const buttonLifeAtHial = document.getElementById(
  "mega-menu-full-dropdown-button-life@hial"
);
const menuLifeAtHial = document.getElementById(
  "mega-menu-full-dropdown-life@hial"
);

// Add a click event listener to the button
buttonLifeAtHial.addEventListener("click", function () {
  // Toggle the hidden class on the menu element
  menuLifeAtHial.classList.toggle("hidden");
});

// Add a click event listener to the window object
window.addEventListener("click", function (event) {
  // Check if the click target is not the button or the menu
  if (event.target !== buttonMegaMenu && event.target !== menuMegaMenu) {
    // Hide the menu by adding the hidden class
    menu.classList.add("hidden");
  }
});

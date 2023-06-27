// Define UI elements
const body = document.querySelector("body");
const hexColorDiv = document.querySelector("#hex-color-div");
const generate = document.querySelectorAll(".generate");

// Define Event listener
generate.forEach((ele) => {
  ele.addEventListener("click", displayHexColor);
});

// Define event listener functions
function displayHexColor() {
  let randomColor = createRandomHexColor();

  body.style.backgroundColor = `#${randomColor}`;

  hexColorDiv.innerHTML = `#${randomColor}`;
}

// Define utility functions
function createRandomHexColor() {
  let randomHexColor = Math.random().toString(16).substring(2, 8);

  return randomHexColor;
}

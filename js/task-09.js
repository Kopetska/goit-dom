function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}

button.addEventListener("click", changeColor);

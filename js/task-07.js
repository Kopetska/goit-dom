const input = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');

text.style.fontSize = input.value + "px";

function makeFont(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}

input.addEventListener("input", makeFont);

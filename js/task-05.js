const input = document.querySelector('[id = "name-input"]');
const output = document.querySelector('[id = "name-output"]');

function printSpan(event) {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}

input.addEventListener("input", printSpan);

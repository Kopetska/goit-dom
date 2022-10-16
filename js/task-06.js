const input = document.querySelector('[id="validation-input"]');

function doValidation(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

input.addEventListener("blur", doValidation);

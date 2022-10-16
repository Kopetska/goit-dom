const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('[id = "value"]');
let counterValue = 0;

function doDecrement() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}

function doIncrement() {
  counterValue += 1;
  value.innerHTML = counterValue;
}

decrement.addEventListener("click", doDecrement);
increment.addEventListener("click", doIncrement);

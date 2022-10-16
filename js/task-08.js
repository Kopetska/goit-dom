const form = document.querySelector(".login-form");

function makeForm(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Please, fill the blanks!");
  }

  const formData = new FormData(event.currentTarget);

  const result = {};

  formData.forEach((value, name) => {
    result[name] = value;
  });

  console.log(result);

  form.reset();
}

form.addEventListener("submit", makeForm);

// Task 3: contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach(function (input) {
      if (input.checkValidity()) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
      } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      }
    });

    if (contactForm.checkValidity()) {
      alert("Message sent!");
    }
  });
}

// Task 4: registration form validation
const regForm = document.getElementById("regForm");

if (regForm) {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  regForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // check that passwords are the same
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }

    regForm.classList.add("was-validated");

    if (regForm.checkValidity()) {
      alert("Registration successful!");
    }
  });

  // remove colors when Reset is clicked
  regForm.addEventListener("reset", function () {
    regForm.classList.remove("was-validated");
  });
}

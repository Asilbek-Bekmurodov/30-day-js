let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validateText() {
  let text = document.getElementById("contact-text").value;
  let required = 30;
  let left = required - text.length;
  if (left > 0) {
    messageError.innerHTML = left + ` more characters required`;
    return false;
  }
  messageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateText() ||
    !validateEmail()
  ) {
    submitError.style.display - "block";
    submitError.innerHTML = "Please fix error to submit !";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

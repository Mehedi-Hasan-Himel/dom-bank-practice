// step 01: add click event handler with the submit button.
document.querySelector("#btn-submit").addEventListener("click", function () {
  // step 02: get the email address inside the emaiil field.
  // always remember to use .value to get text from an input field.
  const emailField = document.querySelector("#user-email");
  const email = emailField.value;
  // step 03: get the password inside the password field.
  // 3.a: set id on html element.
  // 3.b: get the element by id.
  // 3.c: get the value from the element.
  const passwordField = document.querySelector("#user-password");
  const password = passwordField.value;
  console.log(email, password);

  // danger: don't verify the email and password on client side.
  // step 04: verify the email and password and check valid user or not valid user.

  if (email === `sontan@bap.com` && password === `secret`) {
    window.location.href = "bank.html";
  } else {
    alert(`invalid user`);
  }
});

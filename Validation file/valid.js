function validateForm() {
  let x = document.forms["signup-form"]["first-name", "last-name", "email", "password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
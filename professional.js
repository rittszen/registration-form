function validateForm() {

  let valid = true;

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let city = document.getElementById("city").value;

  let gender = document.getElementsByName("gender");
  let hobbies = document.getElementsByName("hobbies");

  // Clear old errors
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("cityError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  document.getElementById("hobbyError").innerHTML = "";



  // Name
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    valid = false;
  }

  // Email
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    valid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").innerHTML = "Invalid email";
    valid = false;
  }

  // Password
  if (password === "") {
    document.getElementById("passError").innerHTML = "Password required";
    valid = false;
  } else if (password.length < 6) {
    document.getElementById("passError").innerHTML = "Min 6 characters";
    valid = false;
  }

  // City
  if (city === "") {
    document.getElementById("cityError").innerHTML = "Select city";
    valid = false;
  }

  // Gender
  let genderSelected = false;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelected = true;
    }
  }

  if (!genderSelected) {
    document.getElementById("genderError").innerHTML = "Select gender";
    valid = false;
  }

  // Hobbies
  let hobbySelected = false;
  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      hobbySelected = true;
    }
  }

  if (!hobbySelected) {
    document.getElementById("hobbyError").innerHTML = "Select at least one hobby";
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully!");
  }

  return valid;
}
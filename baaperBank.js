document.getElementById("submit_btn").addEventListener("click", function () {
  const emailField = document.getElementById("top2");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("top");
  const userPass = passwordField.value;
  if (userEmail == "bapp@gmail.com" && userPass == "1234") {
    window.location.href = "banking.html";
  } else if (userEmail == "son@gmail.com" && userPass == "1234") {
    window.location.href = "banking.html";
  } else if (userEmail == "mother@gmail.com" && userPass == "1234") {
    window.location.href = "banking.html";
  } else if (userEmail == "main@gmail.com" && userPass == "1234") {
    window.location.href = "banking.html";
  } else {
    window.alert("Invild info");
  }
});

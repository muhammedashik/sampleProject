function change(event) {
  document.querySelector(".imageChange").src = event.children[0].src;
}
function changeTshirt(event) {
  document.querySelector(".imageChangetshirt").src = event.children[0].src;
}
function changejoggers(event) {
  document.querySelector(".imageChangejoggers").src = event.children[0].src;
}

// Form validation

const form = document.getElementById("form");
const user = document.getElementById("email");
const password = document.getElementById("passwordF");
const re_password = document.getElementById("passwordre");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = user.value.trim();
  const passwordValue = password.value.trim();
  const re_passwordValue = re_password.value.trim();

  if (usernameValue == "" || passwordValue == "") {
    document.getElementById("f").innerHTML = "Pleas enter name";
    document.getElementById("g").innerHTML = "Pleas enter name";
  } else {
    document.getElementById("success").innerHTML = "Success";
  }
}

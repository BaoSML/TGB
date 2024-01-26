const email = document.getElementById("email");
const password = document.getElementById("email");
const btnsubmit = document.getElementById("formSubmit");

function submit(e) {
  e.preventDefault();
  const user = {
    email: e.target[0].value,
    password: e.target[1].value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "../login/login.html";
}

btnsubmit.addEventListener("submit", submit);

const btnsubmit = document.getElementById("btn-submit");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
function submit(e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("user none");
  } else {
    if (
      user.email === inputEmail.value &&
      user.password === inputPassword.value
    ) {
      window.location.href = "/TGB/src/HomePage.html";
    } else {
      console.log("error");
    }
  }
}
btnsubmit.addEventListener("submit", submit);

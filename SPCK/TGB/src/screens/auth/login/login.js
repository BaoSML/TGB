const btnsubmit = document.getElementById("btn-submit");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
// email, password có value
// email phải đúng định dạng
function submit(e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("user chưa có");
  } else {
    if (
      user.email === inputEmail.value &&
      user.password === inputPassword.value
    ) {
      window.location.href = "../../../../index.html";
    } else {
      console.log("error");
    }
  }
}
btnsubmit.addEventListener("submit", submit);

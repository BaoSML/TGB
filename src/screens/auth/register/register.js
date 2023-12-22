const email = document.getElementById("email");
const password = document.getElementById("email");
const btnsubmit = document.getElementById("formSubmit");

// email, password có value
// email phải đúng định dạng
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
/**
 * sự kiện: btn, input, a, link,...
 *
 * windown: sự kiện của web:  window.location.href = "../login/login.html";
 */

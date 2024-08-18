const warper = document.querySelector(".warper");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btn = document.querySelector(".btnlogin");
const cls = document.querySelector(".icon-close");

registerlink.addEventListener("click", () => {
  warper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  warper.classList.remove("active");
});

btn.addEventListener("click", () => {
  warper.classList.add("active-popup");
});

cls.addEventListener("click", () => {
  warper.classList.remove("active-popup");
});

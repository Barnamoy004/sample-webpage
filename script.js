const landing = document.getElementById("landing");
const login = document.getElementById("login");
const register = document.getElementById("register");
const nav = document.getElementById("main-nav");

document.getElementById("start").onclick = () => {
    landing.style.display = "none";
    login.style.display = "flex";
    nav.classList.add("nav-fixed");
};

document.getElementById("go-register").onclick = () => {
    login.style.display = "none";
    register.style.display = "flex";
};

document.getElementById("go-login").onclick = () => {
    register.style.display = "none";
    login.style.display = "flex";
};

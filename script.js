document.addEventListener("DOMContentLoaded", () => {

    const landing = document.getElementById("landing");
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const nav = document.getElementById("main-nav");
    const modal = document.getElementById("modal");
    const toast = document.getElementById("toast");

    function showToast(msg) {
        toast.innerText = msg;
        toast.style.right = "30px";
        setTimeout(() => {
            toast.style.right = "-300px";
        }, 2500);
    }

    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 3500);

    document.getElementById("start").addEventListener("click", () => {
        landing.style.display = "none";
        login.style.display = "flex";
        nav.classList.add("nav-fixed");
    });

    document.getElementById("go-register").addEventListener("click", () => {
        login.style.display = "none";
        register.style.display = "flex";
    });

    document.getElementById("go-login").addEventListener("click", () => {
        register.style.display = "none";
        login.style.display = "flex";
    });


    document.querySelectorAll(".nav-links a[data-target]").forEach(link => {
        link.addEventListener("click", () => {
            landing.style.display = "none";
            login.style.display = "none";
            register.style.display = "none";
            document.getElementById(link.dataset.target).style.display = "flex";
        });
    });

    document.getElementById("open-modal").addEventListener("click", () => {
        modal.style.display = "flex";
    });

    document.getElementById("close-modal").addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.querySelector(".login-btn").addEventListener("click", () => {
        showToast("Login clicked 🔐");
    });

    document.querySelector(".register-btn").addEventListener("click", () => {
        showToast("Account created 🎉");
    });

});

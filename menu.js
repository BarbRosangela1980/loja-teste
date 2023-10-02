let mobileMenu = document.querySelector(".mobile-menu");
let navList = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-links");
let activeClass = "active";

mobileMenu.addEventListener("click", () =>
  navList.classList.toggle("active"))

mobileMenu.addEventListener("click", () =>
  mobileMenu.classList.toggle("active"))
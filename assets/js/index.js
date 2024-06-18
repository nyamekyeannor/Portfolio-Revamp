document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  navToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    // Scroll up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

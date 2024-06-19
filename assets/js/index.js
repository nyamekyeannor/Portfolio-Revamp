document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll Down
      navbar.style.top = "-60px"; // Adjust this value based on your navbar height
    } else {
      // Scroll Up
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  navToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

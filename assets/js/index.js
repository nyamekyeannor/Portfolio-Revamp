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
      if (scrollTop <= 0) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-60px"; // Keep it hidden when scrolling up but not at the top
      }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });

  navToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all card elements
  const cards = document.querySelectorAll(".card");

  // Loop through each card and add a click event listener
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Toggle a class to show/hide the card content
      this.classList.toggle("active");
    });
  });
});

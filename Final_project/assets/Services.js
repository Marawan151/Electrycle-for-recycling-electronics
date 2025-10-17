document.addEventListener("DOMContentLoaded", () => {
  const recycleButton = document.querySelector(".primary-btn");
  const learnLinks = document.querySelectorAll(".learn-more");
  const navLinks = document.querySelectorAll("nav ul li a");

  if (recycleButton) {
    recycleButton.addEventListener("click", () => {
      alert("Please visit our recycling page to get started!");
    });
  }

  if (learnLinks.length > 0) {
    learnLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        alert("More details will be added soon!");
      });
    });
  }

  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }
});
    
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const yearEl = document.getElementById("year");
  let current = 0;

  if (slides.length) {
    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 4000);
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

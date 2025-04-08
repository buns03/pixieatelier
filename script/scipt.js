let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Automatically switch slides every 4 seconds
setInterval(nextSlide, 4000);

// Initialize first slide on load
showSlide(currentSlide);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });
});

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Change the current page to "VIEW MORE" content
  document.getElementById('view-more').addEventListener('click', function() {
    window.location.href = 'view-more.html';  // Navigate to 'view-more.html' in the same tab
  });

  // Change the current page to "PRICELIST" content
  document.getElementById('pricelist').addEventListener('click', function() {
    window.location.href = 'pricelist.html';  // Navigate to 'pricelist.html' in the same tab
  });

  // Change the current page to "PENDING TRACKER" content
  document.getElementById('pending-tracker').addEventListener('click', function() {
    window.location.href = 'pending-tracker.html';  // Navigate to 'pending-tracker.html' in the same tab
  });

  // Change the current page to "RULES AND REGULATIONS" content
  document.getElementById('rules').addEventListener('click', function() {
    window.location.href = 'rules.html';  // Navigate to 'rules.html' in the same tab
  });

  // Change the current page to "SOCIAL LINKS" content
  document.getElementById('social-links').addEventListener('click', function() {
    window.location.href = 'social-links.html';  // Navigate to 'social-links.html' in the same tab
  });
});

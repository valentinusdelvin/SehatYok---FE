const menuCards = document.getElementById("menuCards");
const menuLeftBtn = document.querySelector(".menu-section .slider-btn.left");
const menuRightBtn = document.querySelector(".menu-section .slider-btn.right");

document.querySelectorAll('.nav-right a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetID = this.getAttribute('href');
    if (!targetID.startsWith('#')) return;
    e.preventDefault();
    const targetSection = document.querySelector(targetID);
    const offsetTop = targetSection.offsetTop - 70;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.footer-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const offsetTop = targetSection.offsetTop - 70;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


menuLeftBtn.addEventListener("click", () => {
  menuCards.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
});

menuRightBtn.addEventListener("click", () => {
  menuCards.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
});

const educationCards = document.getElementById("educationCards");
const educationLeftBtn = document.querySelector(".education-section .slider-btn.left");
const educationRightBtn = document.querySelector(".education-section .slider-btn.right");

educationLeftBtn.addEventListener("click", () => {
  educationCards.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
});

educationRightBtn.addEventListener("click", () => {
  educationCards.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
});

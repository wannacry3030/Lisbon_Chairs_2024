const carouselContainer = document.querySelector(".carousel-container");
const carouselSlide = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateCarousel() {
  carouselSlide.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
      indicators[index].classList.add("active");
    } else {
      slide.classList.remove("active");
      indicators[index].classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselSlide.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselSlide.length - 1;
  }
  updateCarousel();
}

function autoSlide() {
  nextSlide();
}

// Event listeners para os botões de controle
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Iniciar o carousel automaticamente
setInterval(autoSlide, 4000);

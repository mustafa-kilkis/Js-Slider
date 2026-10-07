const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = document.querySelectorAll('.slider-wrapper img');

let currentIndex = 0;
let interval;

function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 800}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0; 
    }
    updateSlider();
    resetInterval(); 
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    updateSlider();
    resetInterval();
}

function startInterval() {
    interval = setInterval(nextSlide, 3000); 
}

function resetInterval() {
    clearInterval(interval);
    startInterval();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

startInterval();
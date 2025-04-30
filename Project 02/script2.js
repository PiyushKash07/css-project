const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'left', 'right');
        if (index === currentIndex) {
            slide.classList.add('active');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('left');
        } else if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add('right');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
});

// Initialize
updateSlides();

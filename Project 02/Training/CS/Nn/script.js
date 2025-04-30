const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cards = document.querySelectorAll('.card');
let current = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if(index === current) {
            card.classList.add('active');
        }
    });
}

prev.addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCards();
});

next.addEventListener('click', () => {
    current = (current + 1) % cards.length;
    updateCards();
});

// Initialize
updateCards();

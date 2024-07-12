// Select carousel elements
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Calculate slide width based on carousel item width
let slideWidth = carouselItems[0].clientWidth;

// Clone the first and last carousel items
const firstClone = carouselItems[0].cloneNode(true);
const lastClone = carouselItems[carouselItems.length - 1].cloneNode(true);

// Append cloned items before the first and after the last item
carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, carouselItems[0]);

// Reset carousel position to the first original item
let counter = 1;
carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselItems.length + 1) return; // Prevent exceeding maximum
    carouselInner.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // Prevent going below 0
    carouselInner.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
});

// Transition end listener to handle infinite loop
carouselInner.addEventListener('transitionend', () => {
    // If counter goes beyond the last cloned item, reset to the first original item
    if (counter >= carouselItems.length + 1) {
        carouselInner.style.transition = 'none';
        counter = 1;
        carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    // If counter goes before the first cloned item, reset to the last original item
    if (counter <= 0) {
        carouselInner.style.transition = 'none';
        counter = carouselItems.length;
        carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});

// Adjust slideWidth on window resize
window.addEventListener('resize', () => {
    slideWidth = carouselItems[0].clientWidth;
    carouselInner.style.transition = 'none';
    carouselInner.style.transform = `translateX(${-slideWidth * counter}px)`;
});
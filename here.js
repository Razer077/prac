const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
console.log(`img-len: ${carouselImages.length}`);
var width = document.querySelector(".carousel-container");
console.log(width.offsetWidth);

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let counter = 1;
var size = carouselImages[0].clientWidth;
console.log("Size: ", size);

window.addEventListener('resize', () => {
    width = width.offsetWidth;
    console.log(width);
})

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        return;
    }
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prev.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

const time = setInterval(() => {
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    next.addEventListener('click', () => {
        clearInterval(time);
    })
    prev.addEventListener('click', () => {
        clearInterval(time);
    })
}, 5000);
const next = document.querySelector('.mov-next');
const prev = document.querySelector('.mov-prev');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const section = document.querySelector('.section');
const slidesNumber = slides.length;
var counter = 0;
console.log("Slides Number: ", slidesNumber);

//next button (functionality)

next.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    counter++;
    console.log(`Counter: ${counter}`);

    if (counter >= (slidesNumber)) {
        counter = 0;
    }
    console.log(slides[counter]);
    slides[counter].classList.add("active");
})

var autoplay;

var play = () => {
    autoplay = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })

        counter++;

        if (counter >= (slidesNumber)) {
            counter = 0;
        }
        console.log(slides[counter]);
        slides[counter].classList.add("active");
    }, 4000);
}

play();

section.addEventListener("mouseover", () => {
    console.log("IN");
    clearInterval(autoplay);
});

section.addEventListener("mouseout", () => {
    console.log("OUT");
    play();
});

//Reveal animation

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        console.log(windowHeight);
        var revealtop = reveals[i].getBoundingClientRect().top;
        console.log(revealtop);
        var revealpoint = 150;

        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
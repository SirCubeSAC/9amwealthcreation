// ================================
// Background Slideshow
// ================================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    // Hide current slide
    slides[currentSlide].classList.remove("active");

    // Move to next slide
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Show next slide
    slides[currentSlide].classList.add("active");

}

// Change every 7 seconds
setInterval(changeSlide, 7000);

// ================================
// Optional Fade In
// ================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
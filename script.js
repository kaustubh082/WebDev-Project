document.addEventListener("DOMContentLoaded", function () {
    // Movie Slider Functionality
    const slider = document.querySelector(".movie-slider");
    const movies = document.querySelectorAll(".movie");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 0;
    const totalMovies = movies.length;
    const movieWidth = movies[0].offsetWidth + 15; // Image width + margin
    let autoSlide;

    function moveSlider() {
        slider.style.transform = `translateX(${-index * movieWidth}px)`;
    }

    function nextSlide() {
        index = (index + 1) % totalMovies;
        moveSlider();
    }

    function prevSlide() {
        index = (index - 1 + totalMovies) % totalMovies;
        moveSlider();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 2000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextBtn.addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide(); // Start auto slider when page loads

    // Movie Click Event - Open Movie Details Page
    document.querySelectorAll(".movie img").forEach((img) => {
        img.addEventListener("click", function () {
            const movieName = this.alt.replace(/\s+/g, "-").toLowerCase();
            window.location.href = `movies/${movieName}.html`;
        });
    });
});

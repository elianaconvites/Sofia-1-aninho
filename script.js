let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-play (troca de foto a cada 5 segundos)
setInterval(nextSlide, 5000);

// Inicializar
showSlide(0);

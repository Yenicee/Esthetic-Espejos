//SCROLL DE PRODUCTOS DE LA PAG INICIO
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  const startDrag = (event) => {
    event.preventDefault();
    isDragging = true;
    startPosition = getPositionX(event);
    sliderContainer.style.cursor = "grabbing";
    requestAnimationFrame(() => updateSlider(event));
  };

  const updateSlider = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diffX = currentPosition - startPosition;
      currentTranslate = prevTranslate + diffX;
      setSliderPosition();
      requestAnimationFrame(() => updateSlider(event));
    }
  };

  const endDrag = () => {
    isDragging = false;
    prevTranslate = currentTranslate;
    sliderContainer.style.cursor = "grab";
  };

  const getPositionX = (event) => {
    return event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
  };

  const setSliderPosition = () => {
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  };

  sliderContainer.addEventListener("mousedown", startDrag);
  sliderContainer.addEventListener("mousemove", updateSlider);
  sliderContainer.addEventListener("mouseup", endDrag);
  sliderContainer.addEventListener("mouseleave", endDrag);

  sliderContainer.addEventListener("touchstart", startDrag);
  sliderContainer.addEventListener("touchmove", updateSlider);
  sliderContainer.addEventListener("touchend", endDrag);
  sliderContainer.addEventListener("touchcancel", endDrag);
});

// Obtener el carrusel
let carousel = document.querySelector('#carouselExampleCaptions');

// Obtener las imágenes del carrusel
let carouselItems = carousel.querySelectorAll('.carousel-item');

// Establecer el índice inicial
let currentIndex = 0;

// Función para avanzar al siguiente slide
function nextSlide() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

// Iniciar el carrusel automáticamente
let interval = setInterval(nextSlide, 4000); // Cambiar de imagen cada 4 segundos

// Detener el carrusel cuando el mouse está sobre él
carousel.addEventListener('mouseover', function () {
  clearInterval(interval);
});

// Reanudar el carrusel cuando el mouse sale del carrusel
carousel.addEventListener('mouseout', function () {
  interval = setInterval(nextSlide, 2000);
});

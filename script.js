let currentIndex = 0;

function scrollLeft() {
    const container = document.querySelector('.scroll-container');
    const bannerWidth = document.querySelector('.banner').clientWidth;

    if (currentIndex > 0) {
        currentIndex--;
        container.style.transform = `translateX(-${currentIndex * bannerWidth}px)`;
        console.log(`Moved left to index: ${currentIndex}`);
    } else {
        console.log("Already at the first image");
    }
}

function scrollRight() {
    const container = document.querySelector('.scroll-container');
    const bannerWidth = document.querySelector('.banner').clientWidth;
    const totalImages = document.querySelectorAll('.scroll-container img').length;

    if (currentIndex < totalImages - 1) {
        currentIndex++;
        container.style.transform = `translateX(-${currentIndex * bannerWidth}px)`;
        console.log(`Moved right to index: ${currentIndex}`);
    } else {
        console.log("Already at the last image");
    }
}


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function showImageInExpandedView(imageIndex, sliderId) {
    const slider = document.getElementById(sliderId);
    expandedImages = Array.from(slider.querySelectorAll('.slider-img'));
    currentExpandedIndex = imageIndex;

    const imageModal = document.getElementById('imageModal');
    const imageModalContent = document.getElementById('imageModalContent');
    imageModalContent.src = expandedImages[currentExpandedIndex].src;
    imageModal.style.display = 'block';
}

function moveExpandedImage(direction) {
    currentExpandedIndex = (currentExpandedIndex + direction + expandedImages.length) % expandedImages.length;

    const imageModalContent = document.getElementById('imageModalContent');
    imageModalContent.src = expandedImages[currentExpandedIndex].src;
}


document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-hamburguesa');
  const navLinks = document.querySelector('nav ul');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Activa o desactiva la clase 'active'
  });
});





let indiceActualExperiencia = 0;

function abrirModalExperiencia() {
    document.getElementById("modalExperiencia").style.display = "flex";
    actualizarSliderExperiencia();
}

function cerrarModalExperiencia() {
    document.getElementById("modalExperiencia").style.display = "none";
}

function cambiarImagenExperiencia(direccion) {
    let totalImagenes = document.querySelectorAll(".slider-experiencia-img").length;
    indiceActualExperiencia += direccion;

    if (indiceActualExperiencia < 0) indiceActualExperiencia = totalImagenes - 1;
    if (indiceActualExperiencia >= totalImagenes) indiceActualExperiencia = 0;

    actualizarSliderExperiencia();
}

function actualizarSliderExperiencia() {
    const slider = document.querySelector(".slider-experiencia");
    const imageWidth = document.querySelector(".slider-experiencia-img").clientWidth;
    slider.style.transform = `translateX(-${indiceActualExperiencia * imageWidth}px)`;
}


document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navBar = document.querySelector(".main-nav");

    menuIcon.addEventListener("click", function() {
        navBar.classList.toggle("activo"); // Alterna la visibilidad del menú
    });
});

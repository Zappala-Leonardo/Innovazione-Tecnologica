document.addEventListener('DOMContentLoaded', () => {
    console.log('Il documento è pronto!');
});

// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close');

// Function to open the lightbox
function openLightbox(imgSrc) {
    lightbox.style.display = 'block';
    lightboxImage.src = imgSrc;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add event listeners
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Add click event listener to all images with class 'collage-image'
const images = document.querySelectorAll('.collage-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        openLightbox(image.src);
    });
});


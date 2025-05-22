const images = [
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg"
];

let currentIndex = 0;
const currentImage = document.getElementById("current-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateImage() {
    currentImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();

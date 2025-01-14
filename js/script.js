let all = [
    { src: "./img/alpine.jpg", category: "landscape" },
    { src: "./img/avenue.jpg", category: "city" },
    { src: "./img/trees.jpg", category: "wald" },
    { src: "./img/trees3.jpg", category: "wald" },
    { src: "./img/cape.jpg", category: "stadium" },
    { src: "./img/road.jpg", category: "city" },
    { src: "./img/indianapolis.jpg", category: "stadium" },
    { src: "./img/snow.jpg", category: "winter" },
];

let currentImages = all;
let currentIndex = 0;

function filterImages(category) {
    currentImages = category === "all" ? all : all.filter(image => image.category === category);
    render(currentImages);
}

function render(images) {
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    images.forEach((image, index) => {
        let imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.dataset.index = index;
        imgElement.addEventListener("click", () => openOverlay(index));
        gallery.appendChild(imgElement);
    });
}

function openOverlay(index) {
    currentIndex = index;
    updateOverlay();
    document.getElementById("overlay").style.display = "flex";
}

function updateOverlay() {
    let overlayImage = document.getElementById("overlayImage");
    let imageCount = document.getElementById("imageCount");
    overlayImage.src = currentImages[currentIndex].src;
    imageCount.textContent = `${currentIndex + 1} / ${currentImages.length}`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateOverlay();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateOverlay();
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("nextButton").addEventListener("click", showNext);
document.getElementById("prevButton").addEventListener("click", showPrev);
document.getElementById("closeButton").addEventListener("click", closeOverlay);

window.onload = () => filterImages("all");
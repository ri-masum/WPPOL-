const slider = document.getElementById("imageSlider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const pageIndicator = document
  .getElementById("pageIndicator")
  .querySelector("button");

let currentIndex = 0;
const totalImages = slider.children.length;

function updatePageIndicator() {
  pageIndicator.textContent = `${currentIndex + 1} and ${currentIndex + 2}`;
}

// Next button
nextButton.addEventListener("click", () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePageIndicator();
  }
});

// Previous button
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePageIndicator();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("imageContainer");

  const apiUrl = "./api/future.json";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((image) => {
        // Create image element
        const imgElement = document.createElement("img");
        imgElement.src = image.imageUrl;
        imgElement.alt = `Image ${image.id}`;

        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");
        imageItem.appendChild(imgElement);

        imageContainer.appendChild(imageItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
});

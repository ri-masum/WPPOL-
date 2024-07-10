document.addEventListener("DOMContentLoaded", function () {
  // Get the menu button, close button, and menu box elements
  var menuButton = document.getElementById("menuButton");
  var closeButton = document.getElementById("closeButton");
  var menuBox = document.getElementById("menuBox");

  menuButton.addEventListener("click", function () {
    menuBox.classList.toggle("show");
  });

  closeButton.addEventListener("click", function () {
    menuBox.classList.remove("show");
  });

  document.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !menuBox.contains(event.target)) {
      menuBox.classList.remove("show");
    }
  });
});

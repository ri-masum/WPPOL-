document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button, close button, and menu box elements
    var menuButton = document.getElementById('menuButton');
    var closeButton = document.getElementById('closeButton');
    var menuBox = document.getElementById('menuBox');

    // Add click event listener to the menu button
    menuButton.addEventListener('click', function() {
      // Toggle the 'show' class on the menu box to show/hide it
      menuBox.classList.toggle('show');
    });

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
      // Remove the 'show' class on the menu box to hide it
      menuBox.classList.remove('show');
    });

    // Optional: Hide the menu box when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !menuBox.contains(event.target)) {
        menuBox.classList.remove('show');
      }
    });
  });
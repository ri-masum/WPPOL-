window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var navbarLeft = document.getElementById('navbarLeft');
  var reportButton = document.getElementById('reportButton');

  var shareIcon = document.getElementById('shareIcon');
  var menuButton = document.getElementById('menuButton');

  if (window.scrollY > window.innerHeight) {
    navbar.classList.add('bg-gray-200', 'rounded-lg');
    navbarLeft.innerHTML = `<img src="./image/lefticon.png" alt="" class=""w-32">`;
    reportButton.classList.remove('border-white', 'text-white');
    reportButton.classList.add('border-blue-700', 'text-black');
    shareIcon.src = "./image/shareBlack.png";
    shareIcon.style.border = "2px solid green"; 
    shareIcon.style.padding = "10px"; 
    shareIcon.style.borderRadius = "50%"; 
    menuButton.innerHTML = `<img src="./image/menuBlack.png" alt="">`;
  } else {
    navbar.classList.remove('bg-gray-200', 'rounded-lg');
    reportButton.classList.remove('border-black', 'text-black');
    reportButton.classList.add('border-white', 'text-white');
    navbarLeft.innerHTML = `<img src="./image/image.png" alt="" class="w-32">`;
    shareIcon.src = "./image/shareWhite.png";
    shareIcon.style.border = "2px solid white"; 
    shareIcon.style.padding = "10px"; 
    shareIcon.style.borderRadius = "50%"; 
    menuButton.innerHTML = `<img src="./image/menuWhite.png" alt="">`;
  }
});

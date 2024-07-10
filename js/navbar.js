window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navbarLeft = document.getElementById('navbarLeft');
    var reportButton = document.getElementById('reportButton');

    var shareIcon = document.getElementById('shareIcon');
    var menuButton = document.getElementById('menuButton');

    if (window.scrollY > window.innerHeight) {
      navbar.classList.add('bg-gray-200', 'rounded-lg');
      navbarLeft.innerHTML = `<img src="./image/lefticon.png" alt="" class="h-10">`;
      reportButton.classList.remove('border-white', 'text-white');
      reportButton.classList.add('border-black', 'text-black');
      shareIcon.src = "./image/shareBlack.png";
      menuButton.innerHTML = `<img src="./image/menuBlack.png" alt="">`;
    } else {

      navbar.classList.remove('bg-gray-200', 'rounded-lg');
     reportButton.classList.remove('border-black', 'text-black');
     reportButton.classList.add('border-white', 'text-white');

      navbarLeft.innerHTML = `<img src="./image/image.png" alt="" class="h-10">`;

      shareIcon.src = "./image/shareWhite.png";
      menuButton.innerHTML = `<img src="./image/menuWhite.png" alt="">`;
    }
  });
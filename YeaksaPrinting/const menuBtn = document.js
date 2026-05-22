const menuBtn = document.querySelector('.menu-icon'); // or whatever your hamburger's class is
const navMenu = document.querySelector('.nav-menu'); // your navigation links container

menuBtn.addEventListener('click', function() {
  navMenu.classList.toggle('open');
});
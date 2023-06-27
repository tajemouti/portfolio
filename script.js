const toolBar = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-menu');
const cancelX = document.querySelector('.cancel');
const navList = document.querySelector('#mobile-nav-bar');

function displayMobileMenu() {
  if (mobileNav.style.display === 'none') mobileNav.style.display = 'block';
  else mobileNav.style.display = 'none';
}

function hideMobileMenu() {
  if (mobileNav.style.display === 'block') mobileNav.style.display = 'none';
  else mobileNav.style.display = 'block';
}

function hideMenu() {
  mobileNav.style.display = 'none';
}

cancelX.addEventListener('click', hideMobileMenu);
toolBar.addEventListener('click', displayMobileMenu);
navList.addEventListener('click', hideMenu);
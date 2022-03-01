const body = document.querySelector('body');
const navMenu = document.querySelector('.navbar');
const navIcon = document.querySelector('.fa-bars');
const navLink = Array.from(document.querySelectorAll('.nav-items li a'));

const displayMenu = () => {
  navMenu.classList.toggle('menu-active');
  navIcon.classList.add('is-active');
  body.style.overflow = 'hidden';
};

displayMenu();

const closeMenu = () => {
  navMenu.classList.toggle('menu-active');
  navIcon.classList.remove('is-active');
  body.style.overflow = 'visible';
};

closeMenu();

navLink.forEach.call(navLink, (link) => {
  link.onclick = () => {
    navMenu.classList.toggle('menu-active');
    navIcon.classList.toggle('is-active');
  };
});

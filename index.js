let navMenu = document.querySelector(".navbar"); 
let navIcon = document.querySelector(".fa-bars"); 
let navLink = document.querySelectorAll(".nav-items li a");

function displayMenu() { 
  navMenu.classList.toggle("menu-active"); 
  navIcon.classList.add("is-active");
} 

function closeMenu() {
  navMenu.classList.toggle("menu-active");
  navIcon.classList.remove("is-active");
}

[].forEach.call(navLink, function (link) {
  link.onclick = () => {
    navMenu.classList.toggle("menu-active");
    navIcon.classList.toggle("is-active");
  };
});
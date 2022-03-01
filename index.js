let navMenu = document.querySelector(".navbar"); 
let navIcon = document.querySelector(".fa-bars"); 

function displayMenu() { 
  navMenu.classList.toggle("menu-active"); 
  navIcon.classList.add("is-active");
} 
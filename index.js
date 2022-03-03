import projectsArray from "./data.js";

const body = document.querySelector("body");
const navMenu = document.querySelector(".navbar");
const navIcon = document.querySelector(".fa-bars");
const navLink = Array.from(document.querySelectorAll(".nav-items li a"));

window.displayMenu = () => {
  navMenu.classList.toggle("menu-active");
  navIcon.classList.add("is-active");
  body.style.overflow = "hidden";
};

window.closeMenu = () => {
  navMenu.classList.toggle("menu-active");
  navIcon.classList.remove("is-active");
  body.style.overflow = "visible";
};

navLink.forEach.call(navLink, (link) => {
  link.onclick = () => {
    navMenu.classList.toggle("menu-active");
    navIcon.classList.toggle("is-active");
    body.style.overflow = "visible";
  };
});

const projectCards = document.querySelector(".project");
let htmlCode = "";

projectsArray.forEach((project) => {
  const { title, image, imageAlt, info, shortDesc, languages, more } = project;

  if (projectsArray.indexOf(project) % 2 === 0) {
    htmlCode += `
    <div class='card'>
      <div class='card-img'>
        <img src='${image}' alt='${imageAlt}' />
      </div>
      <div class='project-intro'>
        <h2 class='project-title'>${title}</h2>
        <ul class='project-details'>
          ${info
            .map((item) =>
              item === info[0]
                ? `<li>${item}</li>`
                : `<li class='project-circle'></li><li>${item}</li>`
            )
            .join("")}
        </ul>
        <p class='project-desc'>
          ${shortDesc}
        </p>
        <ul class='project-tech'>
          ${languages
            .map((item) => `<li class='project-tag'>${item}</li>`)
            .join("")}
        </ul>
        <button id='${title}' type='button' class='project-button' onclick='showPopup("${title}")'>
          ${more}
        </button>
      </div>
    </div>
  `;
  } else {
    htmlCode += `
    <div class='card'>
      <div class='project-intro'>
        <h2 class='project-title'>${title}</h2>
        <ul class='project-details'>
          ${info
            .map((item) =>
              item === info[0]
                ? `<li>${item}</li>`
                : `<li class='project-circle'></li><li>${item}</li>`
            )
            .join("")}
        </ul>
        <p class='project-desc'>
          ${shortDesc}
        </p>
        <ul class='project-tech'>
          ${languages
            .map((item) => `<li class='project-tag'>${item}</li>`)
            .join("")}
        </ul>
        <button id='${title}' class='project-button' type='button' onclick='showPopup("${title}")'>
          ${more}
        </button>
      </div>
      <div class='card-img'>
        <img src='${image}' alt='${imageAlt}' />
      </div>
    </div>
  `;
  }
});

projectCards.innerHTML = htmlCode;

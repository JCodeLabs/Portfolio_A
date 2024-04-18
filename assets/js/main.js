/* ==================== SHADOW HEADER ==================== */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  // Add a class if the bottom offset is greater than 50 of the viewport
  header.classList.toggle("shadow-header", window.scrollY > 50);
});


/* ==================== SHOW MENU ==================== */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// hidden menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ========== remove menu mobile ========== */
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((element) => {
  element.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
  });
});


/* ==================== EMAIL JS ==================== */
const contactForm = document.getElementById("contact-form");
const responseMessage = document.getElementById("response-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publickey
  emailjs.sendForm('service_xd0aewl', 'template_70efllr', contactForm, '1XOfvggTqig1y1XpU')
  .then( () => {
    // show sucess message
    responseMessage.textContent = 'Mensaje enviado correctamente ✅';

    // Remove message after five seconds
    setTimeout(() => {
      responseMessage.textContent = '';
    }, 5000);

    // Clear input fields
    contactForm.reset();

  }, () => {
        // Show error message
        responseMessage.textContent = 'Mensaje no enviado (error del servidor) ❌';

        // Remove message after five seconds
        setTimeout(() => {
          responseMessage.textContent = '';
        }, 5000);

        // Clear input fields
        contactForm.reset();
  });
};

contactForm.addEventListener('submit', sendEmail);


/* ==================== SHOW SCROLL UP ==================== */

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */

/* ==================== DARK LIGHT THEME ==================== */

/* ==================== SCROLL REVEAL ANIMATION ==================== */

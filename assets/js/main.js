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
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
  // when the scroll is higher than 350 viewport height, add the class show-scrollup
  scrollUp.classList.toggle("show-scrollup", window.scrollY >= 350);
});


/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
// Selecciona todas las secciones del documento HTML que tienen un atributo de ID
const sections = document.querySelectorAll('section[id]');

// Define una función para activar las clases de navegación mientras se desplaza
const scrollActive = () => {
  // Obtiene la posición actual de desplazamiento vertical de la ventana
  const scrollDown = window.scrollY;

  // Itera sobre cada sección seleccionada
  sections.forEach((section) => {
    // Obtiene la altura de la sección
    const sectionHeight = section.offsetHeight;
    // Obtiene la distancia desde la parte superior de la página hasta el inicio de la sección
    const sectionTop = section.offsetTop - 58;
    // Obtiene el valor del atributo 'id' de la sección actual
    const sectionId = section.getAttribute('id');
    // Busca el elemento del menú de navegación que enlace con la sección actual
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    // Verifica si la posición de desplazamiento está dentro del rango de la sección actual
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Agrega la clase 'active-link' al elemento del menú de navegación correspondiente
      sectionsClass.classList.add('active-link');
    } else {
      // Si no está dentro del rango, elimina la clase 'active-link'
      sectionsClass.classList.remove('active-link');
    }
  });
};

// Agrega un evento de escucha de desplazamiento a la ventana que llama a la función 'scrollActive'
window.addEventListener('scroll', scrollActive);


/* ==================== DARK LIGHT THEME ==================== */


/* ==================== SCROLL REVEAL ANIMATION ==================== */

// https://github.com/bedimcode/responsive-whatches-website/blob/main/assets/js/main.js

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
  emailjs
    .sendForm(
      "service_xd0aewl",
      "template_70efllr",
      contactForm,
      "1XOfvggTqig1y1XpU"
    )
    .then(
      () => {
        // show sucess message
        responseMessage.textContent = "Mensaje enviado correctamente ✅";

        // Remove message after five seconds
        setTimeout(() => {
          responseMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        responseMessage.textContent =
          "Mensaje no enviado (error del servidor) ❌";

        // Remove message after five seconds
        setTimeout(() => {
          responseMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* ==================== SHOW SCROLL UP ==================== */
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  // when the scroll is higher than 350 viewport height, add the class show-scrollup
  scrollUp.classList.toggle("show-scrollup", window.scrollY >= 350);
});

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
// Selecciona todas las secciones del documento HTML que tienen un atributo de ID
const sections = document.querySelectorAll("section[id]");

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
    const sectionId = section.getAttribute("id");
    // Busca el elemento del menú de navegación que enlace con la sección actual
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    // Verifica si la posición de desplazamiento está dentro del rango de la sección actual
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Agrega la clase 'active-link' al elemento del menú de navegación correspondiente
      sectionsClass.classList.add("active-link");
    } else {
      // Si no está dentro del rango, elimina la clase 'active-link'
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Agrega un evento de escucha de desplazamiento a la ventana que llama a la función 'scrollActive'
window.addEventListener("scroll", scrollActive);

/* ==================== DARK LIGHT THEME ==================== */
// Obtener elementos del DOM al inicio
const themeButton = document.getElementById("theme-button");
const body = document.body;
const logo = document.getElementById("logo");

// Obtener el tema actual del localStorage o establecerlo por defecto como claro
let isLightTheme = localStorage.getItem("theme") !== "dark-theme";

// Función para actualizar el tema en el body y en el localStorage, y cambiar el src de la imagen del logo
function updateTheme() {
  // Alterna la clase "dark-theme" en el body según el estado del tema (claro u oscuro)
  body.classList.toggle("dark-theme", !isLightTheme);
  // Establece el tema actual en el localStorage según el estado del tema (claro u oscuro)
  localStorage.setItem("theme", isLightTheme ? "light-theme" : "dark-theme");
  // Establece el src de la imagen del logo según el tema actual
  logo.src = `assets/img/logo_${isLightTheme ? '64px' : 'light_64px'}.png`;
  // Cambia el ícono del botón dependiendo del tema
  themeButton.classList.toggle('ri-sun-line', !isLightTheme);
}

// Función para cambiar entre temas (claro u oscuro)
function toggleTheme() {
  // Invierte el valor de isLightTheme
  isLightTheme = !isLightTheme;
  // Actualiza el tema y la interfaz de usuario
  updateTheme();
}

// Agregar un evento de clic al botón de cambio de tema
themeButton.addEventListener("click", toggleTheme);

// Aplicar el tema inicial al cargar la página
updateTheme();

/* ==============================
            METODO 2
==============================*/
// Obtener elementos del DOM al inicio
// const themeButton = document.getElementById("theme-button");
// const body = document.body;
// const logo = document.getElementById("logo");

// // Obtener el tema actual del localStorage o establecerlo por defecto como claro
// let isLightTheme = localStorage.getItem("theme") !== "dark-theme";

// // Función para actualizar el tema en el body y en el localStorage
// function updateTheme() {
//   // Alterna la clase "light-theme" en el body según el estado del tema (claro u oscuro)
//   body.classList.toggle("light-theme", isLightTheme);
//   // Alterna la clase "dark-theme" en el body según el estado del tema (claro u oscuro)
//   body.classList.toggle("dark-theme", !isLightTheme);
//   // Establece el tema actual en el localStorage según el estado del tema (claro u oscuro)
//   localStorage.setItem("theme", isLightTheme ? "light-theme" : "dark-theme");

//   // Establecer el src de la imagen del logo según el tema actual
//   logo.src = `assets/img/logo_${isLightTheme ? '64px' : 'light_64px'}.png`;
// }

// // Evento de clic en el botón de cambio de tema
// themeButton.addEventListener("click", function() {
//     isLightTheme = !isLightTheme;
//     updateTheme();
//     themeButton.classList.toggle('ri-sun-line', !isLightTheme); // Cambia el ícono del botón
// });

// // Aplicar el tema inicial al cargar la página
// updateTheme(); // Actualizar el tema en el body
// themeButton.classList.toggle('ri-sun-line', !isLightTheme); // Agregar la clase para el icono del botón si el tema es oscuro


/* ==============================
            METODO 3
==============================*/
// // Obtener el botón de tema del DOM
// const themeButton = document.getElementById("theme-button");

// // Definir las clases de tema oscuro y de ícono
// const darkTheme = "dark-theme";
// const iconTheme = "ri-sun-line";

// // Tema previamente seleccionado (si el usuario lo seleccionó antes)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // Función para obtener el tema actual
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";

// // Función para obtener el ícono actual
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// // Validar si el usuario seleccionó previamente un tema
// if (selectedTheme) {
//   // Si se cumple la validación, ajustamos el tema y el ícono según la selección previa del usuario
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activar/desactivar el tema manualmente con el botón
// themeButton.addEventListener("click", () => {
//   // Alternar las clases de tema oscuro e ícono
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // Guardar el tema y el ícono actual seleccionados por el usuario
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });


/* ==================== SCROLL REVEAL ANIMATION ==================== */

// github.com/bedimcode/responsive-watches-website/blob/main/assets/js/main.js

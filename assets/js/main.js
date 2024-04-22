/* ==================== SHADOW HEADER ==================== */
// Selecciona el elemento del encabezado
const header = document.querySelector("header");

// Agrega un evento de escucha al desplazamiento de la ventana
window.addEventListener("scroll", () => {
  // Calcula si el desplazamiento vertical es mayor a 50 píxeles desde la parte superior
  const shouldAddShadow = window.scrollY > 50;

  // Aplica la clase "shadow-header" al encabezado si se cumple la condición, de lo contrario, la quita
  header.classList.toggle("shadow-header", shouldAddShadow);
});




/* ==================== SHOW/HIDE MENU ==================== */
// Selecciona los elementos del menú de navegación, el botón de alternar y el botón de cierre
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Si existe el botón de alternar, agrega un evento de clic para mostrar el menú
if (navToggle) {
  navToggle.addEventListener("click", () => {
    // Agrega la clase "show-menu" al menú para mostrarlo
    navMenu.classList.add("show-menu");
  });
}

// Si existe el botón de cierre, agrega un evento de clic para ocultar el menú
if (navClose) {
  navClose.addEventListener("click", () => {
    // Quita la clase "show-menu" del menú para ocultarlo
    navMenu.classList.remove("show-menu");
  });
}

/* ========== remove menu mobile ========== */
// Selecciona todos los elementos con la clase "nav__link"
const navLinks = document.querySelectorAll(".nav__link");

// Agrega un evento de clic a cada enlace de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Selecciona el menú de navegación
    const navMenu = document.getElementById("nav-menu");
    
    // Oculta el menú de navegación eliminando la clase "show-menu"
    navMenu.classList.remove("show-menu");
  });
});




/* ==================== EMAIL JS ==================== */
// Selecciona el formulario de contacto y el elemento de respuesta
const contactForm = document.getElementById("contact-form");
const responseMessage = document.getElementById("response-message");

// Función para mostrar un mensaje y limpiar los campos del formulario
const showMessageAndResetForm = (message) => {
  // Muestra el mensaje recibido
  responseMessage.textContent = message;

  // Elimina el mensaje después de cinco segundos
  setTimeout(() => {
    responseMessage.textContent = "";
  }, 5000);

  // Limpia los campos de entrada del formulario
  contactForm.reset();
};

// Función para enviar el correo electrónico
const sendEmail = (e) => {
  // Previene el comportamiento predeterminado de enviar el formulario
  e.preventDefault();

  // Envía el formulario utilizando la API de emailjs
  emailjs
    .sendForm(
      "service_xd0aewl",
      "template_70efllr",
      contactForm,
      "1XOfvggTqig1y1XpU"
    )
    .then(
      () => {
        // Muestra un mensaje de éxito y limpia los campos del formulario
        showMessageAndResetForm("Mensaje enviado correctamente ✅");
      },
      () => {
        // Muestra un mensaje de error en caso de fallo en el servidor y limpia los campos del formulario
        showMessageAndResetForm("Mensaje no enviado (error del servidor) ❌");
      }
    );
};

// Agrega un evento de escucha al enviar el formulario
contactForm.addEventListener("submit", sendEmail);




/* ==================== SHOW SCROLL UP ==================== */
// Selecciona el botón de scroll-up
const scrollUp = document.getElementById("scroll-up");

// Función para controlar la visibilidad del botón de scroll-up
const toggleScrollUpButton = () => {
  // Agrega o quita la clase "show-scrollup" dependiendo del valor de window.scrollY
  scrollUp.classList.toggle("show-scrollup", window.scrollY >= 350);
};

// Agrega un evento de escucha al desplazamiento de la ventana
window.addEventListener("scroll", toggleScrollUpButton);






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




/* ==================== SCROLL REVEAL ANIMATION ==================== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'});
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'});
sr.reveal(`.services__card, .projects__card`, {interval: 100});
// const toggleTheme = document.getElementById('toggle-theme');
// const toggleIcon = document.getElementById('toggle-icon');
// const toggleText = document.getElementById('toggle-text');

// const toggleColors = document.getElementById("toggle-colors");

// const rootStyles = document.documentElement.style;

// toggleTheme.addEventListener('click', () => {
//     document.body.classList.toggle("dark");
//     if (toggleIcon.src.includes("moon.svg")) {
//         toggleIcon.src = "assets/icons/sun.svg";
//         toggleText.textContent = "Light Mode";
//     } else {
//         toggleIcon.src = "assets/icons/moon.svg";
//         toggleText.textContent = "Dark Mode";
//     }
// })
// toggleColors.addEventListener('click', (e) => {
//     rootStyles.setProperty('--primary-color', e.target.dataset.color)
// })


// Seleccionamos los elementos del DOM que vamos a usar
// Seleccionamos los elementos del DOM que vamos a usar
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById("toggle-colors");

// Obtener el estilo del elemento raíz (html) para cambiar variables CSS
const rootStyles = document.documentElement.style;

// Evento para cambiar entre el modo claro y oscuro
toggleTheme.addEventListener('click', () => {
    // Alternamos la clase 'dark' en el cuerpo del documento
    document.body.classList.toggle("dark");

    // Cambiamos el ícono y el texto según el modo actual
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icons/sun.svg"; // Cambiamos al icono de sol
        toggleText.textContent = "Light Mode";   // Cambiamos el texto a "Light Mode"
    } else {
        toggleIcon.src = "assets/icons/moon.svg"; // Cambiamos al icono de luna
        toggleText.textContent = "Dark Mode";     // Cambiamos el texto a "Dark Mode"
    }
});

// Evento para cambiar el color primario de la página
toggleColors.addEventListener('click', (e) => {
    // Cambiamos la propiedad CSS 'primary-color' con base en el color seleccionado
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});

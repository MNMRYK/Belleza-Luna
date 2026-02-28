// Función que añade la clase 'visible' cuando la sección entra en pantalla
const aparecerAlScroll = () => {
    const secciones = document.querySelectorAll('.seccion-nosotros, .seccion-servicios, .seccion-reservas');
    
    secciones.forEach(seccion => {
        const posicionSeccion = seccion.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight / 1.3; // Ajuste para que aparezca un poco antes

        if (posicionSeccion < alturaPantalla) {
            seccion.classList.add('visible');
        }
    });
};

// Escuchamos el evento de scroll
window.addEventListener('scroll', aparecerAlScroll);
// --- CÓDIGO PARA EL MENÚ HAMBURGUESA ---
const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
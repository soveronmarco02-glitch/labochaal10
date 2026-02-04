// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("La Bocha al 10 - Web Cargada");

    // Efecto de scroll para el navbar
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.5rem 5%";
            navbar.style.background = "#ffffffef";
        } else {
            navbar.style.padding = "1rem 5%";
            navbar.style.background = "#ffffff";
        }
    };

    // Función básica para agregar al carrito (ejemplo)
    const btnsCompra = document.querySelectorAll('.btn-buy');
    btnsCompra.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('¡Producto añadido al carrito! No es un deporte, es una pasión.');
        });
    });
});

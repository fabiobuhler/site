// script.js

// Seleciona o botão de toggle do menu e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adiciona um evento de clique ao botão de toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fecha o menu quando um link é clicado (opcional)
const navLinks = document.querySelectorAll('.nav-menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

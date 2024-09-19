// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle do Menu Responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Alterna o atributo aria-label para acessibilidade
            const isActive = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-label', isActive ? 'Fechar Menu' : 'Abrir Menu');
        });
    }

    // Fechar o menu ao clicar em um link (opcional)
    const navLinks = document.querySelectorAll('.nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-label', 'Abrir Menu');
            }
        });
    });

    // Smooth Scroll para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validação Básica do Formulário (Opcional)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            // Implementar validações adicionais se necessário
            // Por exemplo, verificar se o telefone está no formato correto
            const phone = document.getElementById('phone').value;
            const phonePattern = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

            if (!phonePattern.test(phone)) {
                e.preventDefault();
                alert('Por favor, insira o telefone no formato (XX) XXXXX-XXXX.');
            }
        });
    }
});

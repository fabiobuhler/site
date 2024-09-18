// script.js

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
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

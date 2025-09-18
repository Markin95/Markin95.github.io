document.addEventListener("DOMContentLoaded", function() {
    
    // Configuração do Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona todos os elementos que devem ser animados
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Observa cada elemento
    hiddenElements.forEach(el => observer.observe(el));

});
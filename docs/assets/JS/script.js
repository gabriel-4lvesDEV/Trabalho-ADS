// Script para alternar a visibilidade das respostas
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    // Inicialmente oculta a resposta
    answer.style.display = 'none';

    question.addEventListener('click', () => {
        // Alterna a visibilidade da resposta
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
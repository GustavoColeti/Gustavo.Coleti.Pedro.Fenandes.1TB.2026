document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-force');
    const body = document.body;
    const actionButtons = document.querySelectorAll('.effect-btn');

    // 1. Efeito de Mudar o Lado da Força (Luz / Trevas) com Flash
    toggleBtn.addEventListener('click', () => {
        // Cria um elemento de flash na tela
        const flash = document.createElement('div');
        flash.classList.add('flash-effect');
        body.appendChild(flash);
        
        // Remove o flash depois que a animação acaba
        setTimeout(() => flash.remove(), 400);

        // Alterna as classes
        if (body.classList.contains('dark-side')) {
            body.classList.remove('dark-side');
            body.classList.add('light-side');
            toggleBtn.textContent = "Voltar para o Lado Sombrio";
        } else {
            body.classList.remove('light-side');
            body.classList.add('dark-side');
            toggleBtn.textContent = "Alternar Lado da Força";
        }
    });

    // 2. Efeito "Explosivo" nos botões dos Cards
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Evita que o clique faça outra coisa indesejada
            e.stopPropagation();

            const card = button.closest('.theory-card');
            
            // Adiciona efeito de tremor (shake) no card inteiro
            card.classList.add('shake');
            
            // Muda temporariamente o texto do botão para simular ativação
            const originalText = button.textContent;
            button.textContent = "HOLOCRON ABERTO!";
            button.style.backgroundColor = 'white';
            button.style.color = 'black';

            // Remove os efeitos após a animação acabar (200ms)
            setTimeout(() => {
                card.classList.remove('shake');
            }, 200);

            // Reseta o botão após 1.5 segundos
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
                button.style.color = '';
            }, 1500);
        });
    });
});
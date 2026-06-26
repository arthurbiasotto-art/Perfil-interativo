// Animação das barras de progresso
function moveSkill(id, targetWidth) {
    const element = document.getElementById(id);
    element.style.width = targetWidth + '%';
    
    // Impede que adicione o texto da porcentagem múltiplas vezes
    if (!element.innerText.includes('%')) {
        element.innerText = element.innerText + ' (' + targetWidth + '%)';
    }
}

// Resposta do Quiz
function checkAnswer(selectedOption, isCorrect) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    const resultDiv = document.getElementById('quiz-result');

    if (isCorrect) {
        selectedOption.classList.add('correct');
        resultDiv.innerHTML = "🎉 Exatamente! Meu grande objetivo é dominar as técnicas da confeitaria e criar meus próprios doces como Chef.";
        resultDiv.style.color = "#00b894";
        resultDiv.style.backgroundColor = "#e6f8f4";
    } else {
        selectedOption.classList.add('incorrect');
        resultDiv.innerHTML = "✨ Quase! Embora eu adore tudo listado, meu foco de carreira principal está na Confeitaria!";
        resultDiv.style.color = "#ff7675";
        resultDiv.style.backgroundColor = "#fff0f0";
        
        options.forEach(opt => {
            if (opt.textContent.includes("Chef Confeiteiro")) {
                opt.classList.add('correct');
            }
        });
    }
}

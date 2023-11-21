document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do carrossel
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');

    // Adiciona botões de próxima e anterior
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.addEventListener('click', showPreviousImage);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Próxima';
    nextButton.addEventListener('click', showNextImage);

    // Adiciona os botões à página
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);

    // Inicializa o índice da imagem atual
    let currentIndex = 0;

    // Função para mostrar a próxima imagem no carrossel
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    // Função para mostrar a imagem anterior no carrossel
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Função para atualizar a exibição do carrossel
    function updateCarousel() {
        console.log(currentIndex);
        images.forEach((image, index) => {
            if (index === currentIndex) {
                image.classList.remove('active');
            } else {
                image.classList.add('active');
            }
        });
    }
});

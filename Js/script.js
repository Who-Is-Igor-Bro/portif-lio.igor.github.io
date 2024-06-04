
document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const images = carouselImages.querySelectorAll('img');

    // Gerar os indicadores (bolinhas)
    images.forEach((image, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
    });

    // Atualizar indicadores ao rolar o carrossel
    carouselImages.addEventListener('scroll', () => {
        const scrollPosition = carouselImages.scrollLeft;
        const totalWidth = carouselImages.scrollWidth - carouselImages.clientWidth;
        const index = Math.round((scrollPosition / totalWidth) * (images.length - 1));

        document.querySelectorAll('.carousel-indicators .indicator').forEach(indicator => {
            indicator.classList.remove('active');
        });
        document.querySelector(`.carousel-indicators .indicator[data-index="${index}"]`).classList.add('active');
    });

    // Fazer com que os indicadores naveguem pelo carrossel ao serem clicados
    indicatorsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('indicator')) {
            const index = e.target.dataset.index;
            const imageWidth = carouselImages.querySelector('img').clientWidth;
            carouselImages.scrollLeft = index * imageWidth;
        }
    });
});

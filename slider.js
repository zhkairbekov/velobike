// Массив фоновых изображений для больших экранов
const desktopImages = [
    'img/slider/1.jpg',
    'img/slider/2.jpg',
    'img/slider/3.jpg',
    'img/slider/4.jpg',
    'img/slider/5.jpg'
];

// Массив фоновых изображений для маленьких экранов
const mobileImages = [
    'img/slider/Frame1.png',
    'img/slider/Frame2.png',
    'img/slider/Frame3.png',
    'img/slider/Frame4.png',
    'img/slider/Frame5.png'
];

let currentIndex = 0;
const slider = document.getElementById('slider');

// Функция для получения актуального массива изображений
function getCurrentImages() {
    return window.innerWidth <= 768 ? mobileImages : desktopImages;
}

// Функция для смены фона
function changeBackground() {
    const images = getCurrentImages();
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Обновление currentIndex при изменении размера окна,
// чтобы избежать выхода за границы нового массива
window.addEventListener('resize', () => {
    const images = getCurrentImages();
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
});

// Старт
changeBackground(); // Установить первый фон сразу
setInterval(changeBackground, 8000); // Менять фон каждые 8 секунд



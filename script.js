// header
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

//dropdown menu
// Получаем текущий язык из <html lang="...">
const currentLang = document.documentElement.lang;

// Элементы
const languageButton = document.getElementById('language-button');
const languageDropdown = document.getElementById('language-dropdown');

// Устанавливаем заголовок кнопки по умолчанию
languageButton.textContent = currentLang.toUpperCase();

// Переключаем открытие/закрытие выпадающего списка
languageButton.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
});

// При выборе нового языка
languageDropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedLang = e.target.getAttribute('data-lang');

        // Меняем lang на странице
        document.documentElement.lang = selectedLang;

        // Меняем текст кнопки
        languageButton.textContent = selectedLang.toUpperCase();

        // Закрываем список
        languageDropdown.classList.remove('active');
    }
});

// Дополнительно — закрытие при клике вне меню
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageDropdown.classList.remove('active');
    }
});


// Массив фоновых изображений
const images = [
    'img/slider/1.jpg',
    'img/slider/2.jpg',
    'img/slider/3.jpg',
    'img/slider/4.jpg'
];

let currentIndex = 0;
const slider = document.getElementById('slider');

// Функция для смены фона
function changeBackground() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Старт
changeBackground(); // Установить первый фон сразу
setInterval(changeBackground, 8000); // Менять фон каждые 5 секунд

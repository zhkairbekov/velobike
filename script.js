document.addEventListener('DOMContentLoaded', function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [51.1194, 71.4311], // Координаты города Нур-Султан
            zoom: 13
        });

        // Отключение скролла на карте
        myMap.behaviors.disable('scrollZoom');

        // Места расположения станций
        var stations = [
            { lat: 51.1194, lon: 71.4311 },
            { lat: 51.1234, lon: 71.4356 },
            // Другие точки...
        ];

        // Отображение станций на карте
        stations.forEach(function (station) {
            var placemark = new ymaps.Placemark([station.lat, station.lon], {}, {});
            myMap.geoObjects.add(placemark);
        });
    });

    // Массив статей
    const newsList = document.getElementById('news-list');

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        if (document.documentElement.lang === 'kz') {
            return date.toLocaleDateString('kz-KZ', options);
        }
        if (document.documentElement.lang === 'ru') {
            return date.toLocaleDateString('ru-RU', options);
        }
    }

    if (document.documentElement.lang === 'kz') {
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'news-item';
            card.innerHTML = `
            <img class="news-item-img" src="img/news/${article.image}" alt="${article.title}" />
            <h3>${article.title}</h3>
            <p class="news-date">${formatDate(article.date)}</p>
            <p>${article.summary}</p>
            <a href="pages/kz/news_detail.html?id=${article.id}" class="read-more">Толығырақ оқыңыз</a>
        `;
            newsList.appendChild(card);
        });
    }
    if (document.documentElement.lang === 'ru') {
        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'news-item';
            card.innerHTML = `
            <img class="news-item-img" src="img/news/${article.image}" alt="${article.title}" />
            <h3>${article.title}</h3>
            <p class="news-date">${formatDate(article.date)}</p>
            <p>${article.summary}</p>
            <a href="pages/ru/news_detail.html?id=${article.id}" class="read-more">Читать далее</a>
        `;
            newsList.appendChild(card);
        });
    }
});

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



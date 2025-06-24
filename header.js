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

// Дополнительно — закрытие при клике вне меню
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-selector')) {
        languageDropdown.classList.remove('active');
    }
});

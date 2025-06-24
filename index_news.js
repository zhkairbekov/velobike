document.addEventListener('DOMContentLoaded', function () {
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
document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'news-item';
        card.innerHTML = `
            <img class="news-item-img" src="../../${article.image}" alt="${article.title}" />
            <h3>${article.title}</h3>
            <p>${article.date}</p>
            <p>${article.summary}</p>
            <a href="news_detail.html?id=${article.id}" class="read-more">Читать далее</a>
        `;
        newsList.appendChild(card);
    });
});

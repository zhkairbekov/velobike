document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    const container = document.getElementById('news-content');
    const article = articles.find(a => a.id === articleId);

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

    if (article) {
        container.innerHTML = `
            <div class="news-detail-item">
                <a href="news.html" class="back-link">Назад к новостям</a>
                <div class="news-detail-header">
                    <p class="news-date">${formatDate(article.date)}</p>
                </div>
                <img class="news-detail-img" src="../../img/news/${article.image}" alt="${article.title}" />
                <div>${marked.parse(article.content)}</div>
            </div>
        `;
    } else {
        if (document.documentElement.lang === 'kz') {
            container.innerHTML = '<p>Жаңалық табылмады</p>';
        }
        if (document.documentElement.lang === 'ru') {
            container.innerHTML = '<p>Новость не найдена</p>';
        }
    }
});

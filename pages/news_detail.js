document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');

    const container = document.getElementById('news-content');
    const article = articles.find(a => a.id === articleId);

    if (article) {
        container.innerHTML = `
            <div class="news-detail-item">
                <a href="news.html" class="back-link">Назад к новостям</a>
                <div class="news-detail-header">
                    <p><em>${article.date}</em></p>
                </div>
                <img class="news-detail-img" src="../../${article.image}" alt="${article.title}" />
                <div>${marked.parse(article.content)}</div>
            </div>
        `;
    } else {
        container.innerHTML = '<p>Новость не найдена</p>';
    }
});

document.addEventListener("DOMContentLoaded",()=>{let e=new URLSearchParams(window.location.search),n=e.get("id"),t=document.getElementById("news-content"),a=articles.find(e=>e.id===n);function i(e){let n=new Date(e),t={day:"numeric",month:"long",year:"numeric"};return"kz"===document.documentElement.lang?n.toLocaleDateString("kz-KZ",t):"ru"===document.documentElement.lang?n.toLocaleDateString("ru-RU",t):void 0}a?t.innerHTML=`
            <div class="news-detail-item">
                <a href="news.html" class="back-link">Назад к новостям</a>
                <div class="news-detail-header">
                    <p class="news-date">${i(a.date)}</p>
                </div>
                <img class="news-detail-img" src="../../img/news/${a.image}" alt="${a.title}" />
                <div>${marked.parse(a.content)}</div>
            </div>
        `:("kz"===document.documentElement.lang&&(t.innerHTML="<p>Жаңалық табылмады</p>"),"ru"===document.documentElement.lang&&(t.innerHTML="<p>Новость не найдена</p>"))});
document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("news-list");function t(e){let t=new Date(e),a={day:"numeric",month:"long",year:"numeric"};return"kz"===document.documentElement.lang?t.toLocaleDateString("kz-KZ",a):"ru"===document.documentElement.lang?t.toLocaleDateString("ru-RU",a):void 0}"kz"===document.documentElement.lang&&articles.forEach(a=>{let n=document.createElement("div");n.className="news-item",n.innerHTML=`
            <img class="news-item-img" src="../../img/news/${a.image}" alt="${a.title}" />
            <h3>${a.title}</h3>
            <p class="news-date">${t(a.date)}</p>
            <p>${a.summary}</p>
            <a href="news_detail.html?id=${a.id}" class="read-more">Толығырақ оқыңыз</a>
        `,e.appendChild(n)}),"ru"===document.documentElement.lang&&articles.forEach(a=>{let n=document.createElement("div");n.className="news-item",n.innerHTML=`
            <img class="news-item-img" src="../../img/news/${a.image}" alt="${a.title}" />
            <h3>${a.title}</h3>
            <p class="news-date">${t(a.date)}</p>
            <p>${a.summary}</p>
            <a href="news_detail.html?id=${a.id}" class="read-more">Читать далее</a>
        `,e.appendChild(n)})});
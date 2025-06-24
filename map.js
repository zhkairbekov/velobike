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
});
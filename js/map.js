ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.576569, 37.116807],
            zoom: 17,
            controls: ['zoomControl','geolocationControl']
        });

        var myPlacemark = new ymaps.Placemark([55.576569, 37.116807],{} , {
            iconImageSize : [32, 40]
        })
        myMap.geoObjects.add(myPlacemark);
    }
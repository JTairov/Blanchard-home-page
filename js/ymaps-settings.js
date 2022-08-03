ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758468, 37.601088],
            zoom: 14,
            controls: [],
        });

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        	}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/locator.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-5, -38]
        	});

        myMap.geoObjects.add(myPlacemark)

        myMap.behaviors
            .disable(['scrollZoom'])
            .disable(['drag','multiTouch'])
    }
function initMap() {
    const centroMapa = { lat: -34.659606, lng: -58.467976 };
    const mapa = new google.maps.Map(document.getElementById('map-container'), {
        center: centroMapa,
        zoom: 11,
    });
    const marcador = new google.maps.Marker({
        position: centroMapa,
        map: mapa,
        title: 'Mi Marcador',
    });
}

function cargarScript() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB56Sn2OaVhmIdA-K-uf5ONRzr02CiuRWU&callback=initMap';
    script.async = true;
    script.defer = true;

    script.onerror = function () {
        console.error('Error al cargar el script de Google Maps.');
    };

    document.head.appendChild(script);
}


cargarScript();
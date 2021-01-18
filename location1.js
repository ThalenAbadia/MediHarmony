var map;
function initMap() {
        // Create the map
        //var lat = parseFloat(document.getElementById("userInput").value);
        //var lng = parseFloat(document.getElementById("userInput1").value);
    
        //
    if (navigator.geolocation) {
        try {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pyrmont = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        } catch (err) {

        }
    }
    map = new google.maps.Map(document.getElementById('map')), {
        center: {lat: +lat, lng: +lng},
        zoom: 17
    };

  // Find you location


    // Create the places service.
    var service = new google.maps.places.PlacesService(map);

    // Perform a nearby search.
    service.nearbySearch({
            location: pyrmont,
            radius: 5000,
            type: ['hospital']
        },
        function(results, status, pagination) {
            if (status !== 'OK') return;

            createMarkers(results);
            getNextPage = pagination.hasNextPage && function() {
                pagination.nextPage();
            };
        });
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });
        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}
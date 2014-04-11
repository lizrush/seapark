function codeAddress() {
  var address = document.getElementById('address').value;

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        if(marker)
          marker.setMap(null);
        marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            draggable: false
        });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
    });
  }


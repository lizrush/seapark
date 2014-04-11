$(document).ready(function() {
  $("#search-parking").click(function() {
    var geocoder;
    var map;
    var marker;

    function initialize() {
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(47.6089968, -122.3337871);
      var mapOptions = {
        zoom: 14,
        center: latlng
      }
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      codeAddress();
    }

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
  });
});

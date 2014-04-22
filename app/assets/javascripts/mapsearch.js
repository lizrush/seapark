// This is the search method using google's geocoder API. This works best with addresses and well known landmarks but isn't fuzzy enough for generic searches like "Greenlake". Future work could include using a more fuzzy search within the scope of the current city.
function codeAddress() {
  geocoder = new google.maps.Geocoder();
  var address = document.getElementById('address').value;

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      // centers the map on the first result
        map.setCenter(results[0].geometry.location);
        // drops a marker on the location of the first result.
        window.marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            draggable: false
        });
        } else {
          alert('Sorry, search was not successful for the following reason: \n' + status);
        }
    });
  };

// calls codeAddress when the user has pressed enter on a search
$(document).ready(function(){
  $('#address').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == 13) {
      codeAddress();
    };
  });
});

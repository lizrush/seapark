function set_overlay(url){

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var imageBounds = document.getElementById('bbox').innerHTML;

  parkingOverlay = new google.maps.GroundOverlay(url, imageBounds);
  parkingOverlay.setMap(map);
}

function set_overlay(url){

  var map = window.map
  var imageBounds = window.map.getBounds().toString();

  parkingOverlay = new google.maps.GroundOverlay(url, imageBounds);
  parkingOverlay.setMap(map);
}

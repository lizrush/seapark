function set_overlay(){

  var imageBounds = window.map.getBounds();

  parkingOverlay = new google.maps.GroundOverlay(url, imageBounds);
  parkingOverlay.setMap(map);
}


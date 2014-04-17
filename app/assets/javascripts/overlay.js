function set_overlay(data){
  // parses out url and lats/longs necessary to place the overlay based on the request's bounds and not the current map's bounds
  url     = data.overlay.url
  swlat   = data.bounds.replace(/[()]/g, "").split(",")[0]
  swlong  = data.bounds.replace(/[()]/g, "").split(",")[1]
  nelat   = data.bounds.replace(/[()]/g, "").split(",")[2]
  nelong  = data.bounds.replace(/[()]/g, "").split(",")[3]
  swLL    = new google.maps.LatLng(swlat, swlong)
  neLL    = new google.maps.LatLng(nelat, nelong)

  // created new bounds object for overlay
  imageBounds = new google.maps.LatLngBounds(swLL, neLL)

  // fetches png fron url and creates overlay object to place on map bound to the request's bounds
  parkingOverlay = new google.maps.GroundOverlay(url, imageBounds);
  parkingOverlay.setMap(map);
}

function set_overlay(data){
  // parses out url and lats/longs necessary to place the overlay based on the request's bounds and not the current map's bounds
  url     = "http://ec2-54-186-130-90.us-west-2.compute.amazonaws.com/" + data.overlay.url
  clean_bounds = data.bounds.replace(/[()]/g, "").split(",")
  swlat   = clean_bounds[0]
  swlong  = clean_bounds[1]
  nelat   = clean_bounds[2]
  nelong  = clean_bounds[3]
  swLL    = new google.maps.LatLng(swlat, swlong)
  neLL    = new google.maps.LatLng(nelat, nelong)

  // created new bounds object for overlay
  imageBounds = new google.maps.LatLngBounds(swLL, neLL)

  // fetches png fron url and creates overlay object to place on map bound to the request's bounds
  parkingOverlay = new google.maps.GroundOverlay(url, imageBounds);
  parkingOverlay.setMap(map);
  window.parkOverlay = parkingOverlay
};

// this method is an onclick event for find parking that removes the last overlay, no matter the zoon level. ideally this could be updated to have a map event listener on drag to just clear and make a new call but for now the user must click 'find parking'
function removeOverlay(){
  if (typeof parkOverlay != 'undefined') {
   parkOverlay.setMap(null);
  };
};

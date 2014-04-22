function getParking(){
  removeOverlay();
  // Before making the call to the API, this will toggle the mapOptions so that the user cannot drag to a new location or zoom in or out. This prevents the user from changing the view of the map before the overlay is placed.
  // Toggle the semi-transparent div with loading gif and set the text so that the user knows the app is still running.
  map.setOptions(window.disabled_map);
  document.getElementById('current').innerHTML = "Retrieving data...";
  document.getElementById('loading').style.visibility = "visible";

  // Set variables for making the call to the API. If the map_canvas size changes, be sure to update here.
  // Center is the map's center, NOT the user's location by default. This data is used for validations, query limits to the API, and caching.
  var bbox = map.getBounds().toString();
  console.log("bbox: \n" + bbox);
  var center = map.getCenter().toString();
  console.log("center: \n" + center);

  var map_size = "400,400";

  $.ajax({
    url: "http://ec2-54-186-130-90.us-west-2.compute.amazonaws.com/requests",
    type: 'POST',
    dataType: 'json',
    data: {request: {coords: center, bounds: bbox, size: map_size }},
    success: function(data, textStatus, xhr) {
      // The API returns a url to the png overlay for the map. We pass this in to the overlay method.
      window.set_overlay(data)
      // Re-enable the map so the user can browse nearby or change location after the call is completed & hide the loading div.
      map.setOptions(enabled_map);
      document.getElementById('loading').style.visibility = "hidden";
    },

    error: function(xhr, textStatus, errorThrown) {
      // On failure, we alert with js popup, re-enable the map and hide the loader div.
      window.error_overlay(xhr.responseText);
      document.getElementById('loading').style.visibility = "hidden";

    }
  });
  return false;
};

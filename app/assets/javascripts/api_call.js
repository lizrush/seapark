$(document).ready(function() {
  $("#find-parking").click(function() {

    map.setOptions(window.disabled_map);

    var bbox = map.getBounds().toString();
    var center = mapcenter;
    var map_size = "500,500";

    $.ajax({
      url: "http://seapark-api.herokuapp.com/requests",
      type: 'POST',
      dataType: 'json',
      data: {request: {coords: center, bounds: bbox, size: map_size }},
      success: function(data, textStatus, xhr) {
        url = data.url
        window.set_overlay(url)
      map.setOptions(window.enabled_map);

      },

      error: function(xhr, textStatus, errorThrown) {
        alert("We're sorry, something when wrong! Please try again.");
      }
    });

    return false;

  });
});

$(document).ready(function() {
  $("#find-parking").click(function() {

    map.setOptions(window.disabled_map);
    document.getElementById('current').innerHTML = "Retrieving data...";
    document.getElementById('loading').style.visibility = "visible";

    var bbox = map.getBounds().toString();
    var center = mapcenter;
    var map_size = "400,400";

    $.ajax({
      url: "http://ec2-54-186-130-90.us-west-2.compute.amazonaws.com/requests",
      type: 'POST',
      dataType: 'json',
      data: {request: {coords: center, bounds: bbox, size: map_size }},
      success: function(data, textStatus, xhr) {
        url = data.url
        window.set_overlay(url)
        map.setOptions(window.enabled_map);
        document.getElementById('loading').style.visibility = "hidden";
      },

      error: function(xhr, textStatus, errorThrown) {
        alert("We're sorry, something when wrong! Please try again.");
        document.getElementById('loading').style.visibility = "hidden";
      }
    });

    return false;

  });
});

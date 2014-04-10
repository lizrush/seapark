$(document).ready(function() {
  $("#find-parking").click(function() {

    var bbox = window.map.getBounds();
    var center = document.getElementById('lat-longs').innerHTML;
    var map_size = "500,500";

    $.ajax({
      url: "/requests",
      type: 'POST',
      dataType: 'json',
      data: {request: {coords: center, bounds: bbox, size: map_size }},
      success: function(data, textStatus, xhr) {
        url = data.overlay.url
        // window.set_overlay
        set_overlay(url)

      },
      error: function(xhr, textStatus, errorThrown) {
        alert(center + " \n " + bbox + " \n " + map_size);
      }
    });
    return false;
  });
});


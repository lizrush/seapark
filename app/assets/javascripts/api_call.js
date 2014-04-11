$(document).ready(function() {
  $("#find-parking").click(function() {

    var bbox = map.getBounds().toString();
    var center = map.marker;
    var map_size = "500,500";

    $.ajax({
      url: "http://localhost:4000/requests",
      type: 'POST',
      dataType: 'json',
      data: {request: {coords: center, bounds: bbox, size: map_size }},
      success: function(data, textStatus, xhr) {
        console.log(data)
        url = data.url
        window.set_overlay(url)
      },
      error: function(xhr, textStatus, errorThrown) {
        alert("fail\n" + center + " \n " + bbox + " \n " + map_size);
      }
    });
    return false;
  });
});


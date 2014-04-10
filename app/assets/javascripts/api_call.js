$(document).ready(function() {
  $("#find-parking").click(function() {

    var bbox = document.getElementById('bbox').innerHTML;
    var center = document.getElementById('lat-longs').innerHTML;
    var map_size = "500,500";

    $.ajax({
      url: "http://localhost:3000/requests",
      type: 'POST',
      dataType: 'json',
      data: {center: center, bbox: bbox, map_size: map_size },
      success: function(data, textStatus, xhr) {
        // // get url and then do stuff
        console.log(data)
        url = data
        overlay.init(url)
      },
      error: function(xhr, textStatus, errorThrown) {
        alert(center + " \n " + bbox + " \n " + map_size);
      }
    });
    return false;
  });
});


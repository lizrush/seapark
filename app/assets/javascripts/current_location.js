    function initialiseMap()
    {
        var myOptions = {
            zoom: 16,
            mapTypeControl: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
      map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    }
    function initialise()
    {
      if(geoPosition.init())
      {
        // replace laoding html with graphic something or other
        document.getElementById('current').innerHTML="Loading...";
        geoPosition.getCurrentPosition(showPosition,function(){document.getElementById('current').innerHTML="Couldn't get location; try reloading the page"},{enableHighAccuracy:true});
      }
      else
      {
        // replace not available with graphic something or other
        document.getElementById('current').innerHTML="Functionality not available";
      }
    }

    function showPosition(p)
    {
      var latitude = parseFloat( p.coords.latitude );
      var longitude = parseFloat( p.coords.longitude );
      document.getElementById('lat-longs').innerHTML= latitude + "," + longitude;
      var pos = new google.maps.LatLng( latitude , longitude);
      map.setCenter(pos);
      map.setZoom(16);

      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title:"You are here",
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      document.getElementById('bbox').innerHTML=  map.getBounds();
      window.map = map
      console.log(window.map.getBounds().toString())
    }

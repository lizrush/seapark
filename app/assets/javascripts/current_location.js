function initialiseMap()
    {
        var myOptions = {
            zoom: 12,
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
        console.log(document.getElementById('loading'));

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
      var pos = new google.maps.LatLng( latitude , longitude);
      map.setCenter(pos);
      map.setZoom(16);

      var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "You are here",
      });

      window.disabled_map = {
          zoomControl: false,
          scaleControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          draggable: false,
        };
      window.enabled_map =  {
          zoomControl: true,
          scaleControl: true,
          scrollwheel: true,
          disableDoubleClickZoom: false,
          draggable: true,
        };
      window.mapcenter = pos.toString();
      window.map = map
    }

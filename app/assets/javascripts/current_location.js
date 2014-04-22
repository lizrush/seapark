function initialiseMap()
    {
      // Set the map options below. The options that are manipulated during the API call can be found on lines 43..55.
        var myOptions = {
            zoom: 12,
            mapTypeControl: true,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
      map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    };

    function initialise() {
      if(geoPosition.init())
      { // Setting the text for the loading div.
        geoPosition.getCurrentPosition(showPosition,showError,{enableHighAccuracy:true});
        document.getElementById('current').innerHTML = "Loading...";
      } else { // Sets text for loader div. Could replace with nice grapic in future.
        document.getElementById('current').innerHTML="Functionality not available";
      }
    };

    function showPosition(p) {
      // parse the coordinated and create a new Marker object to place on the map and set the center to that marker.
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

      // 'window.' is used here to give greater scope to these variables that are used in the API call script & elsewhere.
      window.disabled_map = {
          zoomControl: false,
          scaleControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          draggable: false,
          disableDefaultUI: true,
          mapTypeControl: false,
        };
      window.enabled_map =  {
          zoomControl: true,
          scaleControl: true,
          scrollwheel: true,
          disableDoubleClickZoom: false,
          draggable: true,
          disableDefaultUI: false,
          mapTypeControl: true,
        };
      window.map = map;
      window.marker = marker;

      // Hides the loading div once the map has displayed the current user's location.
      document.getElementById('loading').style.visibility = "hidden";

      // removes the overlay when the user zooms in or out
      google.maps.event.addListener(map, 'zoom_changed', function() {
        parkOverlay.setMap(null);
      });

      google.maps.event.addListener(map, 'dragend', function(){
        getParking();
      });
    };

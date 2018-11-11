// This example displays a marker at the center of Australia.
      // When the user clicks the marker, an info window opens.
      // The maximum width of the info window is set to 200 pixels.

      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var contentString = 
			'<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">TitleHere</h1>'+
            '<div id="bodyContent">'+
            '<p>Description Here</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        var marker1 = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker1.addListener('click', function() {
          infowindow.open(map, marker);
        });
		
      }
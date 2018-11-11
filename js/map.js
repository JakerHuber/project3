          var map;
          function initMap() {
			  //initializes map
			  map = new google.maps.Map(document.getElementById('canvas3'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 2,
			  mapTypeId: 'terrain'
            });
			
					
			// Create a <script> tag and set the USGS URL as the source.
			var script = document.createElement('script');
			script.src = 'js/jacob_GeoJSONP.js';
			document.getElementsByTagName('head')[0].appendChild(script);
			
			// create markers if i feel like it
			
			
          }
		  
		  // Loop through the results array and place a marker for each
			// set of coordinates.
			window.eqfeed_callback = function(results) {
				for (var i = 0; i < results.features.length; i++) {
				var coords = results.features[i].geometry.coordinates;
				var latLng = new google.maps.LatLng(coords[1],coords[0]);
				var marker = new google.maps.Marker({
					position: latLng,
					map: map
					});
				}
			}
			
			
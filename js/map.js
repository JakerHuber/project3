          var map;
		  function initMap() {
			  //initializes map
			  var myLocation = new google.maps.LatLng(41.950,-87.786);
			  var map = new google.maps.Map(document.getElementById('canvas3'), {
              center: myLocation,
              zoom: 8,
			  mapTypeId: 'terrain'
            });
			
			alert('it works');	

	

			
					
			// Create a <script> tag and set the USGS URL as the source. 
			
			var script = document.createElement('script');
			script.src = 'js/jacob.js';
			document.getElementsByTagName('head')[0].appendChild(script);
			
			
			// create markers if i feel like it
			var contentString =
				'<div id="content">' +
				'<div id="siteNotice">' +
				'</div>' +
				'<h1 id="firstHeading" class="firstHeading">TitleHere</h1>' +
				'<div id="bodyContent">' +
				'<p>Description Here</p>' +
				'</div>' +
				'</div>';

			var infowindow1 = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 200
			});
			
			var location1 = {lat: 41.8781, lng: -87.6298};
			
			var location1 = new google.maps.Marker({
				position: location1,
				map: map,
				title: 'Location'
			});

			map.data.loadGeoJson('jacob.json');
          }
		  
		  
		function loadJSON(callback) {   
			var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
			xobj.open('GET', 'jacob.json', true); // Replace 'my_data' with the path to your file
			xobj.onreadystatechange = function () {
				if (xobj.readyState == 4 && xobj.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					callback(xobj.responseText);
				}
			};
			xobj.send(null);  
		}
		
		
		  // Loop through the results array and place a marker for each
			// set of coordinates.
			/*
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
			
			*/
			
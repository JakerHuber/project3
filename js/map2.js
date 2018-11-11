var map;
function initMap() {
    //initializes map
    var myLocation = new google.maps.LatLng(-34.397, 150.644);
	map = new google.maps.Map(document.getElementById('canvas3'), {
        center: myLocation,
        zoom: 2
    });

	/*
    // Create a <script> tag and set the USGS URL as the source.
    var script = document.createElement('script');
    script.src = 'jacob.js';
    document.getElementsByTagName('head')[0].appendChild(script);
	*/

    // create individual markers if i feel like it
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

    var marker1 = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });

    // adds listener for marker
    .addListener('click', function() {
        infowindow1.open(map, marker);
    });


}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }
}
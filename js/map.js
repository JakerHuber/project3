var map;
var myLocation;
var infowindow = new google.maps.InfoWindow();

function initialize() {
    //initializes map
    myLocation = new google.maps.LatLng(41.950, -87.786);
    map = new google.maps.Map(document.getElementById('canvas'), {
        center: myLocation,
        zoom: 10,
        mapTypeId: 'terrain'
    });

	// adds simple listener
    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

	// adds listener that opens text window with parameters. I lost A LOT of sleep over this. 0_0
	// you better buy me a coffee if you steal this code
    map.data.addListener('click', function(event) {
        var myHTML = event.feature.getProperty("Google Maps URL");
        var myHeading = event.feature.getProperty("Business Name");
        var myBody = event.feature.getProperty("Address");
        var myURL = event.feature.getProperty("Google Maps URL");
        //formatting of Text Window
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' +
            myHeading +
            '</h1>' +
            '<div id="bodyContent">' +
            '<p>' +
            myBody +
            '</p>' +
            '<p>' +
            'Google Maps URL: ' +
            '<a href="' +
            myURL +
            '">' +
            myURL +
            '</a> ' +
            '</p>' +
            '</div>' +
            '</div>';

        infowindow.setContent("<div style='width:250px; text-align: center;'>" + contentString + "</div>");
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.setOptions({
            pixelOffset: new google.maps.Size(0, -30)
        });
        infowindow.open(map);
    });
	
	// loads all pins 
    map.data.addGeoJson(jsonData);
}

google.maps.event.addDomListener(window, "load", initialize);

// Data for pins is stored here. I created json file from exporting google map (places) timeline. 
// You need to manually remove "Location" property because you cannot access nested properties with the event.feature.getProperty function.
// Warning: Marketers are NOT allowed to steal this data! 

var jsonData = {
    "type": "FeatureCollection",
    "features": [{
        "geometry": {
            "coordinates": [-88.0245196, 41.9458843],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7420751835806571819",
            "Address": "1453 West Lake Street, Addison, IL 60101, United States",
            "Business Name": "Briki Cafe",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9458843",
                "Longitude": "-88.0245196"
            },
            "Published": "2018-11-11T03:42:45Z",
            "Title": "Briki Cafe",
            "Updated": "2018-11-11T03:42:45Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-97.1694622, 26.1103912],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8922363003585949449",

            "Address": "3509 Padre Boulevard, South Padre Island, TX 78597, United States",
            "Business Name": "Whataburger",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "26.1103912",
                "Longitude": "-97.1694622"
            },
            "Published": "2018-11-11T03:42:37Z",
            "Title": "Whataburger",
            "Updated": "2018-11-11T03:42:37Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1262533, 41.7951501],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8644674208080211172",

            "Address": "1163 East Ogden Avenue #707, Naperville, IL 60563, United States",
            "Business Name": "Joy Yee",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.7951501",
                "Longitude": "-88.1262533"
            },
            "Published": "2018-11-11T03:42:30Z",
            "Title": "Joy Yee",
            "Updated": "2018-11-11T03:42:30Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0799567, 41.9838151],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7785543268620933274",

            "Address": "10 Main Street, Roselle, IL 60172, United States",
            "Business Name": "Starbucks",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9838151",
                "Longitude": "-88.0799567"
            },
            "Published": "2018-11-11T03:40:23Z",
            "Title": "Starbucks",
            "Updated": "2018-11-11T03:40:23Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0079440, 41.8464330],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12434914395285726857",

            "Address": "300 East 22nd Street, Lombard, IL 60148, United States",
            "Business Name": "Greek Islands",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8464330",
                "Longitude": "-88.0079440"
            },
            "Published": "2018-11-11T03:38:54Z",
            "Title": "Greek Islands",
            "Updated": "2018-11-11T03:40:15Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1451079, 42.0166960],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=17455203363094822401",

            "Address": "1592 Buttitta Drive, Streamwood, IL 60107, United States",
            "Business Name": "Los Burritos Tapatios Restaurant",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0166960",
                "Longitude": "-88.1451079"
            },
            "Published": "2018-11-11T03:40:13Z",
            "Title": "Los Burritos Tapatios Restaurant",
            "Updated": "2018-11-11T03:40:13Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.9980690, 42.0538880],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=2850835250985032287",

            "Address": "1641 West Algonquin Road, Rolling Meadows, IL 60008, United States",
            "Business Name": "Sushi Station",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0538880",
                "Longitude": "-87.9980690"
            },
            "Published": "2018-11-11T03:40:11Z",
            "Title": "Sushi Station",
            "Updated": "2018-11-11T03:40:11Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0804503, 41.9022691],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=13220351517711156358",

            "Address": "235 East North Avenue, Glendale Heights, IL 60139, United States",
            "Business Name": "Portillo's Hot Dogs",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9022691",
                "Longitude": "-88.0804503"
            },
            "Published": "2018-11-11T03:40:07Z",
            "Title": "Portillo's Hot Dogs",
            "Updated": "2018-11-11T03:40:07Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0460514, 42.0470182],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=10846366843596002963",

            "Address": "1010 North Meacham Road, Schaumburg, IL 60173, United States",
            "Business Name": "Weber Grill Restaurant & Academy",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0470182",
                "Longitude": "-88.0460514"
            },
            "Published": "2018-11-11T03:40:04Z",
            "Title": "Weber Grill Restaurant & Academy",
            "Updated": "2018-11-11T03:40:04Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6276428, 41.8856063],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=4992035648814099266",

            "Address": "177 North State Street #1a, Chicago, IL 60601, United States",
            "Business Name": "Chick-fil-A",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8856063",
                "Longitude": "-87.6276428"
            },
            "Published": "2018-11-11T03:39:49Z",
            "Title": "Chick-fil-A",
            "Updated": "2018-11-11T03:39:49Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1027820, 41.8962965],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=10480258769009310743",

            "Address": "290 Schmale Road, Carol Stream, IL 60188, United States",
            "Business Name": "Culver's",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8962965",
                "Longitude": "-88.1027820"
            },
            "Published": "2018-11-11T03:39:47Z",
            "Title": "Culver's",
            "Updated": "2018-11-11T03:39:47Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0873467, 41.8003572],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12755399090256990550",

            "Address": "1800 Ogden Avenue, Lisle, IL 60532, United States",
            "Business Name": "The Bavarian Lodge",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8003572",
                "Longitude": "-88.0873467"
            },
            "Published": "2018-11-11T03:39:45Z",
            "Title": "The Bavarian Lodge",
            "Updated": "2018-11-11T03:39:45Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.2081739, 41.9745650],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=3607307279048240334",

            "Address": "1121 West Stearns Road, Bartlett, IL 60103, United States",
            "Business Name": "Sonic Drive-In",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9745650",
                "Longitude": "-88.2081739"
            },
            "Published": "2018-11-11T03:39:43Z",
            "Title": "Sonic Drive-In",
            "Updated": "2018-11-11T03:39:43Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1243907, 42.0041280],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8070982193424303951",

            "Address": "1800 West Wise Road, Schaumburg, IL 60193, United States",
            "Business Name": "Culver's",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0041280",
                "Longitude": "-88.1243907"
            },
            "Published": "2018-11-11T03:39:40Z",
            "Title": "Culver's",
            "Updated": "2018-11-11T03:39:40Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6663969, 41.8513111],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8268557831526765870",

            "Address": "2230 South Ashland Avenue, Chicago, IL 60608, United States",
            "Business Name": "Manjares Restaurant",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8513111",
                "Longitude": "-87.6663969"
            },
            "Published": "2018-11-11T03:39:30Z",
            "Title": "Manjares Restaurant",
            "Updated": "2018-11-11T03:39:30Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.2311610, 40.1103935],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=15560229448121338747",

            "Address": "522 East Green Street, Champaign, IL 61820, United States",
            "Business Name": "Legends",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "40.1103935",
                "Longitude": "-88.2311610"
            },
            "Published": "2018-11-11T03:39:27Z",
            "Title": "Legends",
            "Updated": "2018-11-11T03:39:27Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6347911, 41.8456902],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8762381168670623640",

            "Address": "300 West 26th Street, Chicago, IL 60616, United States",
            "Business Name": "Carbon Live Fire Mexican Grill",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8456902",
                "Longitude": "-87.6347911"
            },
            "Published": "2018-11-11T03:39:22Z",
            "Title": "Carbon Live Fire Mexican Grill",
            "Updated": "2018-11-11T03:39:22Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6984440, 41.9237000],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=16119275012395550128",

            "Address": "2333 North Milwaukee Avenue, Chicago, IL 60647, United States",
            "Business Name": "The Chicago Diner, Logan Square",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9237000",
                "Longitude": "-87.6984440"
            },
            "Published": "2018-11-11T03:39:20Z",
            "Title": "The Chicago Diner, Logan Square",
            "Updated": "2018-11-11T03:39:20Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1131240, 41.9696680],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=17624783239558232070",

            "Address": "1306 Lake Street Ste 414, Roselle, IL 60172, United States",
            "Business Name": "Wingstop",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9696680",
                "Longitude": "-88.1131240"
            },
            "Published": "2018-11-11T03:39:18Z",
            "Title": "Wingstop",
            "Updated": "2018-11-11T03:39:18Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.8192927, 41.9526003],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=11532118358468345027",

            "Address": "7650 West Irving Park Road, Norridge, IL 60706, United States",
            "Business Name": "Edelweiss German American Cuisine",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9526003",
                "Longitude": "-87.8192927"
            },
            "Published": "2018-11-11T03:39:16Z",
            "Title": "Edelweiss German American Cuisine",
            "Updated": "2018-11-11T03:39:16Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.8340699, 41.9523012],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=14685872244662195733",

            "Address": "8258 West Irving Park Road, Chicago, IL 60634, United States",
            "Business Name": "Bob-O's Hot Dogs",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9523012",
                "Longitude": "-87.8340699"
            },
            "Published": "2018-11-11T03:39:11Z",
            "Title": "Bob-O's Hot Dogs",
            "Updated": "2018-11-11T03:39:11Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.9803155, 42.0449164],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=17135958717607535740",

            "Address": "100 East Algonquin Road, Arlington Heights, IL 60005, United States",
            "Business Name": "Mitsuwa Market Place",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0449164",
                "Longitude": "-87.9803155"
            },
            "Published": "2018-11-11T03:38:58Z",
            "Title": "Mitsuwa Market Place",
            "Updated": "2018-11-11T03:38:58Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.8694334, 41.8158775],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=15069106746810962623",

            "Address": "1 East Burlington Avenue, La Grange, IL 60525, United States",
            "Business Name": "Noodles and Company",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8158775",
                "Longitude": "-87.8694334"
            },
            "Published": "2018-11-11T03:38:56Z",
            "Title": "Noodles and Company",
            "Updated": "2018-11-11T03:38:56Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1110468, 41.9379178],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=2331220217058774448",

            "Address": "358 Army Trail Road #140, Bloomingdale, IL 60108, United States",
            "Business Name": "Menchie's Frozen Yogurt",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9379178",
                "Longitude": "-88.1110468"
            },
            "Published": "2018-11-11T03:38:51Z",
            "Title": "Menchie's Frozen Yogurt",
            "Updated": "2018-11-11T03:38:51Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0821223, 41.9851129],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=10867163059537814108",

            "Address": "35 West Irving Park Road, Roselle, IL 60172, United States",
            "Business Name": "La Hacienda de Roselle",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9851129",
                "Longitude": "-88.0821223"
            },
            "Published": "2018-11-11T03:38:42Z",
            "Title": "La Hacienda de Roselle",
            "Updated": "2018-11-11T03:38:42Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0306342, 41.9947422],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=17027883805035799016",

            "Address": "1065 Rohlwing Road, Elk Grove Village, IL 60007, United States",
            "Business Name": "Teddy's Diner",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9947422",
                "Longitude": "-88.0306342"
            },
            "Published": "2018-11-11T03:38:39Z",
            "Title": "Teddy's Diner",
            "Updated": "2018-11-11T03:38:39Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.9858407, 42.0440681],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=14534270250150163853",

            "Address": "75 Algonquin Road, Arlington Heights, IL 60005, United States",
            "Business Name": "DoubleTree by Hilton Hotel Chicago - Arlington Heights",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0440681",
                "Longitude": "-87.9858407"
            },
            "Published": "2018-11-11T03:38:31Z",
            "Title": "DoubleTree by Hilton Hotel Chicago - Arlington Heights",
            "Updated": "2018-11-11T03:38:31Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0295818, 41.9499913],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=16505535565617706304",

            "Address": "1700 West Lake Street B, Addison, IL 60101, United States",
            "Business Name": "Bigby's Pour House",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9499913",
                "Longitude": "-88.0295818"
            },
            "Published": "2018-11-11T03:38:00Z",
            "Title": "Bigby's Pour House",
            "Updated": "2018-11-11T03:38:00Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.3847475, 44.8241085],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12460953942016971714",

            "Address": "19 Green Bay Road, Sturgeon Bay, WI 54235, United States",
            "Business Name": "Scaturo's Baking Co & Cafe",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "44.8241085",
                "Longitude": "-87.3847475"
            },
            "Published": "2018-11-11T03:36:32Z",
            "Title": "Scaturo's Baking Co & Cafe",
            "Updated": "2018-11-11T03:36:32Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6500278, 41.8846038],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7081938891742601619",

            "Address": "900 West Randolph Street, Chicago, IL 60607, United States",
            "Business Name": "Leña Brava",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8846038",
                "Longitude": "-87.6500278"
            },
            "Published": "2018-11-11T03:36:22Z",
            "Title": "Leña Brava",
            "Updated": "2018-11-11T03:36:22Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0738327, 41.9824989],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12054119876684619715",

            "Address": "245 E Main St, Roselle, IL 60172, United States",
            "Business Name": "Pollyanna Brewing Company - Roselare",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9824989",
                "Longitude": "-88.0738327"
            },
            "Published": "2018-11-11T03:35:55Z",
            "Title": "Pollyanna Brewing Company - Roselare",
            "Updated": "2018-11-11T03:35:55Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0795796, 42.0269535],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=17400141747619275706",

            "Address": "1 South Roselle Road, Schaumburg, IL 60193, United States",
            "Business Name": "Lou Malnati's Pizzeria - Schaumburg",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0269535",
                "Longitude": "-88.0795796"
            },
            "Published": "2018-11-11T03:35:50Z",
            "Title": "Lou Malnati's Pizzeria - Schaumburg",
            "Updated": "2018-11-11T03:35:50Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1102417, 41.9386749],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8763220704701852297",

            "Address": "338 Army Trail Road, Bloomingdale, IL 60108, United States",
            "Business Name": "Oberweis Ice Cream and Dairy Store",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9386749",
                "Longitude": "-88.1102417"
            },
            "Published": "2018-11-11T03:35:48Z",
            "Title": "Oberweis Ice Cream and Dairy Store",
            "Updated": "2018-11-11T03:35:48Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0983545, 41.9635226],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12470216050149588039",

            "Address": "266 West Lake Street, Bloomingdale, IL 60108, United States",
            "Business Name": "Tony Spavone's Ristorante",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9635226",
                "Longitude": "-88.0983545"
            },
            "Published": "2018-11-11T03:35:46Z",
            "Title": "Tony Spavone's Ristorante",
            "Updated": "2018-11-11T03:35:46Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0462079, 42.0453967],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12528343451967319442",

            "Address": "870 North Meacham Road, Schaumburg, IL 60173, United States",
            "Business Name": "On The Border Mexican Grill & Cantina",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0453967",
                "Longitude": "-88.0462079"
            },
            "Published": "2018-11-11T03:35:44Z",
            "Title": "On The Border Mexican Grill & Cantina",
            "Updated": "2018-11-11T03:35:44Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.3364180, 42.0923990],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8660133695400223652",

            "Address": "2486 North Randall Road, Elgin, IL 60123, United States",
            "Business Name": "Sushi Station",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0923990",
                "Longitude": "-88.3364180"
            },
            "Published": "2018-11-11T03:35:42Z",
            "Title": "Sushi Station",
            "Updated": "2018-11-11T03:35:42Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1177176, 41.9720130],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7999110817861254823",

            "Address": "1500 W Lake S, Roselle, IL 60172, United States",
            "Business Name": "Brunch Cafe - Roselle",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9720130",
                "Longitude": "-88.1177176"
            },
            "Published": "2018-11-11T03:35:39Z",
            "Title": "Brunch Cafe - Roselle",
            "Updated": "2018-11-11T03:35:39Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0018703, 41.9371316],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=12083069596490024075",

            "Address": "507 West Lake Street, Addison, IL 60101, United States",
            "Business Name": "La Michoacana Premium",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9371316",
                "Longitude": "-88.0018703"
            },
            "Published": "2018-11-11T03:35:37Z",
            "Title": "La Michoacana Premium",
            "Updated": "2018-11-11T03:35:37Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.1363331, 42.0244203],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=4831805458305513542",

            "Address": "2251 West Schaumburg Road, Schaumburg, IL 60194, United States",
            "Business Name": "Dan Thai",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "42.0244203",
                "Longitude": "-88.1363331"
            },
            "Published": "2018-11-11T03:35:35Z",
            "Title": "Dan Thai",
            "Updated": "2018-11-11T03:35:35Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-111.9259083, 33.4157822],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=4160387253215996958",

            "Address": "1205 South Rural Road, Tempe, AZ 85280, United States",
            "Business Name": "McDonald's",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "33.4157822",
                "Longitude": "-111.9259083"
            },
            "Published": "2018-11-11T03:35:31Z",
            "Title": "McDonald's",
            "Updated": "2018-11-11T03:35:31Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0232522, 41.8329729],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=7845715952713044891",

            "Address": "1461 Butterfield Road, Downers Grove, IL 60515, United States",
            "Business Name": "Brick House Tavern + Tap",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8329729",
                "Longitude": "-88.0232522"
            },
            "Published": "2018-11-11T03:35:29Z",
            "Title": "Brick House Tavern + Tap",
            "Updated": "2018-11-11T03:35:29Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0117550, 41.8372680],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=3318526275512870038",
            "Address": "2780 South Highland Avenue, Lombard, IL 60148, United States",
            "Business Name": "The Patio",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8372680",
                "Longitude": "-88.0117550"
            },
            "Published": "2018-11-11T03:35:27Z",
            "Title": "The Patio",
            "Updated": "2018-11-11T03:35:27Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-88.0128814, 41.8365768],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=8783645763782066076",
            "Address": "7140, 2820 South Highland Avenue E, Lombard, IL 60148, United States",
            "Business Name": "Kai Sushi",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8365768",
                "Longitude": "-88.0128814"
            },
            "Published": "2018-11-11T03:35:25Z",
            "Title": "Kai Sushi",
            "Updated": "2018-11-11T03:35:25Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6315971, 41.8894298],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=2520131390924159431",
            "Address": "108 West Kinzie Street, Chicago, IL 60654, United States",
            "Business Name": "Mercadito",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.8894298",
                "Longitude": "-87.6315971"
            },
            "Published": "2018-11-11T03:35:22Z",
            "Title": "Mercadito",
            "Updated": "2018-11-11T03:35:22Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.6746048, 41.9084155],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=15838278233679433298",
            "Address": "1462 North Milwaukee Avenue, Chicago, IL 60622, United States",
            "Business Name": "The Wormhole Coffee",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9084155",
                "Longitude": "-87.6746048"
            },
            "Published": "2018-11-11T03:35:20Z",
            "Title": "The Wormhole Coffee",
            "Updated": "2018-11-11T03:35:20Z"
        },
        "type": "Feature"
    }, {
        "geometry": {
            "coordinates": [-87.9863758, 41.9318772],
            "type": "Point"
        },
        "properties": {
            "Google Maps URL": "http://maps.google.com/?cid=10423818614767858381",
            "Address": "82 East Lake Street, Addison, IL 60101, United States",
            "Business Name": "Italian Bakery",
            "Country Code": "US",
            "Geo Coordinates": {
                "Latitude": "41.9318772",
                "Longitude": "-87.9863758"
            },
            "Published": "2018-11-11T03:35:17Z",
            "Title": "Italian Bakery",
            "Updated": "2018-11-11T03:35:17Z"
        },
        "type": "Feature"
    }]
};
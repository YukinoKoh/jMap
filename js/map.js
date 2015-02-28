/*
 * This map.js draws map with custom settings
 *
 * useful link: https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
 */

/* 
 * variables for the map
 */
var map;
// geoLocation for maptOptions property, center
var tokyo = new google.maps.LatLng(35.68537,139.76329);

var roppongi = new google.maps.LatLng(35.661867,139.731351);

// custom MapType for maptOptions property, mapTypeId
var Custom_MapType_1 = 'style_night';
// Array <MapTypeStyle> for creating StyleMapType
var option_night = [
    {
    	// set all features saturation of their default color
    	stylers: [
    		{saturation: -82},
    		{lightness: -83},
    		{hue:'#ff33ff'}
    	]
    },
    {
    	// set text color
	    elementType: "labels.text.fill",
	    stylers:[{color: '#3b3b3b'}]
    },
    {
        // in addition, lower the lightness of water specifically
        featureType: "water",
        elementType: "geometry",
        stylers: [{lightness: -20}]
    }
];
// map options 
var mapOptions = {
		// mapOptions
		center:roppongi,
		zoom:13,   
		mapTypeControlOptions: {
	    	mapTypeIds: [google.maps.MapTypeId.ROADMAP, Custom_MapType_1]
	    },
    	mapTypeId: Custom_MapType_1
		    
};

/*
 * initializing the map
 */
function initialize() {
	// create map
	map = new google.maps.Map(document.getElementById("mapArea"),mapOptions);	
	// set StyledMapType class constructed (Array <MapTypeStyle>, option) to this map
  	map.mapTypes.set(Custom_MapType_1, new google.maps.StyledMapType(option_night));
    // drawing circles in the map
    // function specified in circle.js
    draw();
    addWindow();
    drawGallery();
}
google.maps.event.addDomListener(window, 'load', initialize);

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
var ginza = new google.maps.LatLng(35.673053,139.766489);
var akasakaPalace = new google.maps.LatLng(35.679553,139.728413);

// custom MapType for maptOptions property, mapTypeId
var Custom_MapType_1 = 'style_night';
// Array <MapTypeStyle> for creating StyleMapType
var option_night = [
    {   // set weeker visibility to all geometry
        elementType: "geometry",
    	stylers: [
            {visibility:'simplifed'},
    		{saturation: -34},
    		{lightness: 70},
            {gamma: 2.54}
    	]
    },
    {   // set water visible
        featureType:"water",
        elementType: "geometry",
        stylers: [
            {hue: "#00ccff"},
            {saturation: -45},
            {lightness: -11},
            {gamma: 0.63}
        ]
    },
    {   // set park 
        featureType:"poi.park",
        elementType: "geometry",
        stylers: [
            {hue: "#00ff99"},
            {saturation: 50},
            {lightness: -8},
            {gamma: 0.5}
        ]
    },
    {   // set stronger visibility to all labels 
        featureType:"all",
        elementType: "label",
        stylers: [
            {visibility:'simplifed'},
            {gamma: 0.38}
        ]
    },
    {   // highway to be weeker
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {saturation: -74},
            {lightness: 33},
        ]
    },
    {   // junction label to be off
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
            {visibility: 'off'}
        ]
    },
    {   // hightway junction label to be off
        featureType: "road.arterial",
        elementType: "labels",
        stylers: [
            {visibility: 'off'}
        ]
    },
    {   // hightway label to be off
        featureType: "administrative",
        elementType: "labels",
        stylers: [
            {visibility: 'off'}
        ]
    }
];
// map options 
var mapOptions = {
		// mapOptions
		center:akasakaPalace,
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
    drawCherry();
}
google.maps.event.addDomListener(window, 'load', initialize);

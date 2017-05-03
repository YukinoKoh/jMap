/*
 * This map.js draws map with custom settings
 */

// geoLocation for maptOptions property, center
var tokyo = new google.maps.LatLng(35.68537,139.76329);
var roppongi = new google.maps.LatLng(35.661867,139.731351);
var ginza = new google.maps.LatLng(35.673053,139.766489);
var akasakaPalace = new google.maps.LatLng(35.679553,139.728413);

// custom MapType for maptOptions property, mapTypeId
//var Custom_MapType_1 = 'style_pop';
var map_style = [
	/*
	 * base 
	 */
	// color
	 {elementType: 'geometry', 
	stylers: [{color: '#242f3e'},{visibility:'simplifed'}, {saturation: -34}, {lightness: 70}, {gamma: 2.5}]
    },
	//text
	 //{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
	{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},   
	{elementType: "label", stylers: [ {visibility:'simplifed'}, {gamma: 0.38}]},
    	
	/* 
	 * feature
	 */
	// POI
        {featureType: "poi.business", elementType: "labels", stylers: [{visibility: 'off'}]},
    	{featureType: "administrative", elementType: "labels",stylers: [ {visibility: 'off'}]},
       
	//water
        {featureType:"water", elementType: "geometry",
        stylers: [ {hue: "#00ccff"}, {saturation: -45}, {lightness: -11}, {gamma: 0.63}]},
    	// set park 
        {featureType:"poi.park", elementType: "geometry",
        stylers: [{hue: "#00ff99"}, {saturation: 30}, {lightness: -8}, {gamma: 0.5}]},
       // road
        {featureType: "road.highway", elementType: "geometry",stylers: [ {saturation: -74}, {lightness: 33}]},
    	{featureType: "road.arterial", elementType: "labels",stylers: [ {visibility: 'off'} ]},
];
var mapOptions = {
		center:akasakaPalace,
		zoom:13,   
	    	mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: map_style
};
var map;
function initMap() {
	// create map
	map = new google.maps.Map(document.getElementById("mapArea"), mapOptions);	
    	// drawing circles in the map
    	drawArray(gallery,'#fa65b9');
    	drawArray(books,'#02f600');
}
google.maps.event.addDomListener(window, 'load', initMap);

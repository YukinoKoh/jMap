/*
 * This map.js draws map with custom settings
 */

// geoLocation for maptOptions property, center
var tokyo = new google.maps.LatLng(35.68537,139.76329);
var roppongi = new google.maps.LatLng(35.661867,139.731351);
var ginza = new google.maps.LatLng(35.673053,139.766489);
var akasakaPalace = new google.maps.LatLng(35.679553,139.728413);
var daikanyama = new google.maps.LatLng(35.649623,139.703326);

// custom MapType for maptOptions property, mapTypeId
//var Custom_MapType_1 = 'style_pop';
var map_style = [
	/*
	 * base 
	 */
	// color
	{elementType: 'geometry.fill', stylers: [{color: '#29292a'}]},
	{elementType: 'geometry.stroke', stylers: [{color: '#39393b'}]},
	//text
	 {elementType: 'labels.text.stroke', stylers: [{color: '#1b1b1c'}]},
	{elementType: 'labels.text.fill', stylers: [{color: '#565658'}]},   
	//{elementType: "label", stylers: [ {visibility:'simplifed'}, {gamma: 0.38}]},
    	
	/* 
	 * feature
	 */
	//administative
    	//{featureType: 'administrative.land_percel', elementType: 'labels', stylers: [{visibility: 'off'}]},
    	{featureType: 'administrative.neighborhood',elementType: 'labels', stylers: [{visibility: 'off'}]},
	//{featureType: 'administrative.locality',  elementType:'labels.text.fill', stylers: [{visibility:'off'}]},
	// landscape
	{featureType:'landscape', elementType:'geometry', stylers: [{color:'#29292a'}]},
	{featureType:'water', stylers: [{color:'#1b1b1f'}]},

	// POI
	{featureType: 'poi.attraction', elementType: 'labels.icon', stylers:[{visibility:'off'}]},
        {featureType: 'poi.business',  stylers: [{visibility: 'off'}]},
        {featureType: 'poi.government',  stylers: [{visibility: 'off'}]},
        {featureType: 'poi.medical',  stylers: [{visibility: 'off'}]},
        {featureType: 'poi.park',  elementType: 'geometry.fill', stylers: [{color: '#202021'}]},
        {featureType: 'poi.park',  elementType: 'geometry.stroke', stylers: [{color: '#212123'}]},
	{featureType: 'poi.park', elementType: 'labels.icon', stylers:[{visibility:'off'}]},
	{featureType: 'poi.place_of_worship', stylers:[{visibility: 'off'}]},
	{featureType: 'poi.school', stylers:[{visibility: 'off'}]},
	{featureType: 'poi.sports_complex', stylers:[{visibility: 'off'}]},
       // road
	{featureType: 'road', elementType: 'labels', stylers: [ {visibility: 'off'} ]},
	{featureType: 'road.local', elementType: 'geometry', stylers: [ {color: '#1a1a1b'}]},
        {featureType: 'road.highway', elementType: 'geometry', stylers: [ {color: '#212122'}]},     
    	{featureType: "road.arterial",  stylers: [ {visibility: 'off'} ]},
	// transit
	{featureType: 'transit.line', elementType: 'labels', stylers: [ {visibility: 'off'}]}, 
	{featureType: 'transit.station', elementType: 'labels.icon', stylers: [ {color: '#2f2f2f'}]} 
	//{featureType: 'transit', elementType: 'geometry.fill', stylers: [ {color: '#1a1a1a'}]}, 
	//{featureType: 'transit', elementType: 'geometry.stroke', stylers: [ {color: '#2f2f2f'}]} 
];
var mapOptions = {
		center:daikanyama,
		zoom:13,   
	    	mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: map_style
};
var map;
function initMap() {
	// create map
	map = new google.maps.Map(document.getElementById("mapArea"), mapOptions);	
    	// drawing circles in the map
    	drawArray(gallery,'#fcc865');
    	drawArray(books,'#48f0ce');
    	drawArray(food,'#fe6baa');
}
google.maps.event.addDomListener(window, 'load', initMap);

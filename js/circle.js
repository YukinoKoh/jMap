/*
 * infoBubble prototype for gallery
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */

// default text that appear bottom of the page
var default_text = '<div class="neutral">' +
	'<h1>Welcome to Tokyo ..</h1>' +
	'<p>Hope you enjoy this town:) </p></div>';

// draw circles
function drawArray(array_name, color, class_name){
    for (var element in array_name) { 
      (function(){
	var circle = {
	  path: 'M 0 0 m -10 0  a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0 z',
          fillColor: '#fff',
          fillOpacity: 0.8,
	  strokeColor:color,
	  strokeOpacity: 0.2,
	  strokeWeight:18,
          scale: 0.5,
	};
	var latlng =  array_name[element].latlng;
        var options = {
          map: map,
          position:   new google.maps.LatLng(latlng[0],latlng[1]),
	  icon: circle
       };
       // Add the circle for this city to the map.
       var elementCircles = new google.maps.Marker(options);
       var mapsUrl = 'https://www.google.co.jp/maps/dir/Current+Location/' + element + '/@' + latlng.toString() + ',14z';
       var text = '<div><h4 class="' + class_name + '">' + class_name + '</h4><h2>' + element + '</h2><br/>URL: <a href = "' + array_name[element].url + '">' + array_name[element].url +'</a><br/>How to get there:  <a href="' + mapsUrl + '" target="_blank">Recommended route</a></div>';
       /*  These lines for infobubble. To know more about infobubble, visit
	   https://github.com/googlemaps/js-info-bubble
	var bubbleContent = text;
	var infoBubbleElement = new InfoBubble({
      		map: map,
      		content: bubbleContent,
      		shadowStyle: 1,
      		backgroundColor: color,
      		maxWidth:300,
      		backgroundClassName: 'bubbleGallery',
      		borderRadius: 5,
      		borderWidth: 0,
      		arrowStyle: 0,
      		arrowSize: 10,
      		arrowPosition: 50,
      		disableAutoPan: true,
		closeSrc:'img/close.png'
    	});
	*/

       // add event listener
       google.maps.event.addListener(elementCircles, 'click', function() {
	   $("#textArea").removeClass().addClass(class_name);
	   $("#textCont").removeClass().addClass(class_name);
	   document.getElementById("textCont").innerHTML = text;
           /*infoBubbleElement.setPosition(this.position);
           infoBubbleElement.open(map,this.elementCircles);
	   */
       });

        google.maps.event.addListener(map, 'click', function () { 
           $("#textArea").removeClass().addClass('neutral');
           $("#textCont").removeClass().addClass('neutral');
	});
  }());
}}

$(document ).ready(function() {
    document.getElementById("textCont").innerHTML = default_text;	
});

/*
 * infoBubble prototype for gallery
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
function drawArray(array_name,color){
    for (var element in array_name) { 
      (function(){
	var circle = {
	  path: 'M 0 0 m -10 0  a 10,10 0 1,0 20,0 a 10,10 0 1,0 -20,0 z',
          fillColor: '#fff',
          fillOpacity: 0.6,
	  strokeColor:color,
	  strokeOpacity: 0.8,
	  strokeWeight:10,
          scale: 0.7,
	};
        var options = {
          map: map,
          position: array_name[element].center,
	  icon: circle
       };
       // Add the circle for this city to the map.
       var elementCircles = new google.maps.Marker(options);
       // Prepare contents for infoBubble
       var bubbleContent = '<div><h5>' + element+ '</h5><br>' + array_name[element].address+ '<br>'+ 
            '<a href = "' + array_name[element].url + '">' + array_name[element].url +'</a></div>';

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

       // add event listener
       google.maps.event.addListener(elementCircles, 'click', function() {
           infoBubbleElement.setPosition(this.position);
           infoBubbleElement.open(map,this.elementCircles);
       });
       // close infoBubble
       google.maps.event.addListener(map, 'click', function () { 
           infoBubbleElement.close();
        });
  }());
}}



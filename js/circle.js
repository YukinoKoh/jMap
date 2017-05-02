
/*
 * infoBubble prototype for gallery
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleGallery = new InfoBubble({
      map: map,
      content: '',
      shadowStyle: 1,
      backgroundColor: 'rgba(250,101,185,0.93)',
      borderColor: '#fa65b9',
      maxWidth:300,
      backgroundClassName: 'bubbleGallery',
      borderRadius: 5,
      borderWidth: 1,
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });
var infoBubbleBook = new InfoBubble({
      map: map,
      content: 'Books',
      shadowStyle: 1,
      backgroundColor: 'rgba(10,231,8,0.93)',
      borderColor: '#09cd07',
      maxWidth:300,
      backgroundClassName: 'bubbleGallery',
      borderRadius: 5,
      borderWidth: 1,
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });

function drawArray(array_name,color){
  for (var element in array_name) { 
	console.log("element: ", element);
	
    var options = {
      strokeColor:color,
      strokeOpacity:1,
      strokeWeight: 1,
      fillColor:color,
      fillOpacity:0.8,
      map: map,
      center: array_name[element].center,
      radius: 90
    };
    // Add the circle for this city to the map.
    var elementCircles = new google.maps.Circle(options);
    // Prepare contents for infoBubble
    elementCircles.html = '<div class="left"><h5>' + element+ '</h5><br>'+ 
            array_name[element].address+ '<br>'+ 
            '<a href = "' + array_name[element].url + '">' + array_name[element].url +'</a></div><div id = "close"class="close">x</div>';

    // add event listener
    google.maps.event.addListener(elementCircles, 'click', function() {
      infoBubbleGallery.setContent(this.html);
      infoBubbleGallery.setPosition(this.center);
      infoBubbleGallery.open(map,this.elementCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleGallery.close();
    });
  }
}





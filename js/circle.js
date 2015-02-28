/*
 * add circle on the map
 *
 * useful link: https://developers.google.com/maps/documentation/javascript/examples/circle-simple
 */
 function draw(){
    var myCity = {
      center:tokyo,
      radius:60,
      strokeColor:'#fb038f',
      strokeOpacity:0.8,
      strokeWeight:1,
      fillColor:'#fb038f',
      fillOpacity:0.6,
      map:map
    };
    cityCircle = new google.maps.Circle(myCity);
}
/*
 * add infoBox to the circle
 *
 * useful link:http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobubble/examples/example.html
 */
function addWindow(){
  
  var contentString = '<div>hello</div>';
  
  // infoBubble
  var infoBubble = new InfoBubble({
      map: map,
      content: contentString,
      position: cityCircle.getCenter(),
      shadowStyle: 1,
      padding: 10,
      backgroundColor: '#ffffff',
      backgroundClassName: 'transparent',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#2c2c2c',
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });
  
  
  google.maps.event.addListener(cityCircle, 'click', function() {
    infoBubble.open();
  });
  google.maps.event.addListener(map, "click", function () { 
    infoBubble.close();
  });
}

/*
 * infoBubble prototype
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubble = new InfoBubble({
      map: map,
      content: '',
      shadowStyle: 1,
      padding: 10,
      maxWidth:300,
      backgroundColor: 'rgba(212,238,10,0.7)',
      opacity: 0.8,
      backgroundClassName: 'bubbleCss',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#2c2c2c',
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });

function drawGallery(){
  for (var gallery in galleries) { 
    var galleryOptions = {
      strokeColor:'#fafd04',
      strokeOpacity:0.8,
      strokeWeight: 1,
      fillColor:'#fafd03',
      fillOpacity:0.6,
      map: map,
      center: galleries[gallery].center,
      radius: galleries[gallery].cSize * 30
    };
    // Add the circle for this city to the map.
    var galleryCircles = new google.maps.Circle(galleryOptions);

    // Prepare contents for infoBubble
    galleryCircles.html = '<div><h5>' + galleries[gallery].gName + '</h5><br>'+ 
            galleries[gallery].address+ '<br>'+ 
            '<a href = "' + galleries[gallery].url + '">' + galleries[gallery].url +'</a></div>';

    // add event listener
    google.maps.event.addListener(galleryCircles, 'click', function() {
      infoBubble.setContent(this.html);
      infoBubble.setPosition(this.center);
      infoBubble.open(map,this.galleryCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubble.close();
    });

  }
}

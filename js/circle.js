/*
 * add circle on the map
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
 * add infoBubble 
 */
function addWindow(){
  var contentString = ''
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
    google.maps.event.addListener(map,"click", function () { 
    infoBubble.close();
  });
}

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

function drawGallery(){
  for (var gallery in galleries) { 
    var galleryOptions = {
      strokeColor:'#fa65b9',
      strokeOpacity:1,
      strokeWeight: 1,
      fillColor:'#fa65b9',
      fillOpacity:0.8,
      map: map,
      center: galleries[gallery].center,
      radius: 60
    };
    // Add the circle for this city to the map.
    var galleryCircles = new google.maps.Circle(galleryOptions);

    // Prepare contents for infoBubble
    galleryCircles.html = '<div class="left"><h5>' + galleries[gallery].gName + '</h5><br>'+ 
            galleries[gallery].address+ '<br>'+ 
            '<a href = "' + galleries[gallery].url + '">' + galleries[gallery].url +'</a></div><div id = "close"class="close">x</div>';

    // add event listener
    google.maps.event.addListener(galleryCircles, 'click', function() {
      infoBubbleGallery.setContent(this.html);
      infoBubbleGallery.setPosition(this.center);
      infoBubbleGallery.open(map,this.galleryCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleGallery.close();
    });
  }
}


/*
 * infoBubble prototype for books & Cafe
 *
 */
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

function drawBook(){
  for (var book in books) { 
    var bookOptions = {
      strokeColor:'#02f600',
      strokeOpacity:0.8,
      strokeWeight: 1,
      fillColor:'#02f600',
      fillOpacity:1,
      map: map,
      center: books[book].center,
      radius: books[book].cSize * 30
    };
    // Add the circle for this city to the map.
    var bookCircles = new google.maps.Circle(bookOptions);

    // Prepare contents for infoBubble
    bookCircles.html =  '<div><h5>' + books[book].gName + '</h5><br>'+ 
            books[book].address+ '<br>'+ 
            '<a href = "' + books[book].url + '">' + books[book].url +'</a></div>';

    // add event listener
    google.maps.event.addListener(bookCircles, 'click', function() {
      infoBubbleBook.setContent(this.html);
      infoBubbleBook.setPosition(this.center);
      infoBubbleBook.open(map,this.bookCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleBook.close();
    });
  }
}



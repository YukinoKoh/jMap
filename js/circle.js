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
 * add infoBubble 
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
 * infoBubble prototype for gallery
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleGallery = new InfoBubble({
      map: map,
      content: '',
      shadowStyle: 1,
      backgroundColor: 'rgba(239,49,37,0.93)',
      borderColor: '#ef3125',
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
      strokeColor:'#ef3125',
      strokeOpacity:1,
      strokeWeight: 1,
      fillColor:'#ef3125',
      fillOpacity:0.8,
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
 * infoBubble prototype for cherry
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleCherry = new InfoBubble({
      map: map,
      content: 'Cherry',
      shadowStyle: 1,
      backgroundColor: 'rgba(251,69,135,0.93)',
      borderColor: '#fb038f',
      maxWidth:200,
      maxHeight:200,
      backgroundClassName: 'bubbleGallery',
      borderRadius: 5,
      borderWidth: 1,
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });

function drawCherry(){
  for (var cherry in cherries) { 
    var cherryOptions = {
      strokeColor:'#e83f78',
      strokeOpacity:0.8,
      strokeWeight: 1,
      fillColor:'#fe79d6',
      fillOpacity:1,
      map: map,
      center: cherries[cherry].center,
      radius: cherries[cherry].cSize * 30
    };
    // Add the circle for this city to the map.
    var cherryCircles = new google.maps.Circle(cherryOptions);

    // Prepare contents for infoBubble
    cherryCircles.html = '<div><h5>Cherry Blossom!</h5><br>' + cherries[cherry].cname+ '</div>';

    // add event listener
    google.maps.event.addListener(cherryCircles, 'click', function() {
      infoBubbleCherry.setContent(this.html);
      infoBubbleCherry.setPosition(this.center);
      infoBubbleCherry.open(map,this.cherryCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleCherry.close();
    });
  }
}



/*
 * infoBubble prototype for books & Cafe
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleBook = new InfoBubble({
      map: map,
      content: 'Books',
      shadowStyle: 1,
      backgroundColor: 'rgba(10,231,8,0.93)',
      borderColor: '#09cd07',
      maxWidth:200,
      maxHeight:200,
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



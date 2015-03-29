
/*
 * infoBubble prototype for gallery
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubblePlace = new InfoBubble({
      map: map,
      content: '',
      shadowStyle: 1,
      backgroundColor: 'rgba(238,51,91,1)',
      borderColor: '#ee335b',
      maxWidth:300,
      backgroundClassName: 'bubblePlaces',
      borderRadius: 5,
      borderWidth: 1,
      arrowStyle: 0,
      arrowSize: 10,
      arrowPosition: 50,
      disableAutoPan: true,
      hideCloseButton: true
    });

function drawPlace(){
  for (var place in places) { 
    var placeOptions = {
      strokeColor:'#ee335b',
      strokeOpacity:1,
      strokeWeight: 1,
      fillColor:'#ee335b',
      fillOpacity:0.8,
      map: map,
      center: places[place].center,
      radius: places[place].cSize * 30
    };
    // Add the circle for this city to the map.
    var placeCircles = new google.maps.Circle(placeOptions);

    // Prepare contents for infoBubble
    placeCircles.html = '<div><h4>' + places[place].pName + '</h4><br>'+ 
            places[place].pInfo + '<br>' + 
            '<a href = "' + places[place].url + '">' + places[place].url +'</a></div>';

    // add event listener
    google.maps.event.addListener(placeCircles, 'click', function() {
      infoBubblePlace.setContent(this.html);
      infoBubblePlace.setPosition(this.center);
      infoBubblePlace.open(map,this.placeCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubblePlace.close();
    });
  }
}


/*
 * infoBubble prototype for cherry
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleCherry_kyoto = new InfoBubble({
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

function drawCherry_kyoto(){
  for (var cherry in cherries_kyoto) { 
    var cherryOptions = {
      strokeColor:'#e83f78',
      strokeOpacity:0.8,
      strokeWeight: 1,
      fillColor:'#fe79d6',
      fillOpacity:1,
      map: map,
      center: cherries_kyoto[cherry].center,
      radius: cherries_kyoto[cherry].cSize * 30
    };
    // Add the circle for this city to the map.
    var cherryCircles = new google.maps.Circle(cherryOptions);

    // Prepare contents for infoBubble
    cherryCircles.html = '<div><h4>' + cherries_kyoto[cherry].cName + '</h4><br>'+ 
            cherries_kyoto[cherry].cInfo + '<br>' + 
            '<a href = "' + cherries_kyoto[cherry].url + '">' + cherries_kyoto[cherry].url +'</a></div>';

    // add event listener
    google.maps.event.addListener(cherryCircles, 'click', function() {
      infoBubbleCherry_kyoto.setContent(this.html);
      infoBubbleCherry_kyoto.setPosition(this.center);
      infoBubbleCherry_kyoto.open(map,this.cherryCircles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleCherry_kyoto.close();
    });
  }
}



/*
 * infoBubble prototype for shop & restaurants
 *
 * when it is called by Circle class,
 * content and position are updated according to the circle properties 
 */
var infoBubbleShop_kyoto = new InfoBubble({
      map: map,
      content: 'Shop',
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

function drawShop_kyoto(){
  for (var shop in shops_kyoto) { 
    var shopOptions = {
      strokeColor:'#02f600',
      strokeOpacity:0.8,
      strokeWeight: 1,
      fillColor:'#02f600',
      fillOpacity:1,
      map: map,
      center: shops_kyoto[shop].center,
      radius: shops_kyoto[shop].cSize * 30
    };
    // Add the circle for this city to the map.
    var shop_kyoto_Circles = new google.maps.Circle(shopOptions);

    // Prepare contents for infoBubble
    shop_kyoto_Circles.html =  '<div><h5>' + shops_kyoto[shop].pName + '</h5><br>'+ 
            shops_kyoto[shop].pInfo+ '<br>'+ 
            '<a href = "' + shops_kyoto[shop].url + '">' + shops_kyoto[shop].url +'</a></div>';

    // add event listener
    google.maps.event.addListener(shop_kyoto_Circles, 'click', function() {
      infoBubbleShop_kyoto.setContent(this.html);
      infoBubbleShop_kyoto.setPosition(this.center);
      infoBubbleShop_kyoto.open(map,this.shop_kyoto_Circles);
    });
    // close infoBubble
    google.maps.event.addListener(map, "click", function () { 
      infoBubbleShop_kyoto.close();
    });
  }
}

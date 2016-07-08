function initialize(){
  var mapOptions = {
    zoom: 14,
    center: {lat: 40.718667, lng: -73.985261}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'Casa Mezcal', address: '86 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.718030, lng: -73.990120},
    {name: 'Ivan Ramen', address: '25 CLINTON STREET, NEW YORK, NY 10002', lat: 40.720780, lng: -73.984529},
    {name: 'Kuma Inn', address: '113 LUDLOW STREET, NEW YORK, NY 10002', lat: 40.719783, lng: -73.988904},
    {name: 'Los Feliz', address: '109 LUDLOW STREET #1, NEW YORK, NY 10002', lat: 40.719640, lng: -73.988922},
    {name: 'Lam Zhou Handmade Noodle', address: '144 EAST BROADWAY, NEW YORK, NY 10002', lat: 40.714345, lng: -73.99213},
    {name: 'Pig and Khao', address: '68 CLINTON STERET, NEW YORK, NY 10002', lat: 40.719314, lng: -73.984793},
    {name: 'Clinton Street Baking Company', address: '4 CLINTON STREET, NEW YORK, NY 10002', lat: 40.721199, lng: -73.983823},
    {name: 'The Meatball Shop', address: '84 STANTON STREET, 10002', lat: 40.721668, lng: -73.988781},
    {name: 'Dudleys', address: '85 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.717972, lng: -73.990456},
    {name: 'Doughnut Plant', address: '379 GRAND STREET, NEW YORK, NY 10002', lat: 40.716249, lng: 73.989941},
    {name: 'The Fat Radish', address: '17 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Dirty French', address: '180 LUDLOW STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Melt Bakery', address: '132 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Prohibition Bakery', address: '9 CLINTON STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Il Laboratorio del Gelato', address: '188 LUDLOW STREET, NEW YORK, NY 10002', lat: 40.722262, lng: -73.987045},
  ];

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(element){
    var coordinates = new google.maps.LatLng(element.lat, element.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: element.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;

    contentString = "<div><span>" + element.name + "</span></div><div>" + element.address + "</div>";

    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 150
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);





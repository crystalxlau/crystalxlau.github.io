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
    {name: 'Cafe Katja', address: '79 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Pig and Khao', address: '68 CLINTON STERET, NEW YORK, NY 10002', lat: 40.719314, lng: -73.984793},
    {name: 'Ice & Vice', address: '221 EAST BROADWAY, NEW YORK, NY 10002', lat: 40.714288, lng: -73.986981},
    {name: 'The Meatball Shop', address: '84 STANTON STREET, 10002', lat: 40.721668, lng: -73.988781},
    {name: 'Dudleys', address: '85 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.717972, lng: -73.990456},
    {name: 'Doughnut Plant', address: '379 GRAND STREET, NEW YORK, NY 10002', lat: 40.716249, lng: 73.989941},
    {name: 'Fat Radish', address: '17 ORCHARD STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
    {name: 'Dirty French', address: '180 LUDLOW STREET, NEW YORK, NY 10002', lat: 40.730610, lng: -73.935242},
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


//****SPIN ON CLICK*****/
var spin= document.querySelector(".spin")
  spin.addEventListener("click", spinWheel);

var pickerOne = (Math.floor(Math.random()*12))
var stopAngleOne = 720+pickerOne*30+"deg"
var rotateValueOne = "rotateX(-"+stopAngleOne+")"

var ringOne = document.querySelector("#wheel")

function spinWheel() {
  ringOne.style.transform = rotateValueOne;
}

var reset = document.querySelector("#reset")
  reset.addEventListener("click", reload);

function reload (){
  window.location.reload(false);
}







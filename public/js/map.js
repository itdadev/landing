var HOME_PATH = window.HOME_PATH || '.';

var itda = new naver.maps.LatLng(37.499617546951285, 127.02959009953081),
  map = new naver.maps.Map('map', {
    center: itda.destinationPoint(0, 500),
    zoom: 15
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: itda,
    icon: {
      url: 'https://www.itdadev.com/public/img/anchor.svg',
    }
  });

var contentString = [
  '<a href="https://www.itdadev.com" target="_blank" style="display:block; border-radius: 8px; padding: 20px; border:1px solid #5452F6;">',
    '<div class="iw_inner">',
    '<img src="img/logo.png" width="55" height="auto" alt="잇다" class="thumb" />',
    '<span>서울 강남구 강남대로<br />94길 28 <br />(강남역 12번 출구 도보 4분)</span>',
    '</div>',
  ' </a>',
].join('');

// var infowindow = new naver.maps.InfoWindow({
//   content: contentString,
//   maxWidth: 400,
//   backgroundColor: "#ffffff",
//   borderColor: "#5452F6",
//   borderWidth: 1,
//   anchorSize: new naver.maps.Size(10, 10),
//   anchorSkew: true,
//   anchorColor: "#eee",
//   pixelOffset: new naver.maps.Point(20, -20)
// });


var infowindow = new naver.maps.InfoWindow({

  content: infoWindowElement[0],

  borderWidth: 0,
  disableAnchor: true,
  backgroundColor: 'transparent',

  pixelOffset: new naver.maps.Point(0, -28),
});



naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
});

infowindow.open(map, marker);
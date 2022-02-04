
  var HOME_PATH = window.HOME_PATH || '.';

  var cityhall = new naver.maps.LatLng(37.499617546951285, 127.02959009953081),
    map = new naver.maps.Map('map', {
      center: cityhall.destinationPoint(0, 500),
      zoom: 15
    }),
    marker = new naver.maps.Marker({
      map: map,
      position: cityhall
    });

  var contentString = [
    '<div class="iw_inner">',
    '<a href="https://www.itdadev.com" target="_blank">',
    '       <img src="' +
    'img/logo.png" width="55" height="auto" alt="잇다" class="thumb" /><br />',
    '   <span>서울 강남구 강남대로<br />94길 28 <br />(강남역 12번 출구 도보 4분)',
    '   </span>',
    ' </a>',
    '</div>'
  ].join('');

  var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
    backgroundColor: "#ffffff",
    borderColor: "#5452F6",
    borderWidth: 1,
    anchorSize: new naver.maps.Size(30, 30),
    anchorSkew: true,
    anchorColor: "#eee",
    pixelOffset: new naver.maps.Point(20, -20)
});


  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  infowindow.open(map, marker);

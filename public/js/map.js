
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
    '   <h3>잇다</h3>',
    '   <p>서울 강남구 강남대로94길 28 유니언타운 506호<br />',
    '       <img src="' +
    'img/logo.png" width="55" height="auto" alt="잇다" class="thumb" /><br />',
    '       06134<br />',
    '       <a href="https://www.itdadev.com" target="_blank">https://www.itdadev.com/</a>',
    '   </p>',
    '</div>'
  ].join('');

  var infowindow = new naver.maps.InfoWindow({
    content: contentString
  });

  naver.maps.Event.addListener(marker, "click", function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });

  infowindow.open(map, marker);

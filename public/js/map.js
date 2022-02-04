var HOME_PATH = window.HOME_PATH || '.';

var itda = new naver.maps.LatLng(37.499617546951285, 127.02959009953081),
  map = new naver.maps.Map('map', {
    center: itda.destinationPoint(0, 500),
    zoom: 10
  }),
  marker = new naver.maps.Marker({
    map: map,
    position: itda,
    icon: {
      url: 'https://www.itdadev.com/public/img/anchor.svg',
      size: new naver.maps.Size(30, 40),
      origin: new naver.maps.Point(0, 0),
      anchor: new naver.maps.Point(11, 35)
    }
  });

var contentString = [
  '<a href="https://www.itdadev.com" target="_blank" style="display:block; border-radius: 8px; padding: 20px; border:1px solid #5452F6; overflow: hidden; background: #ffffff; font-size: 14px;">',
    '<div class="iw_inner" style="display: flex; align-items:center; justify-content:center;">',
      '<img src="img/logo.png" height="auto" alt="잇다" class="thumb" style="height: 100%; width: auto; margin-right: 10px;"/>',
      '<span style="font-weight: bold; color: #595959;">서울특별시 강남구 강남대로<br />94길 28 (강남역 12번 출구 도보 4분)</span>',
    '</div>',
  ' </a>',
].join('');

 var infowindow = new naver.maps.InfoWindow({
   content: contentString,
   maxWidth: 400,
   backgroundColor: "transparent",
   borderColor: "transparent",
   disableAnchor: true,
   pixelOffset: new naver.maps.Point(20, -40)
 });

naver.maps.Event.addListener(marker, "click", function (e) {
  if (infowindow.getMap()) {
    infowindow.close();
  } else {
    infowindow.open(map, marker);
  }
});

infowindow.open(map, marker);
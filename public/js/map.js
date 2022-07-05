var HOME_PATH = window.HOME_PATH || '.';

var itda = new naver.maps.LatLng(37.492708, 127.015470),
  map = new naver.maps.Map('map', {
    center: itda.destinationPoint(0, -200),
    zoom: 17
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
  '<a class="iw_inner" href="https://www.itdadev.com" target="_blank" style="display:block; border-radius: 8px; padding: 10px 20px; border:1px solid #5452F6; overflow: hidden; background: #ffffff; width: 320px;">',
  '<div style="display: flex; align-items: flex-end; justify-content:center;">',
  '<img src="img/logo.png" height="auto" alt="잇다" class="thumb" style="height: 37px; width: auto; margin-right: 10px;"/>',
  '<p style="font-weight: bold; color: #595959; width: 100%; font-size: 14px;">서울특별시 서초구 중앙로<br />20길 33-17 서초빌리지1, 202호</p>',
  '</div>',
  ' </a>',
].join('');
  
var infowindow = new naver.maps.InfoWindow({
  content: contentString,
  maxWidth: 400,
  backgroundColor: "transparent",
  borderColor: "transparent",
  disableAnchor: true,
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
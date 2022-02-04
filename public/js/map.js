// var HOME_PATH = window.HOME_PATH || '.';

// var itda = new naver.maps.LatLng(37.499617546951285, 127.02959009953081),
//   map = new naver.maps.Map('map', {
//     center: itda.destinationPoint(0, 500),
//     zoom: 15
//   }),

//   var markerOptions = {
//     position: itda,
//     map: map,
//     icon: {
//       url: 'https://www.itdadev.com/public/img/anchor.svg',
//       size: new naver.maps.Size(22, 35),
//       origin: new naver.maps.Point(0, 0),
//       anchor: new naver.maps.Point(11, 35)
//     }
//   };

//   var contentString = [
//     '<a href="https://www.itdadev.com" target="_blank" style="display:block; border-radius: 8px; padding: 20px; border:1px solid #5452F6;">',
//     '<div class="iw_inner">',
//     '<img src="img/logo.png" width="55" height="auto" alt="잇다" class="thumb" />',
//     '<span>서울 강남구 강남대로<br />94길 28 <br />(강남역 12번 출구 도보 4분)</span>',
//     '</div>',
//     ' </a>',
//   ].join('');

// // var infowindow = new naver.maps.InfoWindow({
// //   content: contentString,
// //   maxWidth: 400,
// //   backgroundColor: "#ffffff",
// //   borderColor: "#5452F6",
// //   borderWidth: 1,
// //   anchorSize: new naver.maps.Size(10, 10),
// //   anchorSkew: true,
// //   anchorColor: "#eee",
// //   pixelOffset: new naver.maps.Point(20, -20)
// // });



// var marker = new naver.maps.Marker(markerOptions);


// var infowindow = new naver.maps.InfoWindow({
//   content: infoWindowElement[0],
//   borderWidth: 0,
//   disableAnchor: true,
//   backgroundColor: 'transparent',
// });


// naver.maps.Event.addListener(marker, "click", function (e) {
//   if (infowindow.getMap()) {
//     infowindow.close();
//   } else {
//     infowindow.open(map, marker);
//   }
// });

// infowindow.open(map, marker);


var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.5698411, 126.9783927),
  zoom: 10
});

// 핀 요소
var infoWindowElement = $([
  '<div class="pin_nation">',
  '   <a href="http://www.naver.com/" target="_blank" class="pin_a">',
  '       <img src="./img/hi-seoul.jpg" width="38" height="26" alt="" class="pin_flag_m">',
  '       <span class="pin_txt"><em>캐나다</em> <span class="spr spr_arrow"></span></span>',
  '       <span class="spr spr_arr"></span>',
  '   </a>',
  '   <div class="pin"><span class="pin_blur"></span></div>',
  '</div>'].join(''));

var infowindow = new naver.maps.InfoWindow({

  content: infoWindowElement[0],

  borderWidth: 0,
  disableAnchor: true,
  backgroundColor: 'transparent',

  pixelOffset: new naver.maps.Point(0, -28),
});

naver.maps.Event.addListener(map, "click", function(e) {

  var latlng = e.latlng;

  infoWindowElement.find("em").text(latlng.toString());
  infowindow.open(map, latlng);
});
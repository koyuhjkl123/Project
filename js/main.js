function toggleMenu() {
  let menuContainer = document.getElementById("menu-container");
  // 현재 투명도 값 가져오기
  let currentOpacity = parseFloat(window.getComputedStyle(menuContainer).opacity);

  // 투명도가 0이면 1로, 1이면 0으로 변경
  menuContainer.style.opacity = currentOpacity === 0 ? 1 : 0;
  // 클릭 가능 여부 설정
  menuContainer.style.pointerEvents = currentOpacity === 0 ? "auto" : "none";
}

document.addEventListener('DOMContentLoaded', function () {
  let iconContainer = document.querySelector('#container header .icon-container');
  let menubar = document.querySelector('.menubar');
  let icon = document.querySelector('.icon');
  let menuUl = document.querySelector('.menubar #menu-container ul');
  let menuSubUl = document.querySelector('header .menubar #menu-container ul li > ul');

  iconContainer.addEventListener('click', function () {
    iconContainer.classList.toggle('active');
    menubar.classList.toggle('active');

    if (iconContainer.classList.contains('active')) {
      menubar.style.left = '-150px'; // 클릭 후
      icon.style.display = 'none'; // 햄버거 제거
    } else {
      menubar.style.left = '-1220px'; // 클릭 전
      icon.style.display = 'block'; // 햄버거 나타내기
    }

    if (iconContainer.classList.contains('active')) {
      menuUl.style.opacity = '1'; // 클릭 후
      menuSubUl.style.opacity = '1';
    } else {
      menuUl.style.opacity = '0'; // 클릭 전
    }
  });
});


// 메뉴바 x클릭 시 메뉴바 닫기
document.addEventListener('DOMContentLoaded', function () {
  let closeButton = document.querySelector('.close');
  let menuContainer = document.querySelector('.menubar #menu-container ul');

  // 이미지가 클릭될 때 이벤트 핸들러 추가
  closeButton.addEventListener('click', function () {

    if (iconContainer.classList.contains('active')) {
      menubar.style.left = '-1220px'; // 클릭 후
    } else {
      menubar.style.left = '0'; // 클릭 전
    }
    menuContainer.classList.remove('active'); // 'active' 클래스 제거


  });
});
// 메뉴 클릭 시 --> 각 li 아이템들 hover 시 동작
document.addEventListener('DOMContentLoaded', function () {
  let menuItems = document.querySelectorAll('header .menubar #menu-container ul > li a');

  // 각 메뉴 아이템에 이벤트 리스너 추가
  menuItems.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      // 마우스가 요소 위로 이동할 때 수행할 작업
      item.style.color = 'black';
      item.style.opacity = '0.5';
    });

    item.addEventListener('mouseout', function () {
      // 마우스가 요소에서 벗어날 때 수행할 작업
      item.style.color = '';
      item.style.opacity = '1';
    });
  });
});


// 텍스트, 이미지  스크롤 내리면 애니메이션 적용
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;

  document.querySelectorAll(".content__item").forEach(item => {
    if (scrollTop > item.offsetTop - window.innerHeight / 2) {
      item.classList.add("show");
    }
  });

  // 1분에 60번 실행
  // 브라우저에 최적화 부드럽게, 메모리 훨씬 더 적게 차지
  requestAnimationFrame(scroll);
}
scroll();


// 스크롤 올리기 위함 용도
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 700) { // 해당 스크롤 내린 위치값이 700보다 크다면
    gsap.to(toTopEl, .6, { // toTopEl 적용 대상, 0.6초동안 애니메이션 진행
      opacity: 1,
      display: 'block'
    });
    toTopEl.classList.add('show'); // 클래스추가 : display : block을 하기 위함
  } else {
    gsap.to(toTopEl, .6, {
      opacity: 0,
      display: 'none'
    });
    toTopEl.classList.remove('show');
  }
}, 300));


// 해당 버튼 클릭 시 맨 상단에 올라감
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const sections = document.querySelectorAll('section');
let navItems = document.querySelectorAll('#parallax__dot ul li');
console.log(navItems[0])
console.log(sections[0].id)
window.addEventListener('scroll', _.throttle(function () {
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
      // 현재 섹션에 대응하는 메뉴 바의 a 태그 활성화
      navItems.forEach((navItem) => {
        if (navItem.href === `#${section.id}`) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      });
    }
  });
}, 300));

// Create a new OpenLayers Map
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([126.97794, 37.5665]), // Seoul, South Korea
    zoom: 10
  }),
  size: [500, 500]
});

// Add a WMS layer to the map
const wmsLayer = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: 'https://www.nie-ecobank.kr/ecoapi/BgtsInfoService/wms/getBirdsPointWMS',
    params: {
      'serviceKey': '48UV42UKKFW16R243UQT677L92T4CX5H11EMQ6OK', // 인증키
      'LAYERS': 'mv_map_bgts_birds_point', // 레이아웃
      'TRANSPARENT': true, // 배경 안보이게
      'FORMAT': 'image/png', // 이미지
      'SRS': 'EPSG:5186',
      'BBOX': '314548.9311225004,401742.29949240043,320867.0145135768,409072.0397406582',
      'WIDTH': 663, // 넓이
      'HEIGHT': 768 // 높이
    }
  })
});

// Add the WMS layer to the map
map.addLayer(wmsLayer);
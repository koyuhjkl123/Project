
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
    let iconContainer = document.querySelector('header .icon-container');
    let menubar = document.querySelector('.menubar');
    let icon = document.querySelector('.icon');
  
    iconContainer.addEventListener('click', function () {
      iconContainer.classList.toggle('active');
      menubar.classList.toggle('active');
  
      if (iconContainer.classList.contains('active')) {
        menubar.style.left = '55px'; // 클릭 후
        icon.style.display = 'none'; // 햄버거 제거
      } else {
        menubar.style.left = '-1220px'; // 클릭 전
        icon.style.display = 'block'; // 햄버거 나타내기
      }
    });
  });
  
  
  // 메뉴바 x클릭 시 메뉴바 닫기
  document.addEventListener('DOMContentLoaded', function() {
    let closeButton = document.querySelector('.close');
    let menuContainer = document.querySelector('.menubar #menu-container ul');
  
    // 이미지가 클릭될 때 이벤트 핸들러 추가
    closeButton.addEventListener('click', function() {
  
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
  
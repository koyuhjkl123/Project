// 상단으로 이동 버튼 생성 및 스타일 설정
// const scrollToTopBtn = document.createElement('button');
// scrollToTopBtn.textContent = '↑';
// scrollToTopBtn.style.position = 'fixed';
// scrollToTopBtn.style.bottom = '20px';
// scrollToTopBtn.style.right = '20px';
// scrollToTopBtn.style.padding = '10px 15px';
// scrollToTopBtn.style.fontSize = '20px';
// scrollToTopBtn.style.display = 'none'; // 기본적으로 숨김
// scrollToTopBtn.style.cursor = 'pointer';
// document.body.appendChild(scrollToTopBtn);

// 스크롤 이벤트 리스너 추가
// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 100) {
//         // 사용자가 100px 이상 스크롤하면 버튼 표시
//         scrollToTopBtn.style.display = 'block';
//     } else {
//         scrollToTopBtn.style.display = 'none';
//     }
// });

// // 버튼 클릭 시 상단으로 스무스 스크롤
// scrollToTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '1000';

        const img = document.createElement('img');
        img.src = image.src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        lightbox.appendChild(img);

        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // 기본 이벤트 차단
        const extraContent = this.parentNode.querySelector('.extra-content');
        if (extraContent) {
            extraContent.style.display = extraContent.style.display === 'none' ? 'block' : 'none'; // 내용 토글
        } else {
            // 추가 내용이 없을 경우, 간단한 메시지 표시
            alert('추가 정보가 준비되어 있지 않습니다.');
        }
    });
});

document.addEventListener('scroll', function () {
    var parallaxSpeed = 0.5;
    document.querySelectorAll('.parallax-section').forEach(function (section) {
        var offset = window.pageYOffset - section.offsetTop;
        section.style.backgroundPositionY = offset * parallaxSpeed + 'px';
    });
});
$(document).ready(function () {
    var $animation_elements = $('.slide');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = window_top_position + window_height;

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = element_top_position + element_height;

            if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
                $element.addClass('hasSlid');
            } else {
                $element.removeClass('hasSlid');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});




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
  

  // 스크롤 올리기 위함 용도
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 300) { // 해당 스크롤 내린 위치값이 700보다 크다면
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
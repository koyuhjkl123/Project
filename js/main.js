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


const sections = document.querySelectorAll('.content__item');
let navItems = document.querySelectorAll('#parallax__dot ul li');

window.addEventListener('scroll', _.throttle(function () {
  const scrollY = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
      // 현재 섹션에 대응하는 메뉴 바의 a 태그 활성화
      console.log(navItems[index])
      console.log(sections[index].id)

      const currentNavItem = navItems[index].querySelector('a');
      const sectionIdWithoutHash = currentNavItem.href.split('#')[1]; // #을 제외한 부분 추출


      navItems.forEach((item) => {
        item.classList.remove('active');
      });

      if (sectionIdWithoutHash === sections[index].id) {
        navItems[index].classList.add('active');
      }
    }
  });
}, 300));

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생 여부
  autoplay: {
      delay: 5000 // 0.5초
  },
  pagination: {
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
  },
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  // loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
      prevEl: '.awards .swiper-prev',
      nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;


promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
      // 숨김 처리
      promotionEl.classList.add('hide');
  }else {
      // 보이기 처리
      promotionEl.classList.remove('hide');
  }
});

// let mHtml = $(".body_scroll_section");
// let page = 1;


// mHtml.animate({scrollTop : 0},10);
// $(window).on("wheel", function(e) {
//   if(mHtml.is(":animated")) return;
//   if(e.originalEvent.deltaY > 0) {
//       if(page == 4) return;
//       page++;
//   } else if(e.originalEvent.deltaY < 0) {
//       if(page == 1) return;
//       page--;
//   }
//   let posTop =(page-1) * $(window).height();
//   mHtml.animate({scrollTop : posTop});
// });

// ScrollMagic controller 초기화
var controller = new ScrollMagic.Controller();

// 각 이미지에 대한 Scene 생성
$('.body_scroll').each(function (index, element) {
  var scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 0.8, // 0에서 1 사이의 값, 이미지가 나타나는 위치 조절
    reverse: false, // 한 번 재생된 애니메이션은 되감기되지 않도록 설정
  })
    .setClassToggle(element, 'visible') // 클래스 토글
    .addTo(controller);
});

const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// 스크롤 이벤트 발생 후 1초 후에 mouseStopped 함수 호출
document.addEventListener("scroll", () => {
  cursor.style.display = "block";

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 1000);
});


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

// section 이미지 열기 닫기 버튼 
const promotionEl = document.querySelector('.promotion'); // swiper auto 감싸는 전체 태그
const imageClose = document.querySelector('.image-close'); // 이미지 닫기
const imageblock = document.querySelector('.notice .notice-line .inner .inner__right .image-block'); // 이미지 열기
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // 버튼
let isHidePromotion = false;
// true : 이미지 닫기
// false : 이미지 열기

// 버튼을 클릭 시 
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
      // 숨김 처리
      promotionEl.classList.add('hide'); // 버튼 누르면 .hide 클래스 생성
      imageblock.classList.remove('hide'); // 이미지 열기 텍스트 보이게
      imageClose.classList.add('hide'); // 이미지 닫기 텍스트 안보이게
  }else {
      // 보이기 처리
      promotionEl.classList.remove('hide'); // 버튼 다시 누르면 .hide 클래스 제거
      imageblock.classList.add('hide'); // 이미지 열기 텍스트 안보이게
      imageClose.classList.remove('hide'); // 이미지 닫기 텍스트 보이게
  }
});



// 인트로 영역 애니메이션 옵션 설정
const animationOptions = {
  ease: 'expo.inOut'  // Easing 함수를 'expo.inOut'으로 설정
}

// 인트로 애니메이션 함수 정의
const introAnimation = () => {
  // GSAP 타임라인 생성
  const tl = gsap.timeline({
    defaults: {
      ease: animationOptions.ease,  // 기본적으로 사용할 Easing 함수 설정
      duration: 1,  // 기본 애니메이션 지속 시간
    }
  });
  
  // 1. 제목이 위로 이동하면서 나타남
  tl.to('.intro__title', {
    duration: 1.5,  // 애니메이션 지속 시간
    y: 0,  // y축 방향으로 0만큼 이동
    autoAlpha: 1,  // 투명도를 1로 설정하여 나타남
    delay: 0.5,  // 0.5초의 딜레이
  })
  // 2. 왼쪽, 오른쪽 배경이 나타나면서 확장됨
  .to('.intro__background--left, .intro__background--right', {
    scaleX: 1,  // x축 방향으로 1만큼 확장
  })
  // 3. 배경이 위로 축소되고 투명도가 0이 됨
  .to('.intro__background--left, .intro__background--right', {
    scaleY: 0,  // y축 방향으로 0만큼 축소
    transformOrigin: 'top center',  // 축소 기준을 상단 중앙으로 설정
  })
  // 4. 제목이 다시 위로 이동하면서 투명도가 0으로 설정됨
  .to('.intro__title', {
    duration: 1.5,  // 애니메이션 지속 시간
    y: -60,  // y축 방향으로 -60만큼 이동
    autoAlpha: 0,  // 투명도를 0으로 설정하여 사라짐
  }, '-=0.6')  // 앞서 진행된 애니메이션의 0.6초 전에 시작
  // 5. 인트로 영역이 위로 이동하면서 화면을 떠남
  .to('.intro', {
    y: '-100%',  // y축 방향으로 -100%만큼 이동하여 사라짐
  }, '-=0.5');  // 앞서 진행된 애니메이션의 0.5초 전에 시작
  
  // 생성된 타임라인 반환
  return tl;
}

// 요소들을 기울이는 애니메이션 함수
const skewInElements = elements => {
  const tl = gsap.timeline();
  
  // 주어진 요소들에 대해 애니메이션 설정
  tl.from(elements, {
    duration: 1,  // 애니메이션 지속 시간
    ease: animationOptions.ease,  // Easing 함수 설정
    skewY: -5,  // y축 방향으로 -5만큼 기울임
    autoAlpha: 0,  // 투명도를 0으로 설정하여 나타남
    y: 40,  // y축 방향으로 40만큼 이동
  });
  
  // 생성된 타임라인 반환
  return tl;
}

// 요소들을 페이드인하는 애니메이션 함수
const fadeInElements = elements => {
  const tl = gsap.timeline();
  
  // 주어진 요소들에 대해 애니메이션 설정
  tl.from(elements, {
    duration: 1,  // 애니메이션 지속 시간
    ease: animationOptions.ease,  // Easing 함수 설정
    y: '20px',  // y축 방향으로 20px만큼 이동
    autoAlpha: 0,  // 투명도를 0으로 설정하여 나타남
    stagger: 0.1,  // 요소들 간에 0.1초 간격을 두고 순차적으로 애니메이션 실행
  });
  
  // 생성된 타임라인 반환
  return tl;
}

// 메인 타임라인 정의
const master = gsap.timeline({
  paused: false,  // 타임라인을 자동으로 실행
  delay: 0.2,  // 0.2초의 딜레이
});

// 메인 타임라인에 각 애니메이션 추가
master
  .add(introAnimation())  // 인트로 애니메이션
  .add(fadeInElements('.header'))  // 헤더 요소들의 페이드인 애니메이션
  .add(skewInElements('.header'), '-=1');  // 헤더 요소들을 기울이는 애니메이션 (앞선 애니메이션의 1초 전에 시작)


// 모바일 영역 //

document.querySelector('.phone-icon').addEventListener('click', function() {
  let body = document.querySelector('body');
  body.classList.toggle('mobile-version');
});


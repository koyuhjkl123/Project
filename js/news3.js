// document.addEventListener('DOMContentLoaded', function() {
//     // var swiper1 = new Swiper('.swiper-container', {
//     //   slidesPerView: 1,
//     //   spaceBetween: 30,
//     //   loop: true,
//     //   pagination: {
//     //     el: '.swiper-pagination',
//     //     clickable: true,
//     //   },
//     //   navigation: {
//     //     nextEl: '.swiper-next',
//     //     prevEl: '.swiper-prev',
//     //   },
//     // });
    
//     // var swiper2 = new Swiper('.notice-line .swiper-container', {
//     //   direction: 'vertical',
//     //   autoplay: true,
//     //   loop: true
//     // });
    
//     var swiper3 = new Swiper('.swiper-container', {
//       slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
//       spaceBetween: 10, // 슬라이드 사이 여백
//       centeredSlides: true, // 1번 슬라이드가 가운데 보이기
//       loop: true, // 반복재생 여부
//       autoplay: {
//         delay: 5000 // 0.5초
//       },
//       pagination: {
//         el: '.swiper-pagination', // 페이지 번호 요소 선택자
//         clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
//       },
//       navigation: {
//         prevEl: '.swiper-prev',
//         nextEl: '.swiper-next'
//       },
//     });

//     // Swiper3의 중앙에 오는 슬라이드를 활성화
//     swiper3.on('slideChange', function () {
//       swiper3.slideToLoop(swiper3.realIndex); // 현재 활성화된 슬라이드를 중앙에 오는 슬라이드로 이동
//     });
    
//     // var swiper4 = new Swiper('.awards .swiper-container',{
//     //   autoplay: true,
//     //   // loop: true,
//     //   spaceBetween: 30,
//     //   slidesPerView: 5,
//     //   navigation: {
//     //     prevEl: '.awards .swiper-prev',
//     //     nextEl: '.awards .swiper-next'
//     //   }
//     });
//});

document.addEventListener('DOMContentLoaded', function() {
    var swiper3 = new Swiper('.swiper-container', {
      slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
      spaceBetween: 10, // 슬라이드 사이 여백
      centeredSlides: true, // 1번 슬라이드가 가운데 보이기
      loop: true, // 반복재생 여부
      autoplay: {
        delay: 5000 // 0.5초
      },
      pagination: {
        el: '.swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
      },
      navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
      },
    });

    // Swiper3의 중앙에 오는 슬라이드를 활성화
    swiper3.on('slideChange', function () {
      var slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(function(slide) {
        if (slide === slides[swiper3.realIndex]) {
          slide.classList.add('active-slide'); // 활성화된 슬라이드에 active-slide 클래스 추가
        } else {
          slide.classList.remove('active-slide'); // 나머지 슬라이드에서 active-slide 클래스 제거
        }
      });
    });
});
   
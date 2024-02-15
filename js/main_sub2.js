

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // 현재 보여주는 슬라이드 갯수
  spaceBetween: 20, // 각 슬라이드의 간격
  loop: true, // 무한 재생 여부
  effect: 'fade',  // 이미지 간의 부드러운 페이드 효과 추가
  navigation: { // 왼쪽, 오른쪽
    type: 'bullets',
    nextEl: '.swiper-next', // 다음
    prevEl: '.swiper-prev', // 이전
  },
  pagination: {
    el: '.swiper-pagination', // 페이지 당담을 하는 요소
    clickable: true, // 페이지 표시 가능 여부, 즉 해당 이미지 클릭하면 해당 페이지 이동
  },
  // 추가: 자동 넘김 활성화 및 간격 설정 (5초)
  autoplay: { // 자동 재생
    delay: 5000, // 5초마다 다른 이미지로 넘김
    disableOnInteraction: false, // 사용자가 클릭 시 자동멈춤을 하지 않게 설정
    // true 설정 시 자동멈춤 가능
  },
});

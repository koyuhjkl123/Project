document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slider input[type="radio"]');
  const texts = document.querySelectorAll('.text-box');

  // 슬라이드 변경 시 텍스트 박스 숨기기
  function hideTexts() {
    texts.forEach(text => {
      text.style.display = 'none';
    });
  }

  //hideTexts(); 초기에는 모든 텍스트 숨기기

  slides.forEach(slide => {
    slide.addEventListener("change", function () {
      hideTexts(); // 변경 시 모든 텍스트 숨기기
      const index = parseInt(this.id.slice(-1)) - 1; // 선택된 슬라이드의 인덱스 계산
      texts[index].style.display = 'block'; // 선택된 슬라이드에 해당하는 텍스트 표시
    });
  });
});

const headerLogo = document.querySelector('.logo');

headerLogo.addEventListener('click', function () {
  location.href = 'main.html'
})

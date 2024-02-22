setTimeout(function() {
  document.getElementById('nav-toggle').checked = true;
}, 1000); // 1000ms = 1초

// HTML1에 있는 스크립트 부분
function showIntro() {
  // Intro 애니메이션 코드...

  // 애니메이션 후 HTML2로 자동으로 이동
  setTimeout(function() {
      window.location.href = '../../HTML/main.html';
  }, 5000); // 5000ms (5초) 후에 HTML2로 이동
}

// HTML1에 있는 스크립트 부분
document.addEventListener('DOMContentLoaded', function() {
  // 자동으로 전환할 태그 선택
  const autoTransitionElement = document.getElementById('auto-main');

  // 애니메이션 또는 다른 효과 코드...

  // 페이지 전환
  setTimeout(function() {
      window.location.href = '../../HTML/main.html'; // 자동으로 전환할 페이지 URL
  }, 7000); // (7초) 후에 전환
});
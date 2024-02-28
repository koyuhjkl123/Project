setTimeout(function() {
  document.getElementById('nav-toggle').checked = true;
}, 1000); // 1000ms = 1초


// HTML1에 있는 스크립트 부분
document.addEventListener('DOMContentLoaded', function() {
  // 자동으로 전환할 태그 선택
  const autoTransitionElement = document.getElementById('auto-main');

  // 애니메이션 또는 다른 효과 코드...

  // 페이지 전환
  setTimeout(function() {
      // window.location.href = '../../HTML/main.html'; // 자동으로 전환할 페이지 URL
      window.Animation = '../../HTML/main.html';
      
  }, 7000); // 7000(7초) 후에 전환
});


// let tl = gsap.timeline();

// // 인트로 애니메이션 코드

// tl.to(".nav-close", {duration: 5, opacity: 1, onComplete: function() {
//   // 애니메이션이 완료된 후 3초 뒤에 투명도를 0으로 만들고, 새로운 페이지로 이동
//   tl.to("body", {duration: 1, opacity: 0, onComplete: function() {
//     setTimeout(function() {
//       window.location.href = '../../HTML/main.html'; // 이동할 웹페이지 URL
//     }, 3000);
//   }});
// }});

let tl = gsap.timeline();

// 인트로 애니메이션 코드

tl.to(".nav-close", {duration: 4, opacity: 1, onComplete: function() {
  // 투명도를 0으로 만드는 애니메이션 실행
  tl.to("body", {duration: 3, opacity: 0});
  
  // 새로운 페이지로 이동하는 시간 지연
  setTimeout(function() {
    window.location.href = '../../HTML/main.html'; // 이동할 웹페이지 URL
  }, 2000);
}});


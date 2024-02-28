//  상단 아이콘 이미지 보이기
//  function showImage() {
//     let logo = document.querySelector('.logo');
//     let logoImg = document.querySelector('.logo-img');
//     logo.style.display = 'none';
//     logoImg.style.display = 'block';
//   }

//   // 이미지 숨기기
//   function hideImage() {
//     let logo = document.querySelector('.logo');
//     let logoImg = document.querySelector('.logo-img');
//     logo.style.display = 'block';
//     logoImg.style.display = 'none';
//   }

// 문서가 로드될 때 실행되는 함수
document.addEventListener('DOMContentLoaded', function () {
  let category = document.querySelector('.menu .menubar #menu-container ul li:nth-child(1) a');
  let subMenu = category.querySelector('.menu .menubar #menu-container ul li > ul li a');

  // 새종류 항목을 클릭하면 하위 카테고리를 펼치거나 숨기는 함수
  category.addEventListener('click', function () {
    if (subMenu.style.display === 'none' || subMenu.style.display === '') {
      subMenu.style.display = 'block';
    } else {
      subMenu.style.display = 'none';
    }
  });
});



// footer 영역 
// 년도 계산 (2024년)
const thisYear = document.querySelector('.more');
thisYear.textContent = new Date().getFullYear();


const headerLogo = document.querySelector('.logo');

headerLogo.addEventListener('click', function () {
  location.href = 'main.html'
})

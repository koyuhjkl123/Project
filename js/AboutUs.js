
// wheel을 사용하기 위한 scroll제거한다.
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});


document.addEventListener("DOMContentLoaded", function() {
  let currentPage = 0;
  const pages = document.querySelectorAll("section");

  function scrollToPage(index) {
      pages[index].scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("wheel", function(event) {
      event.preventDefault(); // 스크롤 이벤트 중지

      if (event.deltaY < 0 && currentPage > 0) {
          scrollToPage(currentPage - 1);
          currentPage--;
      } else if (event.deltaY > 0 && currentPage < pages.length - 1) {
          scrollToPage(currentPage + 1);
          currentPage++;
      }
  });
});
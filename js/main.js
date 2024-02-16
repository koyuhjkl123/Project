// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
  let myPageMenu = document.querySelector('.top-menu .menu-list li:nth-child(3)');

  myPageMenu.addEventListener('mouseenter', function () {
    myPageMenu.querySelector('ul').style.opacity = '1';
    myPageMenu.querySelector('ul').style.transform = 'translateY(0)';
  });

  myPageMenu.addEventListener('mouseleave', function () {
    myPageMenu.querySelector('ul').style.opacity = '0';
    myPageMenu.querySelector('ul').style.transform = 'translateY(-40px)';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const icon = document.querySelector('.icon');
  const menubar = document.querySelector('.menubar');

  icon.addEventListener('click', function () {
    menubar.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function(){
  const icon = document.querySelector('.icon');
  const menuUl = document.querySelector('header .menubar');

  icon.addEventListener('click', function(){
    menuUl.querySelector('ul').style.opacity = '1';
    menuUl.querySelector('ul').style.transition = '1.2s';
    menuUl.querySelector('ul').style.transform = 'translateY(-20px)';
  });

});
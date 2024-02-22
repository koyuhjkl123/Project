
// 하트 아이콘 클릭동작

// 하트 아이콘 상태를 토글하는 함수
function toggleHeart(elementId) {
    var heartIcon = document.getElementById(elementId).querySelector('.fa-heart');
    // 하트 아이콘의 클래스를 확인하여 상태를 변경합니다.
    if (heartIcon.classList.contains('fa-regular')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }
}


// 리스트 나타내기_버튼
function btnClick(){
    if(document.querySelector(".sidebar").style.display == 'none'){
        document.querySelector(".sidebar").style.display = 'block';
    }else{
        document.querySelector(".sidebar").style.display = 'none'
    }
}


// 모든 설명보기 버튼을 선택합니다.
var buttons = document.querySelectorAll(".text");
// 각 버튼에 대해 클릭 이벤트를 등록합니다.
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // 현재 버튼의 부모 요소를 찾습니다 (즉, .container).
        var container = this.closest(".container");
        // 부모 요소 내부의 이미지와 설명을 토글합니다.
        var picBird = container.querySelector(".pic_bird");
        var paragraph = container.querySelector("p");
        
        if (picBird.style.display === "none") {
            picBird.style.display = "block";
            picBird.style.animation = "none";
            paragraph.style.display = "none";

        } else {
            picBird.style.display = "none";
            paragraph.style.display = "block";

        }
    });
});
// 이렇게하면 일일히 함수 호출에 각 객체의 id를 넣어 지정해주지 않고도 부모요소의 id를 찾아 자동 적용시켜 사용할 수 있다
// 하트 아이콘도 이렇게하면 번거로움이 덜 해짐



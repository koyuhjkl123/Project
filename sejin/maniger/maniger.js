// 모든 .maniger_Mdiv 요소를 가져옴
var manigerMdivs = document.querySelectorAll('.maniger_Mdiv');

// manigerListBt 함수(메서드) 정의
function manigerListBt(event) {
    // 클릭된 .maniger_Mdiv
    var clickedMdiv = this;

    //h4랑 ul리스트 가져오기
    var h4Element = clickedMdiv.querySelector('h4');
    var ulElement = clickedMdiv.querySelector('.Mdiv_list');

    // h4 보임 여부에 따른 동작
    if (h4Element.style.display !== 'none') {
        // ul 보이고, h4숨기기
        ulElement.style.display = 'block';
        h4Element.style.display = 'none'
    } else {
        ulElement.style.display = 'none';
        h4Element.style.display = 'block';
    }
}

// 클릭 이벤트 리스너를 추가
document.addEventListener('click', function (event) {
    // 클릭된 요소가 .maniger_Mdiv 요소 내부에 있는지 확인 = 부모 요소를 확인해 해당 요소만 동작할 수 있도록 확인
    var isInsideManigerMdiv = event.target.closest('.maniger_Mdiv');
    // 클릭된 요소가 .maniger_Mdiv 요소 내부에 있는 경우
    if (isInsideManigerMdiv) {
        // manigerListBt 함수를 호출
        manigerListBt.call(isInsideManigerMdiv, event);
    } else {
        //한번 더 클릭하면 해당 모든 .maniger_Mdiv 요소를 숨김
        manigerMdivs.forEach(function (manigerMdiv) {
            var ulElement = manigerMdiv.querySelector('.Mdiv_list');
            ulElement.style.display = 'none';
        });
    }
});
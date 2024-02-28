document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.product a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 기본 동작 방지

            // 이미지 URL 가져오기
            var imageUrl = link.getAttribute('data-preview-image');

            // 이미지를 포함할 새 div 요소 생성
            var previewDiv = document.createElement('div');
            previewDiv.style.position = 'fixed';
            previewDiv.style.top = '0';
            previewDiv.style.left = '0';
            previewDiv.style.width = '100vw';
            previewDiv.style.height = '100vh';
            previewDiv.style.display = 'flex';
            previewDiv.style.justifyContent = 'center';
            previewDiv.style.alignItems = 'center';
            previewDiv.style.backgroundColor = 'rgba(0,0,0,0.5)'; // 배경을 약간 어둡게 처리
            previewDiv.style.zIndex = '10000'; // 확실히 최상위에 위치하도록 z-index 설정

            // 미리보기 이미지 생성
            var previewImg = document.createElement('img');
            previewImg.src = imageUrl;
            previewImg.style.maxWidth = '80%';
            previewImg.style.maxHeight = '80%';
            previewImg.style.border = '3px solid #fff';
            previewImg.style.borderRadius = '10px';
            previewImg.style.boxShadow = '0 4px 8px rgba(0,0,0,.5)';

            // 이미지 클릭 시 이벤트 전파 방지
            previewImg.addEventListener('click', function (event) {
                event.stopPropagation(); // 이벤트 버블링 방지
            });

            // 이미지를 div에 추가
            previewDiv.appendChild(previewImg);

            // div를 body에 추가
            document.body.appendChild(previewDiv);

            // 이미지 및 배경 클릭 시 미리보기 제거
            previewDiv.addEventListener('click', function () {
                previewDiv.remove();
            });
        });
    });
});
// 모든 'like-button' 클래스를 가진 버튼에 대해 이벤트 리스너를 설정합니다.
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function () {
        const heartIcon = this.querySelector('i');
        // 클래스를 토글하여 하트의 채워짐 상태를 변경합니다.
        heartIcon.classList.toggle('fas');
        heartIcon.classList.toggle('far');
    });
});

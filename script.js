// 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', function() {
    console.log('웹사이트가 로드되었습니다!');
    
    // 헤더 클릭 시 이벤트
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        alert('헤더를 클릭하셨습니다!');
    });
}); 
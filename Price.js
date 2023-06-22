// 서버에서 가격 정보를 가져오는 비동기 함수 (AJAX를 사용한 예시)
function getPriceFromServer(service) {
  // 서비스별 가격 정보를 가져오는 AJAX 요청
  // 가상의 URL '/get-price'을 실제 서버의 가격 정보를 제공하는 API의 엔드포인트로 수정해야 합니다.
  return fetch(`/get-price?service=${service}`)
    .then(response => response.json())
    .then(data => data.price)
    .catch(error => {
      console.error('가격 정보를 가져오는 중 오류가 발생했습니다:', error);
    });
}

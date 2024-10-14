//console.log(document.querySelector('#bankTransfer'));

//document.querySelectorAll('.payment-methods input').forEach(input => {
//	input.addEventListener('click', a => {
//		console.log(document.querySelector('#bankTransfer').checked);
//	});
//});

// 결제 버튼 이벤트
document.querySelector('.pay-button').addEventListener('click', a => {
	console.log('결제버튼클릭');
	console.log('결제금액 : ' + document.querySelector('#bookPrice').getAttribute('bookPrice'));
	if(document.querySelector('#cardPayment').checked){
		console.log('신용카드 결제 방식');
		cardPay();
	}else if(document.querySelector('#bankTransfer').checked){
		console.log('계좌이체 방식');
		bankTransfer();
	}else if(document.querySelector('#kakaoPay').checked){
		console.log('카카오페이 결제 방식');
		kakaoPay();
	}
});

document.querySelector('.cancel-button').addEventListener('click', a => {
	console.log('결제취소버튼');
});
// 카카오페이 결제 api 관련
//document.querySelector(".btn-pay-ready").addEventListener('click', a => {
//  	console.log("결제test");
//    // 필요한 데이터를 객체에 담기
//    let data = {
//    	title: '상품명',    // 카카오페이에 보낼 대표 상품명
//        bookPrice: 1000    // 총 결제금액
//    };
//      
//    // Fetch API 사용
//    fetch('/order/pay/ready', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json', // 요청을 JSON으로 보내기 위한 헤더 설정
//            'Authorization': 'DEV_SECRET_KEY {DEVC61F3A34BC5C630FDC1EC579B491CCAB3EABA}' // 카카오페이 인증 헤더 (Admin Key 입력 필요)
//        },
//        body: JSON.stringify(data) // 데이터를 JSON 문자열로 변환하여 전송
//    })
//    .then(response => response.json()) // 응답을 JSON 형식으로 파싱
//    .then(data => {
//        location.href = data.next_redirect_pc_url; // 카카오페이로 리다이렉트
//    })
//    .catch(error => console.error('Error:', error)); // 오류 처리
//});
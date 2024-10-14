let f = document.forms[0];
const mno = new URLSearchParams(location.search).get('mno');
// 총 결제 금액 계산
let totalPrice = 0;

document.querySelectorAll('.product-details').forEach(item => {
    const bookPrice = Number(item.querySelector('.bookPrice').getAttribute('data-price'));
    const quantity = Number(item.querySelector('.spanCount').innerHTML);
    totalPrice += bookPrice * quantity;
});

document.querySelector('#totalPrice').innerHTML = totalPrice;

// 수량 증가/감소 버튼 이벤트 리스너 추가
document.querySelectorAll('.product-details').forEach(item => {
    const spanCount = item.querySelector('.spanCount');
    const bookPriceElement = item.querySelector('.bookPrice');
    const inputCount = item.querySelector('input[name="count"]');

    item.querySelector('.minus').addEventListener('click', () => {
        let currentCount = Number(spanCount.innerHTML);
        if (currentCount > 1) {
            currentCount--;
            spanCount.innerHTML = currentCount;
            inputCount.value = currentCount;

            // 가격 업데이트
            const newPrice = Number(bookPriceElement.getAttribute('data-price')) * currentCount;
            bookPriceElement.innerHTML = newPrice;

            // 총 결제 금액 업데이트
            updateTotalPrice();
        }
    });

    item.querySelector('.plus').addEventListener('click', () => {
        let currentCount = Number(spanCount.innerHTML);
        if (currentCount < 100) {
            currentCount++;
            spanCount.innerHTML = currentCount;
            inputCount.value = currentCount;

            // 가격 업데이트
            const newPrice = Number(bookPriceElement.getAttribute('data-price')) * currentCount;
            bookPriceElement.innerHTML = newPrice;

            // 총 결제 금액 업데이트
            updateTotalPrice();
        }
    });
});

function updateTotalPrice() {
    totalPrice = 0;
    document.querySelectorAll('.product-details').forEach(item => {
        const bookPrice = Number(item.querySelector('.bookPrice').innerHTML);
        totalPrice += bookPrice;
    });
    document.querySelector('#totalPrice').innerHTML = totalPrice;
}

document.querySelector('select[name="point"]').addEventListener('change', e => {
	const point = document.querySelector('select[name="point"]').value;
	document.querySelector('#totalPrice').innerHTML = totalPrice - point;
});
// 상품 삭제
function deleteCart(bno) {
	location.href = '/shop/deleteCart?bno=' + bno + "&mno=" + mno;
}
// 결제 버튼 이벤트
document.querySelector('.pay-button').addEventListener('click', a => {
	console.log('결제버튼클릭');
	if(document.querySelector('#cardPayment').checked){
		console.log('신용카드 결제 금액 : ' + document.querySelector('#totalPrice').innerHTML);
		cardPay();
	}else if(document.querySelector('#bankTransfer').checked){
		console.log('계좌이체 결제 금액 : ' + document.querySelector('#totalPrice').innerHTML);
		bankTransfer();
	}else if(document.querySelector('#kakaoPay').checked){
		console.log('카카오페이 결제 금액 : ' + document.querySelector('#totalPrice').innerHTML);
		kakaoPay();
	}
});

// 결제 취소 이벤트
document.querySelector('.cancel-button').addEventListener('click', a => {
	console.log('결제취소버튼');
	if(confirm('정말 취소하시겠습니까? (입력된 정보는 저장되지 않습니다.)')){
		location.href = '/shop/list';
	}
});

// 신용카드 결제
function cardPay() {
	// 신용카드 관련 로직 실행
	alert('뭔가신용카드결제');
	// 결제 완료 후 페이지 이동
	if(confirm('[결제 완료] 결제 상세 페이지로 이동하시겠습니까? ( 거절 시 상품목록으로 이동 )')){
		const listData = [];
		// 상품 리스트 데이터 수집
		document.querySelectorAll('.product-details').forEach(product => {
			const bno = product.querySelector('input[name="bno"]').value;
			const count = product.querySelector('input[name="count"]').value;
			listData.push({ "bno" : bno, "count" : count});
		});
		const orderData = {
			    mno: mno,
			    totalPrice: document.querySelector('#totalPrice').innerHTML,
			    orderName: document.getElementById('orderName').value,
			    orderPhone: document.getElementById('orderPhone').value,
			    orderAddr: document.getElementById('orderAddr').value,
			    point: document.querySelector('select[name="point"]').value,
			    userDeposit: document.getElementById('userDeposit').value,
			    list: listData // 여기에 상품 리스트 데이터 추가
			};


			// 데이터를 JSON으로 변환 후 전송
			fetch('/shop/buySuccess', {
			    method: 'POST',
			    headers: {
			        'Content-Type': 'application/json',
			    },
			    body: JSON.stringify(orderData),
			})
			.then(response => response.text())
			.then(data => {
				console.log("비동기 결과 : " + data);
				if(data === 'success'){
					location.href = "/order/orderDetail?mno=" + mno;
				}else {
					alert('실패데스');
				}
			})
			.catch(error => console.error('Error:', error));

	}else {
		const listData = [];
		// 상품 리스트 데이터 수집
		document.querySelectorAll('.product-details').forEach(product => {
			const bno = product.querySelector('input[name="bno"]').value;
			const count = product.querySelector('input[name="count"]').value;
			listData.push({ "bno" : bno, "count" : count});
		});
		const orderData = {
			    mno: mno,
			    totalPrice: document.querySelector('#totalPrice').innerHTML,
			    orderName: document.getElementById('orderName').value,
			    orderPhone: document.getElementById('orderPhone').value,
			    orderAddr: document.getElementById('orderAddr').value,
			    point: document.querySelector('select[name="point"]').value,
			    userDeposit: document.getElementById('userDeposit').value,
			    list: listData // 여기에 상품 리스트 데이터 추가
			};


			// 데이터를 JSON으로 변환 후 전송
			fetch('/shop/buySuccess', {
			    method: 'POST',
			    headers: {
			        'Content-Type': 'application/json',
			    },
			    body: JSON.stringify(orderData),
			})
			.then(response => response.text())
			.then(data => {
				console.log("비동기 결과 : " + data);
				if(data === 'success'){
					location.href = "/shop/list";
				}else {
					alert('실패데스');
				}
			})
			.catch(error => console.error('Error:', error));
	}
}
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
// 필드
const inputCount = document.querySelector('.quantity-control input');
const spanText = document.querySelector('.total-price span');
const bp = document.querySelector('.total-price span').getAttribute('bp');
const bno = new URLSearchParams(location.search).get('bno');
// 버튼 이벤트
document.querySelectorAll('button').forEach(btn => {
	btn.addEventListener('click', a => {
		console.log('클릭데스네');
		console.log(btn.id);
		if(btn.id === 'shopingList'){
			// 장바구니 담기 ( 비동기로 데이터 db에 저장? )
			shopingList();
		}else if(btn.id === 'buy'){
			// 구매 페이지로 바로 이동 ( 현재 페이지 데이터 )
			console.log(inputCount);
			location.href = "/shop/buy?mno=" + 1 + "&bno=" + bno + "&count=" + inputCount.value;
		}else if(btn.id === 'cu'){
			// 찜하기 ( 비동기로 유저 데이터와 도서 데이터 연결해서 저장 )
			cuNext();
		}else if(btn.id === 'goShopList'){
			// 목록으로 이동 ( 보고있던 page, 카테고리 유지 )
			let pageData = getStorageData();
			let sendData = `pageNum=${pageData.pageNum}&amount=${pageData.amount}&gener=${pageData.gener}`;
			console.log(sendData);
			
			location.href = "/shop/list?" + sendData;
		}else if(btn.id === 'minus'){
//			console.log(document.querySelector('.quantity-control input').value - 1);
			if(inputCount.value > 1){
				inputCount.value -= 1;
				spanText.innerHTML -= bp;
			}
		}else if(btn.id === 'plus'){
			if(inputCount.value < 100){
				spanText.innerHTML = Number(spanText.innerHTML) + Number(bp);
				inputCount.value = Number(inputCount.value) + 1;
			}
		}
	});
});

//별점 js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.stars').forEach(starsContainer => {
        const rating = parseFloat(starsContainer.getAttribute('data-rating'));
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < Math.floor(rating)) {
                star.style.color = '#FFD700'; // 노란색
            } else if (index === Math.floor(rating) && rating % 1 >= 0.5) {
                star.style.color = '#FFD700'; // 노란색 반 개
            } else {
                star.style.color = '#FFF'; // 흰색
            }
        });
    });
});

function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result; // 선택한 파일의 URL을 미리보기 이미지의 src에 설정
            imagePreview.style.display = 'block'; // 이미지 표시
        };

        reader.readAsDataURL(file); // 파일 읽기
    }
}

function shopingList() {
//	const mno = document.querySelector().getAttribute('mno');
	const mno = 1;
	const count = inputCount.value;
	let sendData = `${bno}/${mno}/${count}`;
	
	console.log(sendData);

	// 비동기로 데이터 저장
	fetch('/shop/buyList/' + sendData)
	.then(response => response.text())
	.then(result => {
		console.log(result);
		if(result === 'success'){
			// 장바구니에 담김 말풍선 표시
			let tooltip = document.getElementById('tooltip');
			let button = document.getElementById('shopingList');  // 장바구니 버튼 요소 가져오기
			let buttonRect = button.getBoundingClientRect();  // 버튼의 위치 및 크기 정보

			// 말풍선 위치를 장바구니 버튼 위에 맞추기
			tooltip.style.left = buttonRect.left + (buttonRect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
			tooltip.style.top = window.scrollY + buttonRect.top - tooltip.offsetHeight - 10 + 'px';  // 스크롤 위치 고려

			// 말풍선 표시
			tooltip.style.display = 'block';

			// 2초 후에 말풍선 숨기기
			setTimeout(function() {
				tooltip.style.display = 'none';
			}, 2000);
		} else {
			alert('잘못된 접근입니다.');
		}
	})
	.catch(err => console.log(err));
}

function cuNext() {
	// 비동기로 데이터 저장
}

//document.querySelectorAll('.menu a').forEach( a => {
//	a.addEventListener('click' , e => {
//		e.preventDefault();
//		
//		let menu = a.getAttribute('href');
//		
//		if(menu === 'shopList'){
//			location.href = '/shop/list';
//		}else if(menu === 'boardList'){
//			location.href = '/board/list';
//		}else if(menu === 'writeBoardList'){
//			location.href = '/write/list'
//		}
//	});
//});
function setStorageData(pageNum, amount, gener) {
	let pageData = {
			pageNum : pageNum,
			amount : amount,
			gener : gener
	};
	localStorage.setItem('page_data', JSON.stringify(pageData));
}
function getStorageData() {
	return JSON.parse( localStorage.getItem('page_data') );
}

function shopListGo() {
//	console.log(123);
	// 상단바에서 쇼핑리스트로 이동 시 gener = 0, pageNum = 1 으로 전송
	location.href = '/shop/list?gener=0';
}

function goToCart() {
	location.href = '/shop/cartListBuy?mno=' + 1;
}
const books = document.querySelector('#books');

function toggleSubcategories(e){
	if(books.style.display === "none"){
		books.style.display = "block";
	}else if(books.style.display === "block"){
		books.style.display = "none";
	}
}

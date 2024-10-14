
// header CSS 추가
const CSS_FILE_PATH = '/resources/css/layout.css';

let linkEle = document.createElement('link');
linkEle.rel = 'stylesheet';
linkEle.href = CSS_FILE_PATH;
document.head.appendChild(linkEle);

// 헤더 요소들 (로그인,로그아웃,회원가입,마이페이지,카트)
const loginButton = document.getElementById('login');
const logoutButton = document.getElementById('logout');
const signupButton = document.getElementById('signup');
const mypageButton = document.getElementById('mypage');
const cart = document.getElementById('cart');


// 헤더 각 버튼 이벤트 핸들러
document.querySelectorAll(".user-options button").forEach(a => {
	a.addEventListener('click', ()=>{

		let menu = a.id;
		// console.log(menu);
		if(menu === "login"){
			location.href = '/User/login';
		}else if(menu === "logout"){
			
		}else if(menu === "signup"){
			location.href = '/User/signup';
		}else if(menu === "mypage"){
			
		}else if(menu === "cart"){
			goToCart();
		}
		
	});
});




function toggleCart() {

    // 장바구니 토글 예시
    alert('장바구니를 펼쳤습니다!');
}
 

function goToCart() {
	// 장바구니 페이지 이동
    location.href = "";
}




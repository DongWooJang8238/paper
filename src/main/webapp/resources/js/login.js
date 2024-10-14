/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];

const mIdValidState = document.querySelector("#mIdValidState");
const mPwValidState = document.querySelector("#mPwValidState");

/*-------------- 함수 이벤트 핸들러 (로그인, 회원가입) ------*/
document.querySelectorAll("button").forEach(a => {
	a.addEventListener('click', ()=>{
		let menu = a.id;
	
		// 로그인 버튼
		if(menu === "gologin"){
			login();
		// 회원가입 버튼
		}else if(menu === "goSignup"){
			location.href = '/User/signup';
		}
	});
});


//데이터 검증 완료 함수
function validated(inputTarget, resultState, comment) {
	inputTarget.classList.add('is-valid');
	inputTarget.classList.remove('is-invalid');

	if (resultState) {
		resultState.classList.add('valid-feedback');
		resultState.classList.remove('invalid-feedback');
		comment ?
				resultState.innerHTML = comment :
					resultState.innerHTML = '';
	}

}
//데이터 검증 미완료 함수
function invalidated(inputTarget, resultState, comment) {
	inputTarget.classList.add('is-invalid');
	inputTarget.classList.remove('is-valid');

	if (resultState) {
		resultState.classList.add('invalid-feedback');
		resultState.classList.remove('valid-feedback');
		comment ?
				resultState.innerHTML = comment :
					resultState.innerHTML = '';
	}

}
//검증 스타일 초기화 함수
function initialization(inputTarget, resultState) {
	inputTarget.classList.remove('is-invalid');
	inputTarget.classList.remove('is-valid');

	if (resultState) {
		resultState.classList.remove('nvalid-feedback');
		resultState.classList.remove('valid-feedback');
	}


}

/*-----------------로그인 함수-----------------*/
function login(){
	
/*-----------------아이디  검증-----------------*/
	f.userId.addEventListener('click', e => {
		let target = e.currentTarget;
		console.log(target.value);
		if (target.value === '') {
			invalidated(target, mIdValidState, '아이디를 입력해주세요.');
		} else if ((target.value) != '') {
			validated(target, mIdValidState);
		}
	
	});

/*-----------------비밀번호 검증-----------------*/
	f.userPw.addEventListener('click', e => {
		let target = e.currentTarget;
		console.log(target.value);
		if (target.value === '') {
			invalidated(target, mPwValidState, '비밀번호를 입력해주세요.');
		} else if ((target.value) != '') {
			validated(target, mPwValidState);
		}
		
	});
	
	
	if(f.userPw.value === '' || f.userId.value === ''){
		invalidated(f.userPw, mPwValidState, '비밀번호를 입력해주세요.');
		invalidated(f.userId, mIdValidState, '아이디를 입력해주세요.');
		return;
	}
	
	let obj = {userId : f.userId.value, userPw : f.userPw.value};
	
	fetch('/asycn/goLogin/', {
		method : 'POST', 
		body : JSON.stringify(obj),
		headers : {'Content-type' : 'application/json; charset=utf-8'}
	})
	.then(response => response.text())
	.then(data => {
		if(data === "find the ID&PW"){
			f.action = "/User/goLogin";
			f.submit();
		}else if(data === "password is wrong"){
			invalidated(f.userPw,mPwValidState,'비밀번호가 틀립니다.');
			
		}else if(data === "ID is wrong"){
			invalidated(f.userId,mIdValidState,'아이디가 틀립니다.')
		}
			
	})
	.catch(err => console.log(err));
	
	
	
}
	

	
	
	

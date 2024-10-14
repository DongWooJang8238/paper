/* ------------- 정규식 ------------- */


/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];

const mUserNameValudState = document.querySelector("#mUserNameValudState");
const mUserEmailValudState = document.querySelector("#mUserEmailValudState");


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

/*-------------- 아이디 찾기 함수 ------*/
function findId(){
	
	
	if(f.userName.value === '' || f.userEmail.value === ''){
		invalidated(f.userName, mUserNameValudState, '이름을 입력해주세요.');
		invalidated(f.userEmail, mUserEmailValudState, '유효하지 않은 이메일입니다.');
	}
	
	if(f.userName.value === ''){
		invalidated(f.userName, mUserNameValudState, '이름을 입력해주세요.');
		return;
	}else if (f.userName.value != ''){
		validated(f.userName, mUserNameValudState);
	}
	
	if(f.userEmail.value === ''){
		invalidated(f.userEmail, mUserEmailValudState, '유효하지 않은 이메일입니다.');
		return;
	}else if (f.userEmail.value != ''){
		validated(f.userEmail, mUserEmailValudState);
	}
	
	
	let obj = {userName : f.userName.value, userEmail : f.userEmail.value};
	
	console.log(obj);
	fetch('/asycn/findId/', {
		method : 'post', 
		body : JSON.stringify(obj),
		headers : {'Content-type' : 'application/json; charset=utf-8'}
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if(data === 'find ID&EMAIL'){
			f.action = "/User/goFindId"
			f.submit();
			
		}else if(data === 'none ID&EMAIL'){
			alert('회원가입 정보가 없습니다.');
		}
	})
	.catch(err => console.log(err));
	
}

function signup() {
	location.href = "/User/signup";
}
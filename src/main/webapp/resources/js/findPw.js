/* ------------- 정규식 ------------- */


/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];

const mIdValidState = document.querySelector("#mIdValidState");
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
function findPw(){
	
	
	if(f.userId.value === '' || f.userEmail.value === ''){
		invalidated(f.userId, mIdValidState, '아이디을 입력해주세요.');
		invalidated(f.userEmail, mUserEmailValudState, '유효하지 않은 이메일입니다.');
	}
	
	if(f.userId.value === ''){
		invalidated(f.userId, mIdValidState, '아이디을 입력해주세요.');
		return;
	}else if (f.userId.value != ''){
		validated(f.userId, mIdValidState);
	}
	
	if(f.userEmail.value === ''){
		invalidated(f.userEmail, mUserEmailValudState, '유효하지 않은 이메일입니다.');
		return;
	}else if (f.userEmail.value != ''){
		validated(f.userEmail, mUserEmailValudState);
	}
	
	let obj = {userId : f.userId.value, userEmail : f.userEmail.value};
	
	fetch('/asycn/pw_auth/', {
		method : 'POST', 
		body : JSON.stringify(obj),
		headers : {'Content-type' : 'application/json; charset=utf-8'}
	})
	.then(response => response.text())
	.then(data => {
		console.log(data);
		if(data === 'fail'){
			alert("회원정보가 없습니다.");
		}else{
			f.num.value = data;
			f.action = "/User/pw_auth_page"
			f.submit();
		}
			
	})
	.catch(err => console.log(err));
}

function signup() {
	location.href = "/User/signup";
}
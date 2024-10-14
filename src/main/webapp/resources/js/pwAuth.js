
/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];
const mPwAuthValidState = document.querySelector("#mPwAuthValidState");


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

//console.log(f.num.value);
function pwAuthCheck() {

	if(f.pwAuth.value === ''){
		invalidated(f.pwAuth, mPwAuthValidState, '인증번호를 입력해주세요.');
	}else if (f.pwAuth.value != ''){
		validated(f.pwAuth, mPwAuthValidState);
	}

	console.log("num" + f.num.value);
	console.log("인증번호" + f.pwAuth.value);
	if(f.num.value != f.pwAuth.value){
		alert("올바른 인증번호가 아닙니다.");

	}else if(f.num.value === f.pwAuth.value){
		f.action = "/User/pwNew";
		f.submit();

	}

}


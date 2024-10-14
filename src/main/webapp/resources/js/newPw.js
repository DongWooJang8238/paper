/* ------------- 정규식 ------------- */
const regExpId = /^[a-z]+[0-9a-z]{8,16}$/;   // 아이디 검증 정규식
const regExpPw = /^[0-9a-zA-Z]{8,16}$/;      // 비밀번호 검증 정규식
const regExpName = /^[가-힣a-zA-Z]{2,12}$/;   // 이름 검증 정규식 
const regExpEmail = /^[a-zA-Z0-9+-\_.]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;   // 이메일 검증 정규식


/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];
const mPwValidState = document.querySelector("#mPwValidState");
const mPwReValidState = document.querySelector("#mPwReValidState");
let pwCk = false;
let pwReCk = false;

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


/*-------------- 새 비밀번호 설정 함수 ------*/

f.userPw.addEventListener('keyup', e => {
	let target = e.currentTarget;
	if (target.value === '') {
		initialization(target, mPwValidState);
		pwCk = false;
	} else if (regExpPw.exec(target.value)) {
		validated(target, mPwValidState);
		pwCk = true;
	} else { 
		invalidated(target, mPwValidState, '올바른 형식이 아닙니다.');
		pwCk = false;
	}

});

/*-----------------비밀번호 확인 검증-----------------*/

f.confirm_password.addEventListener('keyup', e => {
	let target = e.currentTarget;
	if (target.value === '') {
		initialization(target, mPwValidState);
		pwReCk = false;
	} else if (target.value === f.userPw.value) {
		validated(target, mPwReValidState);
		pwReCk = true;
	} else { 
		invalidated(target, mPwReValidState, '비밀번호가 일치하지 않습니다.');
		pwReCk = false;
	}

});
function pwChange() {

	if((pwCk, pwReCk) != true) {
		alert("비어있는 항목이 있습니다.");
		return;
	}
	
		alert("비밀번호 변경이 완료되었습니다.")
		f.action = "/User/pwChange";
		f.submit();

}


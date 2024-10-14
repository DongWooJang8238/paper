/* ------------- 정규식 ------------- */
const regExpId = /^[a-z]+[0-9a-z]{8,16}$/;   // 아이디 검증 정규식
const regExpPw = /^[0-9a-zA-Z]{8,16}$/;      // 비밀번호 검증 정규식
const regExpName = /^[가-힣a-zA-Z]{2,12}$/;   // 이름 검증 정규식 
const regExpEmail = /^[a-zA-Z0-9+-\_.]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;   // 이메일 검증 정규식

/*-------------- Form 관련 요소들 ------*/
const f = document.forms[0];
//let { idCk, pwCk, pwReCk, nameCk, emailCk, domainCk } = false;
let idCk = false;
let pwCk = false;
let pwReCk = false;
let nameCk = false;
let emailCk = false;
let domainCk = false;

const mIdValidState = document.querySelector("#mIdValidState");
const mPwValidState = document.querySelector("#mPwValidState");
const mPwReValidState = document.querySelector("#mPwReValidState");
const mUserNameValudState = document.querySelector("#mUserNameValudState");




//회원가입 검증
//function signup(){

//if(f.nickname.value === '') {
//alert('dd');
//return false;
//}

//if(!regExpPw.test(f.password.value)) {
//alert('비밀번호는 8-16 대문자+소문자+숫자를 섞어 작성하세요.');
//return false;
//}

//if((f.password.value) != f.confirm_password.value) {
//alert('비밀번호가 동일하지 않습니다.');
//return false;
//}

//if(f.email.value === '')  {
//console.log(f.email_domain.value);
//alert('dd');
//return false;
//}

//if(f.email_domain.value == 0) {
//alert('dwda');
//return false;
//}

//if (f.gender.value == false) {
//alert('성별 체크박스 확인');
//return false
//}

//}


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

/*-----------------아이디 중복확인 검증-----------------*/
function validateId() {
//	console.log('중복확인');
	let target = f.userId;

	if(!regExpId.test(f.userId.value)) {
		alert('아이디는 8-16자 소문자+숫자 형식으로 작성하세요.');
		return false;
	}

	const userid = target.value;
	
	fetch('/asycn/validateId/' + userid)
		.then(response => response.text())
		.then(data => {
			if (data === "success"){
				invalidated(target, mIdValidState, "중복된 아이디입니다.");
				idCk = false;
			}else{
				validated(target, mIdValidState, "사용 가능한 아이디입니다.");
				idCk = true;
			}
			
		})
		.catch(err => console.log(err));
}


/*-----------------비밀번호 검증-----------------*/
f.userPw.addEventListener('keyup', e => {
	let target = e.currentTarget;
//	console.log(target.value);
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
//	console.log(target.value);
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

/*-----------------이름  검증-----------------*/
f.userName.addEventListener('keyup', e => {
	let target = e.currentTarget;
//	console.log(mUserNameValudState);
//	console.log(target.value);
	if (target.value === '') {
		initialization(target, mUserNameValudState);
		nameCk = false;
	} else if (regExpName.exec(target.value)) {
		validated(target, mUserNameValudState);
		nameCk = true;
	} else { 
		invalidated(target, mUserNameValudState, '올바른 형식이 아닙니다.');
		nameCk = false;
	}
	
});

/*-----------------이메일  검증-----------------*/
f.userEmail.addEventListener('keyup', e => {
	let target = e.currentTarget;

	if (target.value === '') { 
		initialization(target);
		emailCk = false;
	} else if (target.value != '') { 
		validated(target);
		emailCk = true;
	} else { 
		invalidated(target);
		emailCk = false;
	}

});

/*-----------------도메인  검증-----------------*/
f.emailDomain.addEventListener('keyup', e => {
	let target = e.currentTarget;
	console.log(target.value);
	
	if (target.value === '') { 
		initialization(target);
		domainCk = false;
	} else if ((target.value != '' ) ) { 
		validated(target);
		domainCk = true;
		
		let userEmail = f.userEmail.value + '@' + f.emailDomain.value
		console.log(userEmail);
		
		f.userEmail.value = userEmail;

	} else { 
		invalidated(target);
		domainCk = false;
	}

});
	
/*-----------------회원가입 함수-----------------*/
function signup() {
	console.log( idCk, pwCk, pwReCk, nameCk, emailCk, domainCk );
	
	if((idCk, pwCk, pwReCk, nameCk, emailCk, domainCk) != true) {
		alert("비어있는 항목이 있습니다.");
		
		return;
	}
	
/*-----------------체크박스 체크-----------------*/
	
	
	alert("회원가입을 성공하였습니다.");
	f.submit();
	f.action = "/User/signup" ;
	
}










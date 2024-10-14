<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>비밀번호 찾기 페이지</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f2f2f2;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0;
}

.signup-container {
	background-color: #fff;
	padding: 40px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 400px;
}

.logo {
	text-align: center;
	margin-bottom: 20px;
}

.logo a {
	font-size: 24px;
	color: #333;
	text-decoration: none;
}

.signup-container h2 {
	text-align: center;
	margin-bottom: 20px;
	color: #333;
}

.input-group {
	margin-bottom: 15px;
}

.input-group label {
	display: block;
	margin-bottom: 5px;
	color: #666;
}

.input-group input[type="text"], .input-group input[type="password"],
	.input-group input[type="email"], .input-group input[type="date"],
	.input-group input[type="tel"] {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

/* 이메일 입력란 스타일 */
.email-group {
	margin-bottom: 15px; /* 아래쪽 여백 */
}

.email-input {
	width: calc(100% - 110px); /* 전체 폭에서 셀렉트 박스 너비만큼 뺌 */
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-right: 10px; /* 셀렉트와의 간격 조정 */
	display: inline-block; /* 인라인 블록으로 표시 */
}

.email-select {
	width: 100px; /* 고정 폭 */
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	height: 40px; /* 높이 일치 */
	display: inline-block; /* 인라인 블록으로 표시 */
}

.gender-group {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 15px;
}

.gender-group input[type="radio"] {
	margin-right: 5px;
}

.signup-btn {
	width: 100%;
	padding: 10px;
	border: none;
	border-radius: 4px;
	background-color: #4CAF50;
	color: white;
	font-size: 16px;
	cursor: pointer;
}

.signup-btn:hover {
	background-color: #45a049;
}
</style>
</head>
<body>
	<div class="signup-container">
		<div class="logo">
			<a href="/">로고</a>
		</div>
		<h2>비밀번호 찾기</h2>
		<form action="#" method="post">
			<div class="input-group">
				<label for="username">아이디</label> <input type="text" id="userId"
					name="userId" placeholder="아이디 입력" required>
					<div class="invalid-feedback" id="mIdValidState"></div>
			</div>

			<div class="email-group">
				<label for="userEmail">메일</label>
				<div style="display: flex; align-items: center;">
					<input type="Email" id="userEmail" name="userEmail" placeholder="이메일 주소" class="email-input" required> 
					<div class="invalid-feedback" id="mUserEmailValudState"></div>
				</div>
			</div>
			<input type="hidden" name="num">
			<button type="button" class="signup-btn" onclick="findPw()">비밀번호 찾기</button>
			<button type="button" class="signup-btn" onclick="signup()">회원가입</button>
		</form>
	</div>
</body>
<script type="text/javascript" src="/resources/js/findPw.js"></script>
</html>

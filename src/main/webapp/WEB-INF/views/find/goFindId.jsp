<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>아이디 페이지</title>
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
		<h2>아이디 찾기</h2>
		<form action="#" method="post">
				<h2>회원님의 아이디는 :  ${userId }</h2>
			<button type="button" class="signup-btn" onclick="login()">로그인</button>
			<button type="button" class="signup-btn" onclick="findPw()">비밀번호 찾기</button>
		</form>
	</div>
<script type="text/javascript" src="/resources/js/goFindId.js"></script>
</body>
</html>

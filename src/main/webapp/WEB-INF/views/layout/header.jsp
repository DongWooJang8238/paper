<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<<<<<<< HEAD
<link rel="stylesheet" href="styles.css">
<title>헤더와 카테고리 예제</title>
</head>
<body>
<header>
=======
<link rel="stylesheet" href="/resources/css/layout.css">
<title>헤더와 카테고리 예제</title>
</head>
<body>
	<header>
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
    <div class="header-container">
        <div class="logo">
            <img src="logo.png" alt="로고">
        </div>
        <div class="user-options">
<<<<<<< HEAD
            <div class="search-container">
                <button onclick="toggleSearch()">🔍</button>
                <input type="text" id="search-input" placeholder="검색어 입력..." style="display: none;">
            </div>
            <div class="auth-buttons">
                <button type="button" id="login">로그인</button>
                <button type="button" id="logout">로그아웃</button>
                <button type="button" id="signup">회원가입</button>
                <button type="button" id="adminPage">관리자 페이지</button>
                <button id="mypage">마이페이지</button>
                <div class="cart">
                    <button onclick="goToCart()">장바구니</button>
                </div>
            </div>
=======
            <button id="login">로그인</button>
            <button id="logout">로그아웃</button>
            <button id="signup">회원가입</button>
            <button id="mypage">마이페이지</button>
            <button id="search" onclick="toggleCart()">🔍</button>
            <button id="cart" onclick="goToCart()">🛒</button>
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
        </div>
    </div>
</header>

<<<<<<< HEAD

=======
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
<nav class="categories">
    <div class="categories-container">
        <div class="category-container">
            <div class="category" onclick="toggleSubcategories('books')">도서구매</div>
            <div class="subcategories" id="books" style="display: none;">
                <div class="genre" id="genres">
                    <div onclick="shopListGo()">새책</div>
                    <div onclick="alert('시로 이동!')">중고책</div>
                </div>
            </div>
            <div class="category" onclick="toggleSubcategories('points')">포인트상점</div>
            <div class="category" onclick="toggleSubcategories('community')">커뮤니티게시판</div>
            <div class="category" onclick="toggleSubcategories('writing')">집필게시판</div>
            <div class="category" onclick="toggleSubcategories('games')">게임</div>
        </div>
    </div>
</nav>
<<<<<<< HEAD

=======
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d

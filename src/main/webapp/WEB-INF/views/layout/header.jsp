<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/resources/css/layout.css">
<title>헤더와 카테고리 예제</title>
</head>
<body>
	<header>
    <div class="header-container">
        <div class="logo">
            <img src="logo.png" alt="로고">
        </div>
        <div class="user-options">
            <button id="login">로그인</button>
            <button id="logout">로그아웃</button>
            <button id="signup">회원가입</button>
            <button id="mypage">마이페이지</button>
            <button id="search" onclick="toggleCart()">🔍</button>
            <button id="cart" onclick="goToCart()">🛒</button>
        </div>
    </div>
</header>

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

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/main.css">
<title>Insert title here</title>
</head>
<body>
<jsp:include page="layout/header.jsp"></jsp:include>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인 화면</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="banner">
            <span>⬅️</span>
            <p>도서 관련 이동 배너 / 클릭 시 해당 게시글로 이동</p>
            <span>➡️</span>
        </div>
        
        <div class="section">
            <div class="ranking">
                <h3>랭킹 리스트</h3>
                <p>베스트 셀러 3개</p>
                <div class="item">1 순위 - 책표지 - 책제목 / 장르</div>
                <div class="item">2 순위 - 책표지 - 책제목 / 장르</div>
                <div class="item">3 순위 - 책표지 - 책제목 / 장르</div>
            </div>
            <div class="popular">
                <ul>
                    <li>인기 질문 게시글 / 클릭 시 해당 게시글로 이동</li>
                    <li>커뮤니티 인기 게시글 top3</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <div class="recommended">
                <h3>유저 추천 도서 3개</h3>
                <div class="item">추천 도서 1</div>
                <div class="item">추천 도서 2</div>
                <div class="item">추천 도서 3</div>
                <p>/ 클릭 시 쇼핑 페이지 이동</p>
            </div>
            <div class="notice">
                <ul>
                    <li>공지사항 게시글 / 클릭 시 해당 게시글로 이동</li>
                </ul>
            </div>
        </div>
    </div>

<jsp:include page="layout/footer.jsp"></jsp:include>
</body>
<script type="text/javascript" src="/resources/js/main.js"></script>
</html>
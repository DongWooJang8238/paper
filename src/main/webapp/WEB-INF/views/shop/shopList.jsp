<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/shopList.css">
<title>Insert title here</title>
</head>
<body>

	<jsp:include page="../layout/header.jsp" />

	<h1>ShopList</h1>

	<div class="sidebar">
		<h3>카테고리</h3>
		<a href="0">펑펑</a> <a href="1">소설</a> <a href="2">역사</a> <a href="3">과학</a>
		<a href="4">예술</a> <a href="5">철학</a> <a href="6">자기계발</a> <a href="7">기술/공학</a>
		<a href="8">경제/경영</a> <a href="9">사회과학</a> <a href="10">종교</a>
	</div>

	<div class="panel-body">
		<c:forEach var="vo" items="${list}">
			<div class="card" onclick="goGet(${vo.bno})">
				<img src="${vo.bookcover }" alt="책 이미지">
				<div class="card-title">
					<a href="${vo.bno}">${vo.title}</a>
				</div>
				<div class="card-price">${vo.bookPrice}원</div>
				<div class="card-author">${vo.writer}</div>
				<!-- 평점 표시 부분 -->
				<div class="card-rating">
					<div class="stars" data-rating="${vo.avgRating}">
						<span class="star">&#9733;</span> 
						<span class="star">&#9733;</span>
						<span class="star">&#9733;</span> 
						<span class="star">&#9733;</span>
						<span class="star">&#9733;</span>
					</div>
					<div class="avg-rating">평균 평점: ${vo.avgRating}(${vo.likeCount})</div>
				</div>

			</div>
		</c:forEach>
	</div>

	<!-- page -->
	<div class="page-wrap">
		<ul class="page-nation">
			<c:if test="${pageMaker.prev }">
				<li class="previous"><a href="${pageMaker.startPage-1 }">
						&lt; </a></li>
			</c:if>
			<c:forEach var="num" begin="${pageMaker.startPage }"
				end="${pageMaker.endPage }" step="1">
				<li><a href="${num }"
					class="${pageMaker.cri.pageNum == num ? 'active' : '' }"> ${num }
				</a></li>
			</c:forEach>
			<c:if test="${pageMaker.next }">
				<li><a href="${pageMaker.endPage+1 }"> &gt; </a></li>
			</c:if>
		</ul>
	</div>

	<jsp:include page="../layout/footer.jsp" />
</body>
<script type="text/javascript" src="/resources/js/shopList.js"></script>
</html>
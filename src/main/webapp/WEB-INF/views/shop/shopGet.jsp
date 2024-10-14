<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/resources/css/shopGet.css">
<title>Insert title here</title>
</head>
<body>

	<jsp:include page="../layout/header.jsp" />

	<div class="get-container">
		<h1 class="product-name">${vo.title}</h1>
		<div class="product-info">
			<div class="product-image">
				<img src="${vo.bookcover}" alt="책 표지">
			</div>
			<div class="product-details">
				<p>작가: ${vo.writer}</p>
				<p>출판사: ${vo.publisher}</p>
				<p>ISBN: ${vo.isbn}</p>
				<p>출판일: ${vo.ordDate}</p>
				<h3 class="price">₩${vo.bookPrice}</h3>
				<div class="stars" data-rating="${vo.avgRating}">
					<span class="star">&#9733;</span> <span class="star">&#9733;</span>
					<span class="star">&#9733;</span> <span class="star">&#9733;</span>
					<span class="star">&#9733;</span>
				</div>
				<div class="avg-rating">평균 평점:
					${vo.avgRating}(${vo.likeCount})</div>
			</div>
		</div>
	</div>

	<!-- 본문 영역 -->

	<!-- 리뷰(댓글) 영역 -->
	<div class="review-section">
		<!-- 댓글 영역 -->
		<div class="comment-section">
			<div class="panel-footer">
				<div class="panel-footer-header">
					<div class="panel-footer-title">
						<h1>리뷰</h1>
					</div>
				</div>
				<div class="panel-footer-body">
					<ul class="chat">
						<li data-rno="1">
							<div>
								<div class="chat-header">
									<strong class="primary-font">작성자1</strong> <small
										class="pull-right">2024-10-10</small>
								</div>
								<p>이 책 정말 재밌어요!</p>
								<!-- 예시 댓글에 사용할 이미지 -->
								<img src="${vo.bookcover}" alt="예시 이미지" class="comment-image"
									style="max-width: 200px;" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="review-header">
			<div class="file-upload">
				<input type="file" id="imageUpload" accept="image/*"
					onchange="previewImage(event)" /> <label for="imageUpload">이미지
					첨부</label>
			</div>
			<img id="imagePreview" class="image-preview" alt="첨부한 이미지 미리보기" />
		</div>

		<div class="review-input">
			<input type="text" class="user-id" placeholder="사용자 ID" />
			<textarea class="review-body" placeholder="리뷰 내용을 입력하세요..."></textarea>
			<button class="submit-review">리뷰 달기</button>
		</div>
	</div>







	<jsp:include page="../layout/footer.jsp" />

	<div class="fixed-bar">
		<div class="total-price">
			총 가격: ₩<span bp="${vo.bookPrice}">${vo.bookPrice}</span>
		</div>
		<div class="quantity-control">
			<button id="minus">-</button>
			<input type="number" value="1" min="1" max="99">
			<button id="plus">+</button>
		</div>
		<div class="action-buttons">
			<button id="shopingList">장바구니 담기</button>
			<button id="buy">구매</button>
			<button id="cu">찜하기</button>
			<button id="goShopList">목록으로 가기</button>
		</div>
	</div>
	<div id="tooltip">장바구니에 담겼습니다</div>
</body>
<script type="text/javascript" src="/resources/js/shopGet.js"></script>
</html>

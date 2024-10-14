<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>결제 페이지</title>
    <link rel="stylesheet" href="/resources/css/shopBuy.css">
</head>
<body>

    <div class="payment-container">
        <h1 class="page-title">결제 정보</h1>

        <!-- 상품 정보 섹션 -->
        <section class="product-info-section">
            <h2>주문 상품 정보</h2>
            <div class="product-details">
                <img src="${bvo.bookcover}" alt="상품 이미지" class="product-image">
                <div class="product-description">
                    <p><strong>상품명:</strong> ${bvo.title }</p>
                    <p><strong>가격:</strong> ₩<span id="bookPrice" bookPrice="${bvo.bookPrice * count}">${bvo.bookPrice * count }</span></p>
                    <p><strong>수량:</strong> ${count }</p>
                    <p><strong>배송비:</strong> 무료</p>
                </div>
            </div>
        </section>

        <!-- 구매자 정보 섹션 -->
        <section class="buyer-info-section">
            <h2>구매자 정보</h2>
            <form action="/payment/submit" method="POST" class="buyer-info-form">
                <div class="form-group">
                    <label for="buyerName">이름</label>
                    <input type="text" id="buyerName" name="buyerName" required>
                </div>
                <div class="form-group">
                    <label for="buyerPhone">전화번호</label>
                    <input type="tel" id="buyerPhone" name="buyerPhone" required>
                </div>
                <div class="form-group">
                    <label for="buyerEmail">이메일</label>
                    <input type="email" id="buyerEmail" name="buyerEmail" required>
                </div>
                <div class="form-group">
                    <label for="buyerAddress">주소</label>
                    <input type="text" id="buyerAddress" name="buyerAddress" required>
                </div>
            </form>
        </section>

        <!-- 결제 정보 섹션 -->
        <section class="payment-info-section">
            <h2>결제 방식</h2>
            <div class="payment-methods">
                <div class="form-group">
                    <input type="radio" id="cardPayment" name="paymentMethod" value="card" checked>
                    <label for="cardPayment">신용카드</label>
                </div>
                <div class="form-group">
                    <input type="radio" id="bankTransfer" name="paymentMethod" value="bank">
                    <label for="bankTransfer">계좌이체</label>
                </div>
                <div class="form-group">
                    <input type="radio" id="kakaoPay" name="paymentMethod" value="kakaoPay">
                    <label for="kakaoPay">카카오페이</label>
                </div>
            </div>
        </section>
		
        <!-- 결제 버튼 ( 누르면 선택한 결제 방식의 최종 결제 페이지 이동 ) -->
        <div class="payment-action">
            <button type="submit" class="pay-button">결제하기</button>
            <button type="submit" class="cancel-button">취소</button>
        </div>
    </div>

</body>
<script type="text/javascript" src="/resources/js/shopBuyOne.js"></script>
</html>

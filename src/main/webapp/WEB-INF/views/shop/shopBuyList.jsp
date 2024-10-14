<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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

        <form action="#" method="POST" class="buyer-info-form">
    <input type="hidden" id="mno" name="mno" value="${user.mno}"> <!-- 사용자 번호 -->

    <!-- 상품 정보 섹션 -->
    <section class="product-info-section">
    <h2>주문 상품 정보</h2>
    <ul class="product-list">
        <!-- 상품 정보를 리스트로 출력 -->
        <c:forEach var="item" items="${orderMap}">
            <li class="product-details">
                <img src="${item.key.bookcover}" alt="상품 이미지" class="product-image">
                <div class="product-description">
                    <p><strong>상품명:</strong> ${item.key.title}</p>
                    <p><strong>가격:</strong> ₩<span class="bookPrice" data-price="${item.key.bookPrice}">${item.key.bookPrice * item.value}</span></p>
                    <p><strong>수량:</strong>
                        <button class="minus">-</button>
                        <span class="spanCount">${item.value}</span>
                        <button class="plus">+</button>
                    </p>
                    <p><strong>배송비:</strong> 무료</p>
                    <button onclick="deleteCart(${item.key.bno})">삭제</button>
                    <!-- 숨겨진 상품 번호 입력 필드 추가 -->
                    <input type="hidden" name="bno" value="${item.key.bno}">
                    <input type="hidden" name="count" value="${item.value}">
                </div>
            </li>
        </c:forEach>
    </ul>
    <p><strong>총 결제 금액:</strong> ₩<span id="totalPrice"></span></p> <!-- 총 결제 금액 -->
</section>

    <!-- 구매자 정보 섹션 -->
    <section class="buyer-info-section">
        <h2>구매자 정보</h2>
        <div class="form-group">
            <label for="orderName">이름</label>
            <input type="text" id="orderName" name="orderName" required>
        </div>
        <div class="form-group">
            <label for="orderPhone">전화번호</label>
            <input type="tel" id="orderPhone" name="orderPhone" required>
        </div>
        <div class="form-group">
            <label for="orderAddr">주소</label>
            <input type="text" id="orderAddr" name="orderAddr" required>
        </div>
        <div class="form-group">
            <label for="userDeposit">계좌번호</label>
            <input type="text" id="userDeposit" name="userDeposit" required>
        </div>
    </section>

    <!-- 결제 정보 섹션 -->
    <section class="payment-info-section">
    	<h2>포인트 할인</h2>
    	<div class="form-group">
    		<select name="point">
    			<option value="0">0</option>
    			<option value="100">100</option>
    			<option value="200">200</option>
    			<option value="300">300</option>
    			<option value="400">400</option>
    			<option value="500">500</option>
    			<option value="600">600</option>
    			<option value="700">700</option>
    			<option value="800">800</option>
    			<option value="900">900</option>
    			<option value="1000">1000</option>
    		</select>
    	</div>
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
</form>
    
    <!-- 결제 버튼 ( 누르면 선택한 결제 방식의 최종 결제 페이지 이동 ) -->
    <div class="payment-action">
        <button class="pay-button">결제하기</button>
        <button class="cancel-button">취소</button>
    </div>

    </div>

</body>
<script type="text/javascript" src="/resources/js/shopBuyList.js"></script>
</html>

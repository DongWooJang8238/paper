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
    <input type="hidden" id="mno" name="mno" value="${vo.mno}"> <!-- 사용자 번호 -->

    <!-- 구매자 정보 섹션 -->
    <section class="buyer-info-section">
        <h2>구매자 정보</h2>
        <div class="form-group">
            <label for="orderName">이름</label>
            <input type="text" id="orderName" name="orderName" value="${vo.orderName }" required readonly="readonly">
        </div>
        <div class="form-group">
            <label for="orderPhone">전화번호</label>
            <input type="tel" id="orderPhone" name="orderPhone" value="${vo.orderPhone }" required readonly="readonly">
        </div>
        <div class="form-group">
            <label for="orderAddr">주소</label>
            <input type="text" id="orderAddr" name="orderAddr" value="${vo.orderAddr }" required readonly="readonly">
        </div>
        <div class="form-group">
            <label for="userDeposit">계좌번호</label>
            <input type="text" id="userDeposit" name="userDeposit" value="${vo.userDeposit }" required readonly="readonly">
        </div>
        <div class="form-group">
            <label for="orderDate">주문날짜</label>
            <input type="text" id="orderDate" name="orderDate" value="${vo.orderDate }" required readonly="readonly">
        </div>
        <div class="form-group">
            <label for="orderStatus">주문상태</label>
            <input type="text" id="orderStatus" name="orderStatus" value="${vo.orderStatus }" required readonly="readonly">
        </div>
        
    </section>

    <!-- 결제 정보 섹션 -->
    <section class="payment-info-section">
    	<div class="form-group">
    	<h2>할인 된 포인트 : ${vo.point}</h2>
    	<h2>총 구매 금액 : ${vo.totalPrice}</h2>
    	</div>
    	<div class="form-group">
		<a href="/order/shopingList?mno=${vo.mno}">주문 리스트 보기</a>
    	</div>
				
    </section>
</form>
    
    <!-- 수정/환불/취소 버튼 -->
    <div class="payment-action">
        <button class="modify-button">정보수정</button>
        <button class="refund-button">환불하기</button>
        <button class="cancel-button">구매취소</button>
    </div>

    </div>

</body>
</html>

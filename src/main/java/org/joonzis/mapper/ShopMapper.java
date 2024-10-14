package org.joonzis.mapper;

import java.util.List;

import org.joonzis.domain.BookBuyListVO;
import org.joonzis.domain.BookVO;
import org.joonzis.domain.Criteria;
import org.joonzis.domain.OrderBookListVO;
import org.joonzis.domain.OrderDetailVO;

public interface ShopMapper {
	// 책 목록 리스트
	public List<BookVO> getBookList(Criteria cri);
	// 책 목록 카테고리 리스트
	public List<BookVO> getBookListGe(Criteria cri);
	// 전체 게시글 수
	public int getTotal();
	// 전체 게시글 수
	public int getTotalByGno(int gno);
	// 책 평점 조회
	public int getTotalLikeByBno(int bno);
	// 책 단일 데이터 조회
	public BookVO getBookOne(int bno);
	// 장바구니 담기
	public int buyList(BookBuyListVO vo);
	// 장바구니 카운트 조회
	public BookBuyListVO buyListCount(int bno);
	// 장바구니 카운트 증가
	public int buyListCountUp(BookBuyListVO vo);
	// 장바구니 리스트 조회 ( by mno )
	public List<BookBuyListVO> buyListSelect(int mno);
	// 장바구니 데이터 삭제 ( by bno )
	public int deleteCart(int bno);
	// 구매 내역 주문상세에 저장
	public int insertOrderDetail(OrderDetailVO vo);
	// 주문 번호(odno) mno로 조회
	public int selectOrderDetailOdno(int mno);
	// 주문한 책 데이터 저장 ( by odno )
	public int insertOrderBookList(OrderBookListVO vo);
	// 주문 완료 후 장바구니 데이터 삭제
	public int deleteCartAll(int mno);
}

package org.joonzis.service;

import java.util.List;

import org.joonzis.domain.BookBuyListVO;
import org.joonzis.domain.BookVO;
import org.joonzis.domain.Criteria;
import org.joonzis.domain.OrderBookListVO;
import org.joonzis.domain.OrderDetailVO;

public interface ShopService {
	public List<BookVO> getBookList(Criteria cri);
	public List<BookVO> getBookListGe(Criteria cri);
	public int getTotal();
	public int getTotalByGno(int gno);
	public BookVO getBookOne(int bno);
	public int buyList(BookBuyListVO vo);
	public List<BookBuyListVO> buyListSelect(int mno);
	public int deleteCart(int bno);
	public int insertOrderDetail(OrderDetailVO vo);
	public int insertOrderBookList(OrderBookListVO vo);
	public int selectOrderDetail(int mno);
}

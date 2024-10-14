package org.joonzis.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.joonzis.domain.BookBuyListVO;
import org.joonzis.domain.BookVO;
import org.joonzis.domain.Criteria;
import org.joonzis.domain.OrderBookListVO;
import org.joonzis.domain.OrderDetailVO;
import org.joonzis.domain.PageDTO;
import org.joonzis.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/shop/*")
public class ShopController {
	
	@Autowired
	private ShopService service;
	
//	// 쇼핑 리스트 이동
//	@GetMapping("/list")
//	public String list(Model model) {
//		log.info("쇼핑 리스트 목록..");
//
//		model.addAttribute("list", service.getBookList());
//		
//		log.info("쇼핑 리스트 결과.. : " + model);
//		
//		return "/shop/shopList";
//	}
	
	// 쇼핑 리스트 이동 ( 페이징 / 카테고리 선택 )
	@GetMapping("/list")
	public String listGe(Criteria cri, Model model) {
		
		log.info("컨트롤러 장르 번호 : " + cri.getGener());
		
		if (cri.getPageNum() == 0 || cri.getAmount() == 0) {
			cri.setPageNum(1);
			cri.setAmount(20);
		}
		
		
		if(cri.getGener() == 0) {
			int total = service.getTotal();
			log.info("total..." + total);
			
			model.addAttribute("list", service.getBookList(cri));
			model.addAttribute("pageMaker", new PageDTO(cri, total));
			
		}else if(cri.getGener() > 0) {
			int total = service.getTotalByGno(cri.getGener());
			log.info("total..." + total);
			
			model.addAttribute("list", service.getBookListGe(cri));
			model.addAttribute("pageMaker", new PageDTO(cri, total));
		}
		
		return "/shop/shopList";
	}
	
	// 상품 보기 페이지 이동
	@GetMapping("/get")
	public String get(int bno, Model model) {
		log.info("상품 보기 페이지..");
		
		// 모델에 담기
		BookVO vo = service.getBookOne(bno);
		model.addAttribute("vo", vo);
		// 모델 결과
		log.info(vo.getBookcover());
		
		return "/shop/shopGet";
	}
	
	// 상품페이지 -> 구매 페이지 이동
	@GetMapping("/buy")
	public String buy(int mno, int bno, int count, Model model) {
		// 단일 데이터 구매
		log.warn("상품 구매 페이지.." + mno + bno);
		// bno로 상품 데이터 조회
		BookVO bvo = service.getBookOne(bno);
		// mno로 회원 데이터 조회
//		UserVO uvo = service.userSelectOne(mno);
		// 데이터들 모델에 담아서 페이지 이동
		model.addAttribute("bvo", bvo);
		model.addAttribute("count", count);
//		model.addAttribute("uvo", uvo);
		
		return "/shop/shopBuyOne";
	}
	
	// 장바구니 -> 구매 페이지 이동
	@GetMapping("/cartListBuy")
	public String buyList(int mno, Model model) {
	    log.warn("상품 구매 페이지.." + mno);
	    
	    List<BookBuyListVO> list = service.buyListSelect(mno); // 장바구니 데이터 조회
	    Map<BookVO, Integer> orderMap = new HashMap<>(); // 책 데이터와 수량을 담을 맵

	    for (BookBuyListVO bbvo : list) {
	        BookVO book = service.getBookOne(bbvo.getBno()); // 책 정보 조회
	        orderMap.put(book, bbvo.getCount()); // 책과 해당 수량을 맵에 저장
	        log.warn("책 가격 조회 컨트롤러.. : " + book.getBookPrice());
	        log.warn("책 카운트 컨트롤러 .. : " + bbvo.getCount());
	    }

	    model.addAttribute("orderMap", orderMap); // 책과 수량을 모델에 담아서 전달

	    return "/shop/shopBuyList";
	}

	
	// 상품 장바구니에 저장
	@ResponseBody
	@GetMapping(value = "/buyList/{bno}/{mno}/{count}", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> shopingList(@PathVariable("bno") int bno, @PathVariable("mno") int mno, @PathVariable("count") int count) {
		log.info("장바구니 저장 컨트롤러.. " + bno + "," + mno + "," + count);
		
		BookBuyListVO vo = new BookBuyListVO(bno, mno, count);
		
		int insert = service.buyList(vo);

		log.info("컨트롤러 insertCount : " + insert);
		
		return insert == 1 ? new ResponseEntity<String>("success",HttpStatus.OK) : new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 장바구니에서 상품 삭제
	@GetMapping("/deleteCart")
	public String deleteCart(int bno, int mno) {
		log.warn("장바구니 삭제 컨트롤러.. : " + bno + "," + mno);
		int result = service.deleteCart(bno);
		log.warn("장바구니 삭제 결과 컨트롤러 .. : " + result);
		
		return "redirect:/shop/cartListBuy?mno=" + mno;
	}
	
	// 결제완료 후 결제결과 페이지 이동
	@Transactional
	@ResponseBody
	@PostMapping(value = "/buySuccess", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> buySuccess(@RequestBody OrderDetailVO odvo) {
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getMno());
		// mno 데이터가 잘 넘어왔다면, mno 저장
		int mno = odvo.getMno();
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getTotalPrice());
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getOrderName());
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getOrderPhone());
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getOrderAddr());
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getPoint());
		log.warn("컨트롤러 구매성공시 넘어온 데이터.." + odvo.getUserDeposit());
		int result = service.insertOrderDetail(odvo);
		log.warn("컨트롤러 상세주문정보 입력 체크.." + result);
		// 저장이 잘 됬다면 odvo2 셀렉트 후 저장
		int odno = service.selectOrderDetail(mno);
		log.warn("컨트롤러 주문한 책 리스트 입력을 위한 odno.." + odno);
		int listResult = 0;
		for (OrderBookListVO oblvo : odvo.getList()) {
			oblvo.setOdno(odno);
			log.warn("oblvo 정보 .. " + oblvo.getBno());
			log.warn("oblvo 정보 .. " + oblvo.getOdno());
			log.warn("oblvo 정보 .. " + oblvo.getCount());
			listResult = service.insertOrderBookList(oblvo);
			log.warn("컨트롤러 책 리스트 입력 결과.." + listResult);
		}
		
		return result >= 1 ? new ResponseEntity<String>("success",HttpStatus.OK) : new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

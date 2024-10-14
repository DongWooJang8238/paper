package org.joonzis.mapper;

import java.util.List;

import org.joonzis.domain.BookVO;
import org.joonzis.domain.Criteria;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.extern.log4j.Log4j;

@Log4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class MapperTest {
	@Autowired
	private ShopMapper mapper;
	
	@Test
	public void testGetList() {
		Criteria cri = new Criteria(1, 5, 1);
		
		List<BookVO> list = mapper.getBookList(cri);
		
		for(BookVO vo : list) {
			log.info("책 목록 : " + vo);
		}
	}
}

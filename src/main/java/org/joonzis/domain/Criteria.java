package org.joonzis.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Criteria {
	private int pageNum;	// 페이지 번호
	private int amount;		// 가져올 게시글 수
	private int gener;		// 장르 번호
	
}

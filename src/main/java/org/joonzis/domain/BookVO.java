package org.joonzis.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookVO {
	private int bno, gno, inventory, bookPrice;
	private double avgRating;
	private String title, publisher, writer, shortText, isbn, bookcover, status;
	private Date ordDate;
	
	private int likeCount;
}

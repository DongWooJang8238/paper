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
public class UserVO {
	private int mno, userPoint;
	private String userName, userId, userPw, 
	userPhoneNumber, userAddress, userEmail, 
	userGender, userRole, nickName, userIcon;
	private Date userDate, registerDate;
}

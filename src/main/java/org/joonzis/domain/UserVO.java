package org.joonzis.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

<<<<<<< HEAD
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserVO {
	private int mno, userPoint;
	private String userName, userId, 
	userPw, userPhonenumber,userAddress, 
	userEmail, userGender, 
	userRole, nickName, userIcon;
	
	private Date userDate, registerDate;

=======
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
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
}

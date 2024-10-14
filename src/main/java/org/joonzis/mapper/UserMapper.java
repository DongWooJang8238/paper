package org.joonzis.mapper;

import org.joonzis.domain.UserVO;

public interface UserMapper {
	// 아이디 단일 중복체크
	public int selectUsername(String userId);
	
	// 아이디&비밀번호 체크
	public int selectUserPw(UserVO vo);
	
	// 회원가입 데이터 등록
	public int signup_insert(UserVO vo);
	
	// 유저 아이디 찾기
	public int findUserId(UserVO vo);
	
	// 유저 ID 검색
	public UserVO selectUserIdByEmail(UserVO vo);
	
	// 비밀번호 찾기 출력 ( 아이디/이메일 인증번호 보내기 전 )
	public UserVO findUserIdEmail(UserVO vo);
	
	// 새 비밀번호 설정
	public int updatePw(UserVO vo);
}

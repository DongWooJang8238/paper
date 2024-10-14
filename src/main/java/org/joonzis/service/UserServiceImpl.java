package org.joonzis.service;

import org.joonzis.domain.UserVO;
import org.joonzis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	// 유저 아이디 중복 검색 ( 회원가입 )
	@Override
	public int selectUsername(String userId) {
		log.warn("아이디 중복검색 : " + userId);
		return userMapper.selectUsername(userId);
	}
	
	// 로그인 ( ID & PW 검증 )
	@Override
	public int selectUserPw(UserVO vo) {
		log.warn("Service 아이디&비밀번호 : " + vo.getUserId());
		log.warn("Service 아이디&비밀번호 : " + vo.getUserPw());
		return userMapper.selectUserPw(vo);
	}
	
	// 회원가입 ( DATA INSERT )
	@Override
	public int signup_insert(UserVO vo) {
		log.warn("Service 회원가입 성공 : " + vo);
		log.warn("이름 : " + vo.getUserName());
		log.warn("아이디  :" +vo.getUserId());
		log.warn("비밀번호 :" + vo.getUserPw());
		log.warn("이메일  :" + vo.getUserEmail());
		return userMapper.signup_insert(vo);
	}

	// 유저 아이디 찾기
	@Override
	public int findUserId(UserVO vo) {
		log.warn("유저 이름 찾기 : " + vo.getUserName());
		log.warn("유저 이메일  : " + vo.getUserEmail());
		return userMapper.findUserId(vo);
	}
	
	// 유저 ID 검색
	@Override
	public UserVO selectUserIdByEmail(UserVO vo) {
		log.warn("유저 아이디 찾기 : " + vo.getUserEmail());
		return userMapper.selectUserIdByEmail(vo);
	}
	
	// 비밀번호 찾기 출력 ( 아이디/이메일 인증번호 보내기 전 )
	@Override
	public UserVO findUserIdEmail(UserVO vo) {
		log.warn("유저 아이디/이메일 찾기 " );
		return userMapper.findUserIdEmail(vo);
	}
	
	@Override
	public int updatePw(UserVO vo) {
		return userMapper.updatePw(vo);
	}
	
}

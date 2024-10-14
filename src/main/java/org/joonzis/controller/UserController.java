package org.joonzis.controller;

import java.util.Locale;
import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.print.attribute.standard.Severity;

import org.joonzis.domain.UserVO;
import org.joonzis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/User/*")
public class UserController {
	
	@Autowired
	private UserService service;
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		return "/main";
	}
	
	@GetMapping("/login")
	public String login() {
		log.info("로그인 페이지 이동");
		return "/login";
	}
	
	@GetMapping("/signup")
	public String signup() {
		log.info("회원가입 페이지 이동");
		return "/signup";
	}
	
	@GetMapping("/mypage")
	public String mypage() {
		log.info("마이페이지 이동");
		return "/mypage";
	}
	
	@PostMapping("/signup")
	public String signup(UserVO vo) {
		int result = service.signup_insert(vo);
		log.warn("Controller 회원가입 성공 : " + result);
		return "/main";
		
	}
	
	@PostMapping("/goLogin")
	public String goLogin(UserVO vo) {
		log.info("Controller 로그인 성공 : " + vo);
		return "/main";
	}
	
	@GetMapping("/findId")
	public String findId() {
		log.info("아이디 찾기 페이지 이동");
		return "/find/findId";
	}
	
	@GetMapping("/findPw")
	public String findPw() {
		log.info("비밀번호 찾기 페이지 이동");
		return "/find/findPw";
	}
	
	// 아이디 찾기 후 - 유저 아이디 출력 페이지 이동
	@PostMapping("/goFindId")
	public String goFindId(Model model, UserVO vo) {
		UserVO result = service.selectUserIdByEmail(vo);
		log.info("아이디 찾기 검색 페이지 이동 : " + result.getUserId());
		model.addAttribute("userId", result.getUserId());
		return "/find/goFindId";
	}
	
	// 인증번호 인증 완료 - 새 비밀번호 페이지 이동
	@PostMapping("/pw_auth_page")
		public String pw_auth(Model model, int num, UserVO vo){
		log.info("---------------------------" + num);
		log.info("---------------------------" + vo.getUserId());
		model.addAttribute("userId", vo.getUserId());
		model.addAttribute("model", num);
		return "/find/pwAuth";
	}
	
	// 새 비밀번호 설정 페이지 이동
	@PostMapping("/pwNew")
		public String pwNew(Model model,UserVO vo) {
		model.addAttribute("userId", vo.getUserId());
		log.info("새 비밀번호 설정 페이지 이동 : " + vo.getUserId());
		return "/find/pwNew";
	}
	
	// 새 비밀번호 설정 완료 - 메인페이지
	@PostMapping("/pwChange")
		public String pwChange(UserVO vo) {
		int result = service.updatePw(vo);
		log.info("새 비밀번호 설정 완료 : " + result);
		
		return "/main";
	}
}

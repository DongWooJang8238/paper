package org.joonzis.controller;

import java.util.Random;

import org.joonzis.domain.UserVO;
import org.joonzis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/asycn")
public class UserAsycnController {

	@Autowired
	private UserService service;

	@Autowired
	JavaMailSenderImpl mailSender;

	@GetMapping(value="/validateId/{userid}")
	public ResponseEntity<String> selectUsername(@PathVariable("userid") String userid){
		log.info("중복검색 : " + userid );

		int selectCount = service.selectUsername(userid);

		log.info("----------------" + selectCount);

		return selectCount == 1 ?
				new ResponseEntity<String>("success", HttpStatus.OK) :
					new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);


	}

	@PostMapping(value = "/goLogin", consumes = "application/json", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> goLogin(@RequestBody UserVO vo){

		log.warn("Asycn 아이디 확인 : " + vo.getUserId());

		int selectIdCount = service.selectUsername(vo.getUserId());

		log.warn("컨트롤러 아이디 카운트" + selectIdCount);

		// 아이디가 만약에 있다면 ( = 1 )
		// 패스워드 찾는 함수 실행 
		// 패스워드가 있다면 ( = 1 ) = find the ID&PW 전송
		// 패스워드가 틀리다면 ( = 0 ) = password is wrong 전송
		if(selectIdCount == 1) {
			int selectPwCount = service.selectUserPw(vo);
			return selectPwCount == 1 ?
					new ResponseEntity<String>("find the ID&PW", HttpStatus.OK) :
						new ResponseEntity<String>("password is wrong",HttpStatus.INTERNAL_SERVER_ERROR);

		}else if(selectIdCount == 0){
			return new ResponseEntity<String>("ID is wrong", HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("id count 2",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping(value = "/findId", consumes = "application/json", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> findUserId(@RequestBody UserVO vo){

		log.warn("Asycn 이름" + vo.getUserName());
		log.warn("Asycn 이메일 " + vo.getUserEmail());

		int findIdCount = service.findUserId(vo);


		return findIdCount == 1 ?
				new ResponseEntity<String>("find ID&EMAIL", HttpStatus.OK) :
					new ResponseEntity<String>("none ID&EMAIL", HttpStatus.INTERNAL_SERVER_ERROR);


	}



	@PostMapping(value = "/pw_auth", consumes = "application/json", produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> pw_auth(@RequestBody UserVO vo, Model model){
		log.info("아이디/이메일 인증 : " + vo.getUserEmail());
		log.info("아이디/이메일 인증  : " + vo.getUserId());

		UserVO result = service.findUserIdEmail(vo);

		if(result != null) {
			log.info("아이디/이메일 : " + result.getUserEmail());
			log.info("아이디/이메일 : " + result.getUserId());
			SimpleMailMessage message = new SimpleMailMessage();
			Random ran = new Random();
			int num = ran.nextInt(999999);

//			message.setFrom("soldesk1012@naver.com"); // 보내는 이
//			message.setTo(result.getUserEmail());  // 받는 이
//			message.setSubject("[페이퍼 그라운드] 비밀번호 인증 이메일 입니다.");
//			message.setText("안녕하세요.\n" +
//							result.getUserId() + "회원님\n" + 
//							"페이퍼 그라운드 비밀번호 찾기 인증번호는 " + num + "입니다.\n" +
//							"・본 메일은 중요한 정보를 포함하고 있으므로, 메일 알림 수신에 동의하지 않으신 분에게도 발송하고 있습니다.\n" +
//							"・본 메일은 발신 전용 메일로 회신되지 않습니다.");
			
			model.addAttribute("num", num);
			model.addAttribute("userId", result.getUserId());
//			mailSender.send(message);

			return new ResponseEntity<String>("" + num, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

}

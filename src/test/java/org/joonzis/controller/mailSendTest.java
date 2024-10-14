package org.joonzis.controller;

import javax.mail.internet.MimeMessage;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class mailSendTest {

	@Autowired
	JavaMailSenderImpl mailSender;

	// MimeMessage 객체를 직접 생성하여 메일을 발송하는 방법
	@Test
	public void simpleMailTest() {
	    SimpleMailMessage message = new SimpleMailMessage();
	    message.setFrom("soldesk1012@naver.com"); // 보내는 사람 이메일 주소
	    message.setTo("hoyeonzz37@gmail.com");
	    message.setSubject("Test Subject");
	    message.setText("Test email body");
	    
	    mailSender.send(message);
	}

}
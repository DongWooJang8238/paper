package org.joonzis.controller;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

<<<<<<< HEAD
=======

>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
@Controller
public class HomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
<<<<<<< HEAD
		
		
		return "/main";
=======
		return "/mainPage";
>>>>>>> 690de9767527b7f2649666b96d625a6265b86f6d
	}
	
}

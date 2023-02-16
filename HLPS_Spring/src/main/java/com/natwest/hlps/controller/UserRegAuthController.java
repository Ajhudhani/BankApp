package com.natwest.hlps.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.hlps.exception.UserNotFoundException;
import com.natwest.hlps.model.UserRegister;
import com.natwest.hlps.service.UserRegService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("auth/v1")
public class UserRegAuthController {

	private Map<String,String> map = new HashMap<>();
	
	private UserRegService userService;
	
	@Autowired
	public UserRegAuthController(UserRegService userService) {
		super();
		this.userService = userService;
	}

	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody UserRegister userObj){
		try {
			String jwtToken = generateToken(userObj.getEmail(), userObj.getPassword());
			
			String uEmail = userEmail(userObj.getEmail());
			
			map.put("message", "User successfully loggedin");
			
			map.put("token", jwtToken);
			
			map.put("email", uEmail);
		
		} catch (Exception e) {
			map.put("message", e.getMessage());
			map.put("token", null);
			
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map,HttpStatus.OK);
	}

	private String userEmail(String email)throws ServletException, UserNotFoundException {
		String uEmail = null;
		boolean flag = userService.validateUserEmail(email);
		
		if(!flag)
			throw new ServletException("Invalid email");
		else {
			uEmail = email;
		}
		return uEmail;
	}
	private String generateToken(String email, String password) throws ServletException, UserNotFoundException {
		String jwtToken = "";

		//validate user against db
		
		boolean flag = userService.validateUserService(email, password);
		if(!flag)
			throw new ServletException("Invalid credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(email)
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}	
}

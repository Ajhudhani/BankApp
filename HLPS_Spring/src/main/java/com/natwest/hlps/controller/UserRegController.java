package com.natwest.hlps.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.hlps.exception.UserAlreadyExistsException;
import com.natwest.hlps.exception.UserNotFoundException;
import com.natwest.hlps.model.UserRegister;
import com.natwest.hlps.service.IUserRegService;




@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("hlpsapi/v1")

public class UserRegController {
	
//	http://localhost:8081/hlpsapi/v1/register	

	@Autowired
	private IUserRegService userService;
	
	private ResponseEntity<?> respentity;
	
	@PostMapping("/register")
	public ResponseEntity<?> addUserDetails(@RequestBody UserRegister userObj) throws UserAlreadyExistsException
	{
		
			UserRegister createUser =  this.userService.saveUser(userObj);			

			respentity = new ResponseEntity<>(createUser,HttpStatus.CREATED);		
		
		
		return respentity;
	}
	
	@GetMapping("/userDetails/{email}")
	public ResponseEntity<?> getUserById(@PathVariable String email) throws UserNotFoundException
	{
		try {
		UserRegister getUser = this.userService.getUserById(email);
		
		respentity = new ResponseEntity<>(getUser,HttpStatus.OK);
		}
		catch(UserNotFoundException unfe) {
			
			respentity = new ResponseEntity<>("User Does Not Exists !!!",HttpStatus.NOT_FOUND);
		}
		
		return respentity;
		
	}
	
}

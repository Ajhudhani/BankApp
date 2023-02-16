package com.natwest.hlps.service;

import com.natwest.hlps.exception.UserAlreadyExistsException;
import com.natwest.hlps.exception.UserNotFoundException;
import com.natwest.hlps.model.UserRegister;

public interface IUserRegService {
	
	public UserRegister saveUser(UserRegister userObj) throws UserAlreadyExistsException;
	
	public boolean validateUserService(String email, String password) throws UserNotFoundException;

	public boolean validateUserEmail(String email) throws UserNotFoundException;
	
	public UserRegister getUserById(String email) throws UserNotFoundException;
	
}

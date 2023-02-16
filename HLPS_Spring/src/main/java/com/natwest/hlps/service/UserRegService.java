package com.natwest.hlps.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.hlps.exception.UserAlreadyExistsException;
import com.natwest.hlps.exception.UserNotFoundException;
import com.natwest.hlps.model.UserRegister;
import com.natwest.hlps.repository.IUserRegRepository;

@Service
public class UserRegService implements IUserRegService 
{
	
	@Autowired
	private IUserRegRepository userRepo;
	
	@Override
	public boolean validateUserService(String email, String password) throws UserNotFoundException {
		
		UserRegister user = this.userRepo.validateUser(email, password);
		
		if(user != null)
			return true;
		else
			return false;
	}
	
	
	@Override
	public UserRegister saveUser(UserRegister userObj) throws UserAlreadyExistsException
	{
		Optional<UserRegister> optionalUser = this.userRepo.findById(userObj.getEmail());
		
		UserRegister addedUser=null;
		
		if(optionalUser.isPresent())
		{
			System.out.println("User already exists");
			throw new UserAlreadyExistsException();
		}
		else
		{
			addedUser = this.userRepo.save(userObj);
		}
	
		return addedUser;
	}

	@Override
	public boolean validateUserEmail(String email) throws UserNotFoundException
	{
		UserRegister user = this.userRepo.validateEmail(email);
		
		if(user != null)
			return true;
		else
			return false;
	}


	@Override
	public UserRegister getUserById(String email) throws UserNotFoundException {
		Optional<UserRegister> userDetails = this.userRepo.findById(email);
		
		UserRegister userReg = null;
		
		userReg = userDetails.get();
		
		return userReg;
	}

}

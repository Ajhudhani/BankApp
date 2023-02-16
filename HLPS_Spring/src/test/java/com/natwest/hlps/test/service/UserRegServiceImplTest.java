package com.natwest.hlps.test.service;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.natwest.hlps.exception.UserAlreadyExistsException;
import com.natwest.hlps.exception.UserNotFoundException;
import com.natwest.hlps.model.UserRegister;
import com.natwest.hlps.repository.IUserRegRepository;
import com.natwest.hlps.service.UserRegService;


@ExtendWith(MockitoExtension.class)
public class UserRegServiceImplTest {

	private UserRegister userreg;
	
	@Mock
	private IUserRegRepository userRepo;
	
	@InjectMocks
	private UserRegService userregservice;
	
	List<UserRegister> userList = null;
	
	String email;
	
	@BeforeEach
	public void setUp() throws Exception 
	{
		userreg = new UserRegister();
		
		userreg.setTitle("Mr");
		userreg.setFname("Arun");
		userreg.setLname("Kumar");
		userreg.setDob("10-10-1990");
		userreg.setEmail("arun@gmail.com");
		userreg.setMobile("9530100000");
		userreg.setPassword("Arun@123");
		
		
		userList = new ArrayList();
		
		userList.add(userreg);
		
		
		
	}
	
	@AfterEach
	public void tearDown() throws Exception 
	{
		userreg=null;
	}
	
	@Test
	public void testSaveUserSuccess() throws UserAlreadyExistsException 
	{
		when(userRepo.save(any(UserRegister.class))).thenReturn(userreg); 
		
		UserRegister actual = userregservice.saveUser(new UserRegister());
		
		assertEquals(userreg,actual);
		
		verify(userRepo,times(1)).save(any(UserRegister.class));
		
	}
	
//	@Test
//	public void testGetEmailPasswordSuccess() throws UserNotFoundException
//	{
//		when(userRepo.getReferenceById(email(UserRegister.class)).thenReturn(email;)
//				.thenReturn(email); 
//		
//		UserRegister actual = userregservice.(());
//		
//		assertEquals(userreg,actual);
//		
//		verify(userRepo,times(1)).save(any(UserRegister.class));
//		
//	}
}

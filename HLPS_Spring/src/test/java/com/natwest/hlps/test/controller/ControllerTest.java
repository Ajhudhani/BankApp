package com.natwest.hlps.test.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.natwest.hlps.controller.UserRegController;
import com.natwest.hlps.model.UserRegister;
import com.natwest.hlps.service.UserRegService;

@WebMvcTest(UserRegController.class)
public class ControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private UserRegService userregservice;
	
	private UserRegister userObj;
	
	@BeforeEach
	public void setup()
	{
		userObj = new UserRegister();
		
		userObj.setTitle("Mr");
		userObj.setFname("Arun");
		userObj.setLname("Kumar");
		userObj.setDob("10-10-1990");
		userObj.setEmail("arun@gmail.com");
		userObj.setMobile("9530100000");
		userObj.setPassword("Arun@123");
		
		ArrayList userList = new ArrayList();
		
		userList.add(userObj);
	}
	@AfterEach
	public void tearDown()
	{
		userObj=null;
	}
	
	@Test
	public void testSaveUserSuccess() throws Exception
	{
		
		Mockito.when(userregservice.saveUser(userObj)).thenReturn(userObj);
		
		mvc.perform(MockMvcRequestBuilders.post("/hlpsapi/v1/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content(asJSON(userObj)))
				.andExpect(status().isCreated());
	}
	private static String asJSON(UserRegister userObj)
	{
		try
		{
			String sobj = new ObjectMapper().writeValueAsString(userObj);
			return sobj;
		}
		catch(Exception eobj)
		{
			throw new RuntimeException();
		}
	}
	
}

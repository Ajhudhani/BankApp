package com.natwest.hlps.loaninfo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.hlps.loaninfo.model.LoanInfo;
import com.natwest.hlps.loaninfo.service.ILoanInfoService;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("hlpsloaninfoapi/v1")

public class LoanInfoController {

//	http://localhost:8082/hlpsloaninfoapi/v1/loanapp
	
	@Autowired
	private ILoanInfoService customerService;
	
	private ResponseEntity<?> respentity;
	
	@PostMapping("/loanapp")
	@ResponseStatus(code=HttpStatus.CREATED, reason="Loan application submitted successfully")
	public ResponseEntity<?> addCustDetails(@RequestBody LoanInfo custObj)
	{
		LoanInfo createCustomer = this.customerService.saveDetails(custObj);
		respentity = new ResponseEntity(createCustomer,HttpStatus.CREATED); 
				
		return respentity;
	}
	
	@GetMapping("/getInfo/{email}")
//	@ResponseStatus(code=HttpStatus.OK,reason="Info retrieved successfully")
	public ResponseEntity<?> getLoanappById(@PathVariable String email){
		
			LoanInfo loanDetails =  this.customerService.getLoanappById(email);
			
			respentity = new ResponseEntity(loanDetails,HttpStatus.OK);
			
			return respentity;
	}
	
	
}

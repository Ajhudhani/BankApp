package com.natwest.hlps.loaninfo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.hlps.loaninfo.model.LoanInfo;
import com.natwest.hlps.loaninfo.repository.ILoanInfoRepo;

@Service
public class LoanInfoService implements ILoanInfoService
{
	@Autowired
	private ILoanInfoRepo custRepo;
	
	@Override
	public LoanInfo saveDetails(LoanInfo customerDetailsObj)
	{
		LoanInfo addLoanapp = null;
		addLoanapp  = this.custRepo.save(customerDetailsObj);
		return addLoanapp; 
	}

	@Override
	public LoanInfo getLoanappById(String email) {
		
		Optional<LoanInfo> optionalInfo = this.custRepo.findById(email);
		
		LoanInfo loanObj = optionalInfo.get();
		return loanObj;
				
	}
	
}

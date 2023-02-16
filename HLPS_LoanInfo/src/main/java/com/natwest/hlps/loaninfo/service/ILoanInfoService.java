package com.natwest.hlps.loaninfo.service;

import com.natwest.hlps.loaninfo.model.LoanInfo;

public interface ILoanInfoService {
	
	public LoanInfo saveDetails(LoanInfo customerDetailsObj);
	
	public LoanInfo getLoanappById(String email);
}

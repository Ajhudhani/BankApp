package com.natwest.hlps.loaninfo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.natwest.hlps.loaninfo.model.LoanInfo;

public interface ILoanInfoRepo extends JpaRepository<LoanInfo, String> {

}

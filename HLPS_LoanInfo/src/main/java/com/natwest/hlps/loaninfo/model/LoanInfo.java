package com.natwest.hlps.loaninfo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="loandb")

public class LoanInfo {
	
	

	private String title;
	private String firstname;
	private String lastname;
	private String fathername;
	private String gender;
	private String dob;
	private String nationality;
	private String houseno;
	private String streetname;
	private String city;
	private String county;
	private String postcode;
	@Id
	@Column(name="email")
	private String email;
	
	private String mobile;
	private String incomemain;
	private String incomeother;
	private String expensemain;
	private String expenseother;
	private String propertyvalue;
	private String deposit;
	private String term;
	private String rate;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getFathername() {
		return fathername;
	}
	public void setFathername(String fathername) {
		this.fathername = fathername;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getHouseno() {
		return houseno;
	}
	public void setHouseno(String houseno) {
		this.houseno = houseno;
	}
	public String getStreetname() {
		return streetname;
	}
	public void setStreetname(String streetname) {
		this.streetname = streetname;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCounty() {
		return county;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public String getPostcode() {
		return postcode;
	}
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getIncomemain() {
		return incomemain;
	}
	public void setIncomemain(String incomemain) {
		this.incomemain = incomemain;
	}
	public String getIncomeother() {
		return incomeother;
	}
	public void setIncomeother(String incomeother) {
		this.incomeother = incomeother;
	}
	public String getExpensemain() {
		return expensemain;
	}
	public void setExpensemain(String expensemain) {
		this.expensemain = expensemain;
	}
	public String getExpenseother() {
		return expenseother;
	}
	public void setExpenseother(String expenseother) {
		this.expenseother = expenseother;
	}
	public String getPropertyvalue() {
		return propertyvalue;
	}
	public void setPropertyvalue(String propertyvalue) {
		this.propertyvalue = propertyvalue;
	}
	public String getDeposit() {
		return deposit;
	}
	public void setDeposit(String deposit) {
		this.deposit = deposit;
	}
	public String getTerm() {
		return term;
	}
	public void setTerm(String term) {
		this.term = term;
	}
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	@Override
	public String toString() {
		return "LoanInfo [title=" + title + ", firstname=" + firstname + ", lastname=" + lastname + ", fathername="
				+ fathername + ", gender=" + gender + ", dob=" + dob + ", nationality=" + nationality + ", houseno="
				+ houseno + ", streetname=" + streetname + ", city=" + city + ", county=" + county + ", postcode="
				+ postcode + ", email=" + email + ", mobile=" + mobile + ", incomemain=" + incomemain + ", incomeother="
				+ incomeother + ", expensemain=" + expensemain + ", expenseother=" + expenseother + ", propertyvalue="
				+ propertyvalue + ", deposit=" + deposit + ", term=" + term + ", rate=" + rate + "]";
	}
	
	
	

}

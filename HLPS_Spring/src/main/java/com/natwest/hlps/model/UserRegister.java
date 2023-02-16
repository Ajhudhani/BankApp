package com.natwest.hlps.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")

public class UserRegister {
	
	private String title;
	private String fname;
	private String lname;
	private String dob;
	
	@Id
	@Column(name="email")
	private String email;
	private String mobile;
	
	@Column(name="password")
	private String password;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserRegister [title=" + title + ", fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", email="
				+ email + ", mobile=" + mobile + ", password=" + password + "]";
	}
	
	

}

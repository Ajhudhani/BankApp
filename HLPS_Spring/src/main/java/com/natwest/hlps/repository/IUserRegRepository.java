package com.natwest.hlps.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.natwest.hlps.model.UserRegister;

public interface IUserRegRepository extends JpaRepository<UserRegister, String> 
{
	@Query(value="select * from register u where u.email like :email and u.password like :password", nativeQuery=true)
	 public UserRegister validateUser(@Param("email") String email, @Param("password") String password);
	
	@Query(value="select * from register u where u.email like :email", nativeQuery=true)
	public UserRegister validateEmail(@Param("email") String email);
}

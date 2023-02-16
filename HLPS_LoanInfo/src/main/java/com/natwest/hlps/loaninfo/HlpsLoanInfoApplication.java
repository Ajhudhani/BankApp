package com.natwest.hlps.loaninfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class HlpsLoanInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(HlpsLoanInfoApplication.class, args);
	}

}

package com.example.health_care;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class HealthCareApplication implements CommandLineRunner {

	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	public static void main(String[] args) {
		SpringApplication.run(HealthCareApplication.class, args);
	}
	

	@Override
	public void run(String... args) throws Exception {
	
	BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
	String encodedpw= passwordEncoder.encode("isc123");
	System.out.println(encodedpw); // 

	}
	

}

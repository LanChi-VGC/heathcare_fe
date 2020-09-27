package com.example.health_care.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.health_care.entity.JwtUser;



@Repository
public interface JwtUserRespository extends CrudRepository<JwtUser, Integer> {
	public JwtUser findByUsername(String username);
}

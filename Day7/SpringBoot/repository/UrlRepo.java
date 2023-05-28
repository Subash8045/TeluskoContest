package com.subash.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subash.app.entity.Url;

public interface UrlRepo extends JpaRepository<Url,Integer> {
    
}

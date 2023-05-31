package com.subash.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subash.app.entity.UserTab;

public interface UsserRepo  extends JpaRepository<UserTab,Integer> {

    UserTab findByName(String name);
    
}

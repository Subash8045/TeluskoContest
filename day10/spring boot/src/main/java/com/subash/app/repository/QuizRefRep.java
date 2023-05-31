package com.subash.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subash.app.entity.QuizRefEntity;

public interface QuizRefRep extends JpaRepository<QuizRefEntity,Integer>{
    
}

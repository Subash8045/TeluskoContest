package com.subash.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subash.app.entity.QuizTab;

public interface QuizRepo extends JpaRepository<QuizTab,Integer> {

    QuizTab findByQuizId(int id);
    
}

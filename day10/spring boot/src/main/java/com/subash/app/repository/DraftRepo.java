package com.subash.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subash.app.entity.DraftQuiz;

public interface DraftRepo extends JpaRepository<DraftQuiz,Integer>{

    List<DraftQuiz> findAllByQuizId(int id);
    
}

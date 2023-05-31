package com.subash.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DraftQuiz {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int quizId;
    private String question;
    private String ans1;
    private String ans2;
    private String ans3;
    private String ans4;
    private int crtAns;
}

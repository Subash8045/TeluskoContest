package com.subash.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.subash.app.dto.DraftRef;
import com.subash.app.entity.DraftQuiz;
import com.subash.app.entity.QuizRefEntity;
import com.subash.app.entity.QuizTab;
import com.subash.app.entity.UserTab;
import com.subash.app.repository.DraftRepo;
import com.subash.app.repository.QuizRefRep;
import com.subash.app.repository.QuizRepo;
import com.subash.app.repository.UsserRepo;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final DraftRepo draftRepo;
    private final QuizRefRep quizRefRep;
    private final QuizRepo quizRepo;
    private final UsserRepo userRepo;




    public List<QuizRefEntity> getRef() {
        return quizRefRep.findAll();
    }


    public List<DraftRef> getQuestions(int id) {
        List<DraftQuiz> arr = draftRepo.findAllByQuizId(id);

        List<DraftRef> lis = new ArrayList<>();
        int i = 1;
        for(DraftQuiz t: arr) {
            lis.add(new DraftRef(i++, t.getQuestion(), t.getAns1(),t.getAns2(), t.getAns3(), t.getAns4(), t.getCrtAns()));
        }
        return lis;
    }

    public int addQuiz() {
        Random random = new Random();
        int id = random.nextInt(400);
        QuizTab t = new QuizTab(0,id,false);
        quizRepo.save(t);
        return id;
    }

    public void setQuiz(int id) { 
        QuizTab t = quizRepo.findByQuizId(id);
        t.setLive(true);
        quizRepo.save(t);
    }

    public List<DraftRef> saveUser(String name, int code) {
        if(quizRepo.findByQuizId(code) != null) 
        {
            userRepo.save(new UserTab(0,name,code,0));
        }

        return getQuestions(code);

    }
    public void setPoint(String name , int pt)
    {
        UserTab user =  userRepo.findByName(name);
        user.setPt(user.getPt()+pt);
        userRepo.save(user);
    }
    






    @PostConstruct
    public void saveUser(){

        QuizRefEntity quizRefEntity = new QuizRefEntity();
        quizRefEntity.setName("java");
        quizRefEntity.setNo(10);

        int id = quizRefRep.save(quizRefEntity).getId();

        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));
        draftRepo.save(new DraftQuiz(0,id,"What is Java ?","Programming Lang","Tea","Coffee","None",1));

    }
    
}

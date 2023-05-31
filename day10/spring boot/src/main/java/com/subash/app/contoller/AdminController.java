package com.subash.app.contoller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.subash.app.dto.DraftRef;
import com.subash.app.entity.QuizRefEntity;
import com.subash.app.service.AdminService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AdminController {
    
    private final AdminService service;


    @GetMapping("/getQuizRef")
    public ResponseEntity<List<QuizRefEntity>> getQuizRef(){
        return ResponseEntity.ok().body(
        service.getRef());
    }

    @GetMapping("/getQuestions/{id}")
    public ResponseEntity<List<DraftRef>> getQuestins(@PathVariable("id") int id){
        return ResponseEntity.ok().body(
        service.getQuestions(id));
    }

    @GetMapping("/addQuiz")
    public ResponseEntity<Integer> addQuiz() {
        return ResponseEntity.ok().body(
            service.addQuiz()
        );
    }

    @GetMapping("/setQuiz/{id}")
    public ResponseEntity<Integer> setQuiz(@PathVariable("id") int id) {
        service.setQuiz(id);
        return ResponseEntity.ok().body(
            1
        );
    }

    @GetMapping("/addUser/{code}/{name}")
    public ResponseEntity<List<DraftRef>>  addUser(@PathVariable("code") int code,@PathVariable("name") String name) {
        return ResponseEntity.ok().body(
        service.saveUser(name, code)
        );
    }

    @PutMapping("/stPt/{name}/{pt}")
    public void  stpt(@PathVariable("name") String name,@PathVariable("pt") int pt) {
        service.setPoint(name, pt);
    }






}

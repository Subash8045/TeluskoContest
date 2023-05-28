package com.subash.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.subash.app.dto.UrlDto;
import com.subash.app.service.UrlService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class UrlController {
    
    private final UrlService urlService;

    @PostMapping("/generateShortUrl")
    public ResponseEntity<String> getShortUrl(@RequestBody UrlDto urlDto) {

        return ResponseEntity.ok().body("telus.ko/"+
        urlService.generateShortUrl(urlDto.getUrl()));
    } 
}

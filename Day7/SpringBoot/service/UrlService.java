
package com.subash.app.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.subash.app.entity.Url;

import com.subash.app.repository.UrlRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UrlService {
    private final UrlRepo urlRepo;

    private Map<String,String> data;


    public String generateShortUrl(String url) {

        refreshData();

        if(data.containsKey(url)) return data.get(url);
        
        List<String> newUrl = filterUrl(url);
        
        String value = generateShortTempUrl(newUrl);

        while(data.containsValue(value)) value = generateShortTempUrl(newUrl);

        return urlRepo.save(
                Url.builder()
                .urlKey(url)
                .urlValue(value)
                .build()
            ).getUrlValue();

    }



    private void refreshData() {
        List<Url> urls = urlRepo.findAll();

        HashMap<String,String> urlMap = new HashMap<>();

        for(Url temp : urls) {
            urlMap.put(temp.getUrlKey(),temp.getUrlValue());
        }

        data = urlMap;
    }

    private List<String> filterUrl(String url) {
            List<String> lis = new ArrayList<>();

            for(int i =0; i < url.length(); i++) 
            {   
                String t = url.charAt(i)+"";
                if(t.matches("[a-zA-Z]")) lis.add(t);
            }

            return lis;
    }

    private String generateShortTempUrl(List<String> url) {

        StringBuffer stringBuffer = new StringBuffer();

        Random random = new Random();

        int ind = 0;
        for(int i = 0; i < 6; i++) {
            ind = random.nextInt(url.size());
            stringBuffer.append(url.get(ind));
        }

        return stringBuffer.toString();
    }




}

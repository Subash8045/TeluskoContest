package com.subash.app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Url {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int urlId;
    private String urlKey;
    private String urlValue;
}

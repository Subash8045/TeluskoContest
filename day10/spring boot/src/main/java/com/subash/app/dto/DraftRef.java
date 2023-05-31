package com.subash.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DraftRef {
   private int no;
   private String question;
   private String ans1;
   private String ans2;
   private String ans3;
   private String ans4;
   private int crt;
}

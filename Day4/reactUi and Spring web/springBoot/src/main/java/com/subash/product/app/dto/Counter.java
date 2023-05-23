package com.subash.product.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Counter {
    private int whiteTable;
    private int blackTable;
    private int brown;
    private int black;
    private int white;
    private int count;
}

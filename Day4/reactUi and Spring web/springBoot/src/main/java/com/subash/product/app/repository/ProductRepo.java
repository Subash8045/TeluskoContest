package com.subash.product.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.subash.product.app.entity.Product;


public interface ProductRepo extends JpaRepository<Product,Integer> {

    List<Product> findAllByName(String name);

    List<Product> findAllByPlace(String place);

    
    @Query
    (
        value = " SELECT * FROM PRODUCT WHERE WARRNTY < :curYear",
        nativeQuery = true
    )
    List<Product> getOutOfWan(@Param("curYear")int curYear);
    
}

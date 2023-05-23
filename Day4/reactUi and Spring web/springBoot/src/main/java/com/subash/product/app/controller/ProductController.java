package com.subash.product.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.subash.product.app.dto.Counter;
import com.subash.product.app.entity.Product;
import com.subash.product.app.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @PostMapping("/save-product")
    public int addProduct(@RequestBody Product product) {
            return productService.addProduct(product);
    }
    
    @GetMapping("/get-all") 
    public List<Product> getAll() {
        return
        productService.getAllProduct();
    }

    @GetMapping("/get-counter")
    public Counter getCounter() {
        return productService.getCounter();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable("id") int id) {
        return productService.deleteProduct(id);
    }

    @GetMapping("/getBy-place/{str}")
    public List<Product> getByPlace(@PathVariable("str") String str) {
        return productService.findProductsByPlace(str);
    }

    @GetMapping("/getBy-name/{str}")
    public List<Product> getByName(@PathVariable("str") String str) {
        return productService.getProductbyName(str);
    }

    @GetMapping("/getBy-any/{str}")
    public List<Product> getByAnyText(@PathVariable("str") String str) {
        return productService.getProductWithText(str);
    }

    @GetMapping("/getOutOfWaran")
    public List<Product> getOutWarn() {
        return productService.getProductsOutOfWarranty();
    }




}

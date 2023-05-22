package com.subash.product.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.subash.product.app.entity.Product;
import com.subash.product.app.repository.ProductRepo;

import jakarta.annotation.PostConstruct;

import java.time.Year;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class ProductService {
    
    @Autowired
    ProductRepo productRepo;

    public void addProduct(Product product) {
        productRepo.save(product);
    } 

    public List<Product> getAllProduct() {
        return
        productRepo.findAll();
    }


    public List<Product> getProduct(String name){
        return
        productRepo.findAllByName(name);
    }

    public List<Product> getProductWithText(String text) {
        String str = text.toLowerCase();
        
        List<Product> products = productRepo.findAll();

        return
        products.stream()
                .filter(
                    prod ->
                        prod.getName().toLowerCase().contains(str) ||
                        prod.getType().toLowerCase().contains(str) ||
                        prod.getPlace().toLowerCase().contains(str)

                ).collect(Collectors.toList());

    }

    public List<Product> getProductsOutOfWarranty() {
        int year = Year.now().getValue();
        List<Product> products = productRepo.findAll();
        return
        products.stream()
                .filter(prod -> prod.getWarranty() < year)
        
        
                .collect(Collectors.toList());
    }


    public List<Product> findProductsByPlace(String place) {

        return productRepo.findAllByPlace(place);

    }



    @PostConstruct
    public void load() {

        addProduct(new Product(1,"Type C", "Cable", "Black Drawer", 2024));
        addProduct(new Product(2,"Mac Studio", "Computer", "White Table", 2025));
        addProduct(new Product(3,"Focusrite Mixer", "Audio System", "White Table", 2025));
        addProduct(new Product(4,"Asus Vivobook", "Laptop", "Brown Drawer", 2021));
        addProduct(new Product(5,"Asus Rog", "Laptop", "Black Table", 2021));
        addProduct(new Product(6,"Macbook pro", "Laptop", "Brown Drawer", 2022));
        addProduct(new Product(7,"Wacom Pad", "Writing Pad", "Black Drawer", 2020));
        addProduct(new Product(8,"Apple Keyboard", "Keyboard", "White Table", 2022));
     

    }

}

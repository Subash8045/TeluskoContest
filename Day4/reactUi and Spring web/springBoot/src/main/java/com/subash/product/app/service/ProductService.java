package com.subash.product.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.subash.product.app.dto.Counter;
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

    public int addProduct(Product product) {
        return productRepo.save(product).getProductId();
    } 

    public List<Product> getAllProduct() {
        return
        productRepo.findAll();
    }


    public List<Product> getProductbyName(String name){
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

    public Counter getCounter() {
        Counter counter = new Counter();
        counter.setBlack(findProductsByPlace("Black Drawer").size());
        counter.setWhite(findProductsByPlace("White Drawer").size());
        counter.setBrown(findProductsByPlace("Brown Drawer").size());
        counter.setBlackTable(findProductsByPlace("Black Table").size());
        counter.setWhiteTable(findProductsByPlace("White Table").size());
        counter.setCount(getAllProduct().size());
        return counter;


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
        addProduct(new Product(9,"Logitech Keyboard", "Keyboard", "Black Table", 2024));
        addProduct(new Product(10,"Hdmi cable", "Cable", "Black Drawer", 2024));
        addProduct(new Product(11,"Java Black Book", "Cable", "Shelf", 2024));
        addProduct(new Product(12,"Logi Mouse", "Mouse", "Black Table", 2022));
        addProduct(new Product(13,"Apple Mouse", "Mouse", "White Table", 2022));
        addProduct(new Product(14,"Lenovo Mouse", "Mouse", "Black Drawer", 2022));
        addProduct(new Product(15,"BlackBeast", "Computer", "White Table", 2020));
        addProduct(new Product(16,"BlackBeast", "Computer", "White Drawer", 2020));



    }

    public String deleteProduct(int id) {
        productRepo.deleteById(id);
        return "Deleted";
    }

}

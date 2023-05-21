import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.time.Year;

public class ProductService {

    List<Product> products = new ArrayList<>();

    public void addProduct(Product p){
        products.add(p);
    }


    public List<Product> getAllProducts(){
        return products;
    }


    public List<Product> getProduct(String name){
        return
        products.stream()
                .filter(prod -> prod.getName().toLowerCase().equals(name.toLowerCase()))
                .collect(Collectors.toList());

    }

    public List<Product> getProductWithText(String text) {
        String str = text.toLowerCase();
        
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
        return
        products.stream()
                .filter(prod -> prod.getWarranty() < year)
                .collect(Collectors.toList());
    }

    public List<Product> findProductsByPlace(String place) {

        return
        products.stream()
                .filter(prod -> prod.getPlace().toLowerCase().equals(place.toLowerCase()))
                .collect(Collectors.toList());

    }


    
}

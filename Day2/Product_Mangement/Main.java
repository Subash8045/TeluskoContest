import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        ProductService service = new ProductService();
        Scanner scan = new Scanner(System.in);

        // hey service, add the products..

        service.addProduct(new Product("Type C", "Cable", "Black Drawer", 2024));
        service.addProduct(new Product("Mac Studio", "Computer", "White Table", 2025));
        service.addProduct(new Product("Focusrite Mixer", "Audio System", "White Table", 2025));
        service.addProduct(new Product("Asus Vivobook", "Laptop", "Brown Drawer", 2021));
        service.addProduct(new Product("Asus Rog", "Laptop", "Black Table", 2021));
        service.addProduct(new Product("Macbook pro", "Laptop", "Brown Drawer", 2022));
        service.addProduct(new Product("Wacom Pad", "Writing Pad", "Black Drawer", 2020));
        service.addProduct(new Product("Apple Keyboard", "Keyboard", "White Table", 2022));
        service.addProduct(new Product("Logitech Keyboard", "Keyboard", "Black Table", 2024));
        service.addProduct(new Product("Hdmi cable", "Cable", "Black Drawer", 2024));
        service.addProduct(new Product("Java Black Book", "Cable", "Shelf", 2024));
        service.addProduct(new Product("Logi Mouse", "Mouse", "Black Table", 2022));
        service.addProduct(new Product("Apple Mouse", "Mouse", "White Table", 2022));
        service.addProduct(new Product("Lenovo Mouse", "Mouse", "Black Drawer", 2022));
        service.addProduct(new Product("BlackBeast", "Computer", "White Table", 2020));

       


        boolean flag =true;

        while(flag) {
            printMenu();
            int choice = scan.nextInt();

            if(choice == 1) {
               printProducts(service.getAllProducts());    
            }
            else if(choice == 2) {
                scan.nextLine();
                System.out.print("Enter the Name of the Product : ");
                String name = scan.nextLine();
                printProducts(service.getProduct(name));
            }
            else if(choice == 3) {
                System.out.print("Enter the text : ");
                String text = scan.next();
                printProducts(service.getProductWithText(text));
            }
            else if(choice == 4) {
                scan.nextLine();
                System.out.print("Enter the Place of the Product : ");
                String place = scan.nextLine();
                printProducts(service.findProductsByPlace(place));
            }
            else if(choice == 5) {
                printProducts(service.getProductsOutOfWarranty());
            }
            else {
                System.out.println("App is exited");
                flag = false;
            }
        }
}
    static void printMenu() {
        System.out.println("============================================================");
        System.out.println("1. View Products");
        System.out.println("2. View Product By Name");
        System.out.println("3. Search Product");
        System.out.println("4. Find Products By Place");
        System.out.println("5. Find Product Out Of Warranty");
        System.out.println("6. Exit");
        System.out.println("=============================================================");
    }

    static void printProducts(List<Product> prods) {
        if(!prods.isEmpty())
            for(Product p : prods) System.out.println(p);
        else
            System.out.println("No Product is Found");
    }

}

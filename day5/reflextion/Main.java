import java.lang.reflect.*;

interface ProductInterface{
    String getProduct();
}

class Product implements ProductInterface{
    
    private String name;
    private String place;
    
    public Product(){
        
    }
    
    public Product(String name, String place){
        this.name = name;
        this.place = place;
        
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getProduct() {
        return "Name = "+name+"\n"+"Place = " + place;
    }
    
    private String getPlace(){
        return place;
    }
    
    
}


public class Main
{
	public static void main(String[] args) {
		Product p = new Product();
		Class c = p.getClass();
		
		System.out.println(c.getName());
		
		Method[] method = c.getMethods();
		
		for(Method m : method) System.out.println(m);
		 
		Constructor[] con = c.getConstructors();
		
		for(Constructor c1 : con) System.out.println(c1);
		
		Class[] i = c.getInterfaces();
		
		System.out.println(i[0]);
		
		
		try{
		    		System.out.println(method[0].invoke(p));

		}
		catch(Exception e){ System.out.println(e);}
			
		
	}
}

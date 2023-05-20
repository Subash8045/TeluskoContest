import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int row = 10;
        pas(row);
    }
    
    static int pascal(int i,int j)
    {
        if(i < 0 && j < 0) return 1;
        if(j < 0 || j > i) return 0;
        
        
        
        
        return pascal(i-1,j-1) + pascal(i-1,j);
    }

    static void pas(int n) {
      
        String space = "";

        for (int i = 0; i < n - 1; i++)
            space = space + " ";

        for (int i = 0; i < n; i++) {
            
         
            System.out.print(space.substring(0, n - i-1));
            for (int j = 0; j <= i; j++) {
                
                    System.out.print(pascal(i,j)+" ");
                }
            System.out.println();
            }
            
        
    }
}

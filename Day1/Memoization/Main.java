import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        int row = 10;
        pas(row);
    }
    
    static int pascal(int i,int j,HashMap cache)
    {
        String index = i + "," +j;
        
        if(cache.containsKey(index)) return ((Integer) cache.get(index)).intValue();
        if(i < 0 && j < 0) return 1;
        if(j < 0) return 0;
        if(j > i) return 0;
        
        
        int res = pascal(i-1,j-1,cache) + pascal(i-1,j,cache);
        cache.put(index, res);
        return res;
    }

    static void pas(int n) {
        
        HashMap<String, Integer> cache = new HashMap<>();
      
        String space = "";

        for (int i = 0; i < n - 1; i++)
            space = space + " ";

        for (int i = 0; i < n; i++) {
            
         
            System.out.print(space.substring(0, n - i-1));
            for (int j = 0; j <= i; j++) {
                
                    System.out.print(pascal(i,j,cache)+" ");
                }
            System.out.println();
            }
            
        
    }
}

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int row = 10;
        pas(row);
    }

    static void pas(int n) {
        List<Integer> pR = new ArrayList<>();
        List<Integer> cR = new ArrayList<>();

        String space = "";

        for (int i = 0; i < n - 1; i++)
            space = space + " ";

        for (int i = 0; i < n; i++) {
            int r = 0;
            pR.clear();
            pR.addAll(cR);
            cR.clear();
            System.out.print(space.substring(0, n - i-1));
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    r = 1;
                    System.out.print(r + " ");
                } else {
                    r = pR.get(j - 1) + pR.get(j);
                    System.out.print(r + " ");
                }
                cR.add(r);
            }
            System.out.println();
        }
    }
}

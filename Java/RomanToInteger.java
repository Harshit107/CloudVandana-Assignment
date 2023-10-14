import java.util.*;


public class Program {

    public static int convert(String s) {      

      //if no value is provided
        if (s == null || s.length() == 0)
            return 0;

        int n = s.length() -1;

        HashMap<Character, Integer> hm = new HashMap<>();
        hm.put('I', 1);
        hm.put('V', 5);
        hm.put('X', 10);
        hm.put('L', 50);
        hm.put('C', 100);
        hm.put('D', 500);
        hm.put('M', 1000);

        char lastCharacter = s.charAt(n);
        int result = hm.get(lastCharacter);

        for (int i = n - 1; i >= 0; i--) {
            if (hm.get(s.charAt(i)) >= hm.get(s.charAt(i + 1)))
                result += hm.get(s.charAt(i));
            else
                result -= hm.get(s.charAt(i));
        }

        return result;
    }

    public static void main(String[] args) {
        String input = "XIV"; 
        int intValue = convert(input);
        System.out.println("The integer value of " + input + " is: " + intValue);
    }
}

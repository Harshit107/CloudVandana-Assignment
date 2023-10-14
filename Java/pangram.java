public class Program {
    
    public static boolean isPangram(String str) {
        // Created a boolean array for 26 letter
        boolean[] alphabetPresent = new boolean[26];

        str = str.toLowerCase();

        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetPresent[index] = true;
            }
        }

        for (boolean isPresent : alphabetPresent) 
            if (!isPresent) 
                return false;
            
        
        return true;
    }

    public static void main(String[] args) {
        String s = "The quick brown fox jumps over the lazy dog";
        boolean isPangramRes = isPangram(s);

        if (isPangramRes) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}

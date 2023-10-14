
import java.io.*;
import java.util.*;

class Program {
    
    public static void shuffleArray(int[] arr) {
        Random rand = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int index = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    
 
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        System.out.println("Original array = " + Arrays.toString(arr));
        shuffleArray(arr);
        System.out.println("Shuffled arra = " + Arrays.toString(arr));
    }
}
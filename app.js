import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
	
	public static void main(String[]args) throws FileNotFoundException {
		File f = new File("C:\\Users\\j_rm7\\OneDrive\\Desktop\\EclipseWorkSpace\\Words\\gutenberg");
		Scanner scan = new Scanner(f);
		
		//get rid of characters
		scan.useDelimiter("[^A-Za-z]+");
		
		while(scan.hasNextLine()) {
			System.out.println(scan.next());
			
		}
	}
}
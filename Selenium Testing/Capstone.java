package Assignment;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Capstone {

	public static void main(String[] args) {
	
//		declaration and instantiation of object/variable
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Downloads\\chromedriver_win32\\chromedriver.exe");					
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        
        String baseUrl = "http://localhost:3000/login";
        driver.get(baseUrl);
        
//      Get the WebElement corresponding to the email address(TextField)
		WebElement email = driver.findElement(By.id("email"));
		
//		Get the WebElement corresponding to the password field
		WebElement password = driver.findElement(By.name("password"));
		
//		Find the submit button
		WebElement login = driver.findElement(By.id("btnLogin"));
		
		
//		Using click method to submit form
		email.sendKeys("ayush@gmail.com");
		password.sendKeys("Ayush123");
		login.click();
		System.out.println("User logged in");
		
//		Logging out the user
		driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/nav/div/div/ul[2]/li/button")).click();
        System.out.println("User logged out");      

//      driver.close();
	}
}

const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
async function runNewUser(){
let driver = await new Builder()
.forBrowser('firefox')
.setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
.build();

try {
    // Navigate to your React app's registration page
    await driver.get('http://localhost:3000/sign-up');

    // Fill in the registration form
    await driver.findElement(By.id('id')).sendKeys('900294791');
    await driver.findElement(By.id('firstName')).sendKeys('Johnny');
    await driver.findElement(By.id('lastName')).sendKeys('Cage');
    await driver.findElement(By.id('email')).sendKeys('jcage@ggc.edu');
    await driver.findElement(By.id('password')).sendKeys('Don8998*()()');

    // Submit the form
    await driver.findElement(By.cssSelector('.container > form:nth-child(1) > div:nth-child(6) > button:nth-child(1)')).click();

    // Wait for the registration to complete (you may need to adjust the sleep time)
    await driver.sleep(60000);

    // Perform any additional checks if needed
    // For example, check if the user is redirected to the homepage after registration
    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.toLowerCase().includes('homepage')) {
      throw new Error('User not redirected to the homepage after registration.');
    }

  } finally {
    // Close the browser window
    await driver.quit();
  }
}

runNewUser().catch(error => console.error(error));


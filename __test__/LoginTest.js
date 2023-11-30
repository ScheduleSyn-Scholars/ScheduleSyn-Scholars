const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

// Example Selenium test
(async function () {
  // Set up the WebDriver for Firefox
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Navigate to your React app
    await driver.get('http://localhost:3000/'); // Replace with your actual app URL


    const isSignUpButtonPresent = await driver.findElement(By.className('sign-up-btn')).isDisplayed();
    if (!isSignUpButtonPresent) {
    throw new Error('Sign Up button not present in the DOM');
    }

    // Find the "Sign Up" button and click it
    await driver.wait(until.elementLocated(By.css(tagName)('form')), 15000);
    const signUpButton = await driver.wait(until.elementLocated(By.className('sign-up-btn')),);
    await signUpButton.click();

    // Wait for the registration page to load (you might need to adjust the selector)
    await driver.wait(until.urlIs('http://localhost:3000/sign-up'), 30000); // Replace with your actual registration page URL

    // Assert that the current URL is the registration page
    const currentUrl = await driver.getCurrentUrl();
    console.assert(currentUrl === 'http://localhost:3000/sign-up', 'Redirection to registration page successfully loaded');
    
    // Optionally, you can perform additional checks on the registration page if needed

    console.log('Test passed!');
  } catch (error) {
    console.error('Test failed!', error);
  } finally {
    // Close the WebDriver
    await driver.quit();
  }
})();


async function runLogin(){
    let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxOptions(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Open your website
    await driver.get('http://localhost:3000/');

    // Find and fill the email and password fields
    await driver.findElement(By.id('email')).sendKeys('fanderson@ggc.edu');
    await driver.findElement(By.id('password')).sendKeys('ZBzRpfBx');

    // Click the login button
    await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/form/div/button')).click();

    // Wait for the login to complete and navigate to the homepage
    await driver.wait(until.urlIs('http://localhost:3000/homepage'), 35000);

    console.log('Test passed!');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}
runLogin();

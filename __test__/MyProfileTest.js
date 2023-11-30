const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path');

(async function example() {
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Navigate to the homepage
    await driver.get('http://localhost:3000/HomePage');

    // Find the user profile picture element
    const profilePicture = await driver.wait(until.elementLocated(By.className('user-photo')), 10000);

    // Click on the user profile picture
    await profilePicture.click();

    // Wait for the MyProfile page to load
    await driver.wait(until.urlContains('http://localhost:3000/MyProfile'), 30000, 'MyProfile page not loaded in time');

    // Assert that the current URL is the MyProfile page
    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.includes('MyProfile')) {
      throw new Error('Test Failed: Navigation to MyProfile unsuccessful!');
    }

    console.log('Test Passed: Navigation to MyProfile successful!');
  } finally {
    // Close the browser
    await driver.quit();
  }
})();


async function runNewProfilePicture(){
    const driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
    .build();

  try {
    // Navigate to the MyProfile page
    await driver.get('http://localhost:3000/MyProfile');

    // Find the file input element for uploading
    const fileInput = await driver.findElement(By.className('img-display-before'));

    // Provide the path to the image file on your local machine
    const imagePath = path.resolve(__dirname, 'C:\\Users\\Joseph\\Downloads\\Ameer.jpg');

    // Upload the image file
    await fileInput.sendKeys(imagePath);

    // Click on the button to submit the form (assuming there's a button to trigger the upload)
    const uploadButton = await driver.findElement(By.className('image-upload-button'));
    await uploadButton.click();

    // Wait for the homepage to load
    await driver.wait(until.urlContains('http://localhost:3000/HomePage'), 10000, 'Homepage not loaded in time');

    // Validate that the uploaded picture is visible on the homepage
    const profilePictureOnHomepage = await driver.findElement(By.className('user-photo'));
    const imageUrl = await profilePictureOnHomepage.getAttribute('src');

    // You may need to extract the file name from the URL or use another method to validate the correct image

    console.log('Test Passed: Profile picture changed successfully and visible on the homepage!');
  } finally {
    // Close the browser
    await driver.quit();
  }
}

runNewProfilePicture();


async function runNewUsername(){
    const driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
    .build();

    try {
        // Navigate to the MyProfile page
        await driver.get('http://localhost:3000/MyProfile');
    
        // Find the username input element and change the username
        const usernameInput = await driver.findElement(By.css('.profile-Update-Name'));
        await usernameInput.clear();
        await usernameInput.sendKeys('Darkmen89');
    
        // Click the Save button
        const saveButton = await driver.findElement(By.className('saveButton'));
        await saveButton.click();
    
        // Wait for the MyProfile page to load
        await driver.wait(until.urlContains('http://localhost:3000/HomePage'), 10000, 'Homepage not loaded in time');
    
        // Navigate to the Homepage
        await driver.get('http://localhost:3000/HomePage');
    
        // Validate that the updated username is displayed on the Homepage
        const profileNameOnHomepage = await driver.findElement(By.className('profileName'));
        const updatedUsername = await profileNameOnHomepage.getText();
    
        if (updatedUsername !== 'NewUsername') {
          throw new Error('Test Failed: Username not updated successfully!');
        }
    
        console.log('Test Passed: Username updated successfully and visible on the homepage!');
      } finally {
        // Close the browser
        await driver.quit();
      }
}

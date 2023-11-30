const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function runNewCalendar(){
    let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Open the application
    await driver.get('http://localhost:3000/HomePage'); 

    // Find and click the "New Calendar" button
    const newCalendarButton = await driver.findElement(By.className('new-calendar-button'));
    await newCalendarButton.click();

    // Wait for the new page to load (you can adjust the timeout as needed)
    await driver.wait(until.urlContains('http://localhost:3000/NewCalendar'), 5000);

    // Verify if the user is on the new calendar page
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('http://localhost:3000/NewCalendar')) {
      console.log('Test passed: User successfully navigated to the New Calendar page.');
    } else {
      console.error('Test failed: User did not navigate to the New Calendar page.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }

}

runNewCalendar();

async function runAddingPeople(){
    let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();


  try {
    // Open the application
    await driver.get('http://localhost:3000/NewCalendar'); // Replace with your actual app URL

    // Find the input field to enter email for adding people
    const inputField = await driver.findElement(By.className('addPeople'));

    // Enter a valid email address
    await inputField.sendKeys('bparker@ggc.edu', Key.RETURN);

    // Wait for the "Person Added!" message to appear
    const addMessageElement = await driver.findElement(By.css('.add-message'));
    await driver.wait(until.elementTextContains(addMessageElement, 'Person Added!'), 5000);

    // Verify if the "Person Added!" message is displayed
    const addMessageText = await addMessageElement.getText();
    if (addMessageText.includes('Person Added!')) {
      console.log('Test passed: Person added successfully to the calendar.');
    } else {
      console.error('Test failed: Person not added to the calendar.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }
}


runAddingPeople();

async function runCreateCalendar(){
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();


  try {
    // Open the application
    await driver.get('http://localhost:3000/NewCalendar'); // Replace with your actual app URL

    // Find the input field for the calendar title
    const titleInput = await driver.findElement(By.id('CalendarTitle'));

    // Enter the calendar title
    await titleInput.sendKeys('My Test Calendar');

    // Add two users
    await addUser(driver, 'fanderson@ggc.edu');
    await addUser(driver, 'cadams@ggc.edu');

    // Click the "Create" button
    const createButton = await driver.findElement(By.className('create-btn'));
    await createButton.click();

    // Wait for the home page to load
    await driver.wait(until.urlIs('http://localhost:3000/HomePage'), 15000);

    // Verify that the calendar button with the specified title exists on the home page
    const calendarButton = await driver.findElement(By.className('mutual-calendar-button'));
    if (calendarButton) {
      console.log('Test passed: Calendar button found on the home page.');
    } else {
      console.error('Test failed: Calendar button not found on the home page.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }

}

async function addUser(driver, email) {
  const addPeopleInput = await driver.findElement(By.className('addPeople'));

  // Enter the user's email
  await addPeopleInput.sendKeys(email, Key.RETURN);

  // Wait for the "Person Added!" message to appear
  const addMessageElement = await driver.findElement(By.className('add-message'));
  await driver.wait(until.elementTextContains(addMessageElement, 'Person Added!'), 5000);
}

runCreateCalendar();

async function runOwnInformationError(){
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Open the application
    await driver.get('http://localhost:3000/NewCalendar'); // Replace with your actual app URL

    // Find the input field for the calendar title
    const titleInput = await driver.findElement(By.id('CalendarTitle'));

    // Enter the calendar title
    await titleInput.sendKeys('Dance recital');

    // Add the logged-in user (expecting an error message)
    await addUserError(driver, 'bparker@ggc.edu');

    // Verify that the error message is displayed
    const errorMessageElement = await driver.findElement(By.css('.error-message'));
    if (errorMessageElement) {
      console.log('Test passed: Error message displayed for adding own information.');
    } else {
      console.error('Test failed: Error message not displayed for adding own information.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

async function addUserError(driver, email){
  const addPeopleInput = await driver.findElement(By.className('addPeople'));

  // Enter the user's email
  await addPeopleInput.sendKeys(email, Key.RETURN);

  // Wait for the error message to appear
  const errorMessageElement = await driver.findElement(By.className('error-message'));
  await driver.wait(until.elementIsVisible(errorMessageElement), 5000);
}

runOwnInformationError();

async function runAddingRepeatError(){
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();

  try {
    // Open the application
    await driver.get('http://localhost:3000/NewCalendar'); // Replace with your actual app URL

    // Find the input field for the calendar title
    const titleInput = await driver.findElement(By.id('CalendarTitle'));

    // Enter the calendar title
    await titleInput.sendKeys('Wrestling tournament');

    // Add a user to the calendar
    await addUser(driver, 'fanderson@ggc.edu');

    // Attempt to add the same user again (expecting an error message)
    await addRepeatUser(driver, 'fanderson@ggc.edu');

    // Verify that the error message is displayed
    const errorMessageElement = await driver.findElement(By.className('error-message'));
    if (errorMessageElement) {
      console.log('Test passed: Error message displayed for adding the same user twice.');
    } else {
      console.error('Test failed: Error message not displayed for adding the same user twice.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

async function addRepeatUser(driver, email){
  const addPeopleInput = await driver.findElement(By.className('addPeople'));

  // Enter the user's email
  await addPeopleInput.sendKeys(email, Key.RETURN);

  // Wait for the error message to appear
  const errorMessageElement = await driver.findElement(By.css('.error-message'));
  await driver.wait(until.elementIsVisible(errorMessageElement), 5000);
}

runAddingRepeatError();

async function runOverTheLimit(){
  let driver = await new Builder()
  .forBrowser('firefox')
  .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
  .build();
  try {
    // Open the application
    await driver.get('http://localhost:3000/NewCalendar'); // Replace with your actual app URL

    // Find the input field for the calendar title
    const titleInput = await driver.findElement(By.id('CalendarTitle'));

    // Enter the calendar title
    await titleInput.sendKeys('Little bit of the bubbly');

    // Add users to the calendar until the limit is reached
    await addUser(driver, 'fanderson@ggc.edu');
    await addUser(driver, 'cadams@ggc.edu');
    await addUser(driver, 'dmitchell@ggc.edu');
    await addUser(driver, 'ewilson@ggc.edu');
    await addUser(drvier, 'gturner@ggc.edu');


    // Attempt to add another user (expecting an error message)
    await addUser(driver, 'ajohnson@ggc.edu');

    // Verify that the error message is displayed
    const errorMessageElement = await driver.findElement(By.className('error-message'));
    if (errorMessageElement) {
      console.log('Test passed: Error message displayed for exceeding the limit of adding people.');
    } else {
      console.error('Test failed: Error message not displayed for exceeding the limit of adding people.');
    }
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

runOverTheLimit();
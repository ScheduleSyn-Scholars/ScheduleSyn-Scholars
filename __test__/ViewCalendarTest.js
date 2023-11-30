const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const firefox = require('selenium-webdriver/firefox');

async function runAvailabiltySelection(){
    let driver = await new Builder()
.forBrowser('firefox')
.setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
.build();

try {
    // Navigate to the calendar view page
    await driver.get('http://localhost:3000/ViewCalendar/wmHHxO3JKvZbkgKcdlAr/Calendar%20Test');

    // Assume you want to set availability on a specific date and time
    const dateInput = await driver.findElement(By.className('day-container'));
    await dateInput.click(); // Update with the date you want to select

    // Assume you want to set availability from 10:00 AM to 12:00 PM
    const startTimeInput = await driver.findElement(By.className('day-lab'));
    await startTimeInput.sendKeys('10:00 AM'); // Update with the start time

    const endTimeInput = await driver.findElement(By.className('time-input'));
    await endTimeInput.sendKeys('12:00 PM'); // Update with the end time

    // Click the "Save" button
    const saveButton = await driver.findElement(By.className('saveButton'));
    await saveButton.click();

    // Wait for the save operation to complete (you might need to adjust the timeout)
    await driver.wait(until.elementLocated(By.className('successMessage')), 5000);

    // Validate that the availability is saved successfully (you might need to adjust the locator)
    const successMessage = await driver.findElement(By.className('successMessage'));
    const successMessageText = await successMessage.getText();
    assert.strictEqual(successMessageText, 'Availability updated successfully!');

    // Add more validation steps if necessary

  } finally {
    // Close the browser window
    await driver.quit();
  }
}

runAvailabiltySelection();


async function runOptimalMeetingTime(){
    let driver = await new Builder()
.forBrowser('firefox')
.setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
.build();

try {
    // Navigate to the calendar view page
    await driver.get('http://localhost:3000/ViewCalendar/wmHHxO3JKvZbkgKcdlAr/Calendar%20Test');

    // Assume availability for team members has been set (previous test case)
    
    // Click the "Show Best Time" button
    const showBestTimeButton = await driver.findElement(By.className('showBestTimeButton'));
    await showBestTimeButton.click();

    // Wait for the best time calculation to complete (you might need to adjust the timeout)
    await driver.wait(until.elementLocated(By.id('bestTimeResult')), 5000);

    // Validate that the suggested best time is displayed
    const bestTimeResult = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[3]/div[3]/p[4]'));
    const bestTimeResultText = await bestTimeResult.getText();
    
    // Assert that the suggested best time is not null or empty
    assert.ok(bestTimeResultText.trim().length > 0, 'Best time result is not empty');

    console.log('Suggested Best Time:', bestTimeResultText);

    // Add more validation steps if necessary

  } finally {
    // Close the browser window
    await driver.quit();
  }
}
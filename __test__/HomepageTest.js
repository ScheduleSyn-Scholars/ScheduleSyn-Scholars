const assert = require('assert');
const { remote } = require('webdriverio');
const assert = require('assert');
const firefox = require('selenium-webdriver/firefox');

describe('NewCalendar Component', () => {
    let browser;

    before(async () => {
        // Assuming your React app is running locally on http://localhost:3000
        browser = await remote({
            capabilities: {
                browserName: 'firefox',
            },
        });
        await browser.url('http://localhost:3000');
    });

    after(async () => {
        await browser.deleteSession();
    });

    it('creates calendar and sends notifications on button click', async () => {
        // Simulate user input
        await browser.setValue('[placeholder="Calendar Title"]', 'Test Calendar');

        // Mocking successful user search (assuming no existing user for simplicity)
        await browser.keys(['bparker@ggc.edu', 'Enter']);

        // Trigger button click to create calendar
        await browser.click('create-btn');

        // Wait for asynchronous operations to complete (e.g., Firestore operations)
        await browser.pause(2000);  // Use waitFor or other strategies for more robust waiting

        // Assertions based on your expected behavior
        const personAddedMessage = await browser.$('=Person Added!');
        assert(await personAddedMessage.isExisting(), 'Person Added! message is not displayed');

        // Check if notifications are sent
        // You may need to wait for notifications to be processed, depending on your application logic
        // Add relevant WebDriverIO code to check for notifications
    });
});

describe('Notification Popup Accept Interaction', function () {
    this.timeout(15000); // Adjust the timeout as needed

    let driver;

    before(async function () {
        driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
        .build();
        await driver.get('http://localhost:3000/homepage');
    });

    after(async function () {
        await driver.quit();
    });

    it('accepts notification in the popup', async function () {
        // Open the notification popup
        await driver.findElement(By.classname('bell')).click();

        // Assuming your notification popup has an "Accept" button
        await driver.findElement(By.classname('Accept-button')).click();

        // Wait for any asynchronous operations to complete
        await driver.wait(until.elementLocated(By.classname('notification-count')), 5000);

        // Check if the notification count has decreased
        const notificationCount = await driver.findElement(By.classname('notification-count')).getText();
        assert.strictEqual(notificationCount, '0');

        // Check if the notification popup is closed
        const isNotificationPopupVisible = await driver.findElement(By.classname('notification-popup')).isDisplayed();
        assert.strictEqual(isNotificationPopupVisible, false);
    });
});

describe('Notification Popup Delete Interaction', function(){
    this.timeout(15000); // Adjust the timeout as needed

    let driver;

    before(async function () {
        driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxService('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe')
        .build();
        // Assuming your React app is running locally on http://localhost:3000
        await driver.get('http://localhost:3000/homepage');
    });

    after(async function () {
        await driver.quit();
    });

    it('declines notification in the popup', async function () {
        // Open the notification popup
        await driver.findElement(By.classname('bell')).click();

        // Assuming your notification popup has a "Decline" button
        await driver.findElement(By.classname('Decline-button')).click();

        // Wait for any asynchronous operations to complete
        await driver.wait(until.elementLocated(By.classname('notification-count')), 10000);

        // Check if the notification count has decreased by one
        const notificationCount = await driver.findElement(By.classname('notification-count')).getText();
        assert.strictEqual(notificationCount, '0');

        // Check if the notification popup is closed
        const isNotificationPopupVisible = await driver.findElement(By.classname('notification-popup')).isDisplayed();
        assert.strictEqual(isNotificationPopupVisible, false);

        // Check if the notification message is no longer visible
        const isNotificationMessageVisible = await driver.findElement(By.classname('notification-entry')).isDisplayed().catch(() => false);
        assert.strictEqual(isNotificationMessageVisible, false);
    });
});





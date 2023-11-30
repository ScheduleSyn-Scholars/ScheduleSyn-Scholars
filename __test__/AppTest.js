const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function AppTest() {
let driver = await new Builder()
.forBrowser('firefox')
.setFirefoxService(new firefox.ServiceBuilder('C:\\Users\\Joseph\\OneDrive\\Documents\\ScheduleSyn Scholars\\ScheduleSyn-Scholars\\geckodriver.exe'))
.build();

  try {
    // Navigate to the login page
    await driver.get('http://localhost:3000');

    // await driver.wait(until.titleIs('http://localhost:3000/'), 10000);

    // const headerElement = await driver.findElement(By.className('header'));
    // if (!(await headerElement.isDisplayed())) {
    //   throw new Error('Header not found');
    // }

    // const footerElement = await driver.findElement(By.className('footer'));
    // if (!(await footerElement.isDisplayed())) {
    //   throw new Error('Footer not found');
    // }

    console.log('Website loaded successfully!');
  } finally {
    await driver.quit();
  }
}

AppTest();

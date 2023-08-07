const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const facebookUsername = "07043468233";
const facebookPassword = "Cxy123*#";

async function automateScenario() {
  const options = new chrome.Options();
  options.addArguments("--disable-notifications"); // Disable notifications to prevent pop-ups
  const driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  try {
    // Login to Facebook
    await driver.get("https://www.facebook.com");
    await driver.findElement(By.name("email")).sendKeys(facebookUsername);
    await driver.findElement(By.name("pass")).sendKeys(facebookPassword, Key.RETURN);





    // Make sure that it directs to facebook home because it is a new account 
    const home = "/html/body/div[1]/div/div[1]/div/div[3]/div[3]/div/div[1]/div/div[1]/div/div/div[1]/div/div/div[1]/span/div/a";
    await driver.wait(until.elementLocated(By.xpath(home)));
    const homepage = await driver.findElement(By.xpath(home));
    await homepage.click();

  
    //this clicks on the "what is on your mind"button
    const popup = "/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[3]/div/div/div[1]/div[1]/div/div[1]/div/div/div/div[3]/div/div[2]/div/div/div/div[1]/div";
    await driver.wait(until.elementLocated(By.xpath(popup)));
   const pop = await driver.findElement(By.xpath(popup));
   await pop.click();
    
    //this types the text "i kill bugs!"
    const post_path = "/html/body/div[1]/div/div[1]/div/div[6]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[2]/div[1]/div[1]/div[1]/div/div/div";
    await driver.wait(until.elementLocated(By.xpath(post_path)));
    await driver.findElement(By.xpath(post_path)).sendKeys("i kill Bugs!", Key.RETURN);

    //this Makes a post "I Kill Bugs!"
    const post_button = "/html/body/div[1]/div/div[1]/div/div[6]/div/div/div[1]/div/div[2]/div/div/div/form/div/div[1]/div/div/div/div[3]/div[2]/div/div";
    await driver.wait(until.elementLocated(By.xpath(post_button)));
    const button = await driver.findElement(By.xpath(post_button));
    await button.click();



    // Go to Google and search "best QA Engineering practices"
    //await driver.get("https://www.google.com");
    //await driver.findElement(By.name("q")).sendKeys("best QA Engineering practices", Key.RETURN);

    //await driver.sleep(1000);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await driver.quit();
  }
}

automateScenario();

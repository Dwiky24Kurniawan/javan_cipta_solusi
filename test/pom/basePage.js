const { Builder } = require("selenium-webdriver")
const driver = new Builder().forBrowser("chrome").build()
driver.manage().setTimeouts({implicit: (100000)})
driver.manage().window().maximize()

class BasePage{
    constructor(){
        global.driver = driver
    }
}

module.exports = BasePage
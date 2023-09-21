const { By, Key, until } = require('selenium-webdriver')
var BasePage = require('./basePage')

class HomePage extends BasePage {

    async navigate(baseURL) {
        await driver.get(baseURL)
    }

    async input_EmailtoSubscribe(EmailtoSubscribe) {
        await driver.findElement(By.css("input[placeholder='Email Address']")).sendKeys(EmailtoSubscribe)
    }

    async click_buttonSubscribe() {
        await driver.findElement(By.css("button[type='submit']")).click()
    }

    async submit_EmailSuccess() {
        await driver.findElement(By.css("#swal2-title")).isDisplayed()
    }
}

module.exports = new HomePage()
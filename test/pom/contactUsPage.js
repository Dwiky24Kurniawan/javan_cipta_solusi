const { By, Key, until } = require('selenium-webdriver')
var BasePage = require('./basePage')

class ContactUsPage extends BasePage {

    async input_fullName(fullName) {
        await driver.findElement(By.css("#in_name")).sendKeys(fullName)
    }

    async input_nickName(nickName) {
        await driver.findElement(By.css("#in_nickname")).sendKeys(nickName)
    }

    async input_email(email) {
        await driver.findElement(By.css("#in_email")).sendKeys(email)
    }

    async input_phone(phone) {
        await driver.findElement(By.css("#in_phone")).sendKeys(phone)
    }

    async input_company(company) {
        await driver.findElement(By.css("#in_institution")).sendKeys(company)
    }

    async select_referal() {
        await driver.findElement(By.css("#in_subject")).click()
        await driver.findElement(By.css("#in_subject > option:nth-child(3)")).click()
    }

    async input_textArea(message) {
        await driver.findElement(By.css("#in_message")).sendKeys(message)
    }

    async recaptcha() {
        // await driver.findElement(By.css("span[role='checkbox']")).click()
        // Store the web element
        const iframe = driver.findElement(By.css("iframe[title='reCAPTCHA']"))

        // Switch to the frame
        await driver.switchTo().frame(iframe);

        // Now we can click the button
        await driver.findElement(By.css("span[role='checkbox']")).click()
    }

    async click_buttonSend() {
        await driver.findElement(By.css(":nth-child(10) > .card-btn-primary")).click()
    }

    async successMessage() {
        await driver.findElement(By.css("#swal2-title")).isDisplayed()
    }
}

module.exports = new ContactUsPage()
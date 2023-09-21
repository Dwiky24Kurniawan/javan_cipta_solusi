const { By, Key, until } = require('selenium-webdriver')
var BasePage = require('./basePage')

class PortfolioPage extends BasePage {

    async select_tahunPembuatan() {
        await driver.findElement(By.css("#portfolio-btn-tahun-pembuatan")).click()
        await driver.findElement(By.css("#portfolio-dropdown-tahun-pembuatan > div > a:nth-child(15)")).click()
    }

    async select_tipeKlien() {
        await driver.findElement(By.css("#portfolio-btn-jenis-sistem")).click()
        await driver.findElement(By.css("#portfolio-dropdown-jenis-sistem > div > a:nth-child(5)")).click()
    }
}

module.exports = new PortfolioPage()
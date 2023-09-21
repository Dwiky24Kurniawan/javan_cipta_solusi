const HomePage = require ('../pom/homePage')
const PortfolioPage = require ('../pom/portfolioPage')

describe("Test Filter Portfolio", function () {
    
    this.timeout(100000)

    it("Test Filter Portfolio", async function () {
        var baseURL = "https://javan.co.id/portfolio"
        await HomePage.navigate(baseURL)
        await PortfolioPage.select_tahunPembuatan("test@test")
        await PortfolioPage.select_tipeKlien()
        await driver.sleep(5000)
        console.log("Jika tidak ada data yang ditambilkan, seharusnya muncul pesan/keterangan yang sesuai")
        await driver.quit()
    })

})
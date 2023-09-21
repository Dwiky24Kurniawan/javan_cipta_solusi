const HomePage = require ('../pom/homePage')

describe("Test Email to Subscribe", function () {
    
    this.timeout(100000)

    it("Test Email to Subscribe with Invalid Email Format", async function () {
        var baseURL = "https://javan.co.id"
        await HomePage.navigate(baseURL)
        await HomePage.input_EmailtoSubscribe("test@test")
        await HomePage.click_buttonSubscribe()
        await HomePage.submit_EmailSuccess()
        console.log("Seharusnya muncul pesar error 'Invalid Email Format. Silakan masukkan email dengan format yang benar'")
        await driver.quit()
    })

})
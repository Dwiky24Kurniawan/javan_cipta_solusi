const HomePage = require ('../pom/homePage')
const ContactUsPage = require ('../pom/contactUsPage')

describe("Test Contact Us Form", function () {
    
    this.timeout(100000)

    it("Test Contact Us Form with Invalid Email Format", async function () {
        var baseURL = "https://javan.co.id/contact"
        await HomePage.navigate(baseURL)
        await ContactUsPage.input_fullName("test")
        await ContactUsPage.input_nickName("test")
        await ContactUsPage.input_email("test@test")
        await ContactUsPage.input_phone("081234567890")
        await ContactUsPage.input_company("test")
        await ContactUsPage.select_referal()
        await ContactUsPage.input_textArea("testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest")
        // await ContactUsPage.recaptcha()
        await ContactUsPage.click_buttonSend()
        await ContactUsPage.successMessage()
        console.log("Seharusnya muncul pesar error 'Invalid Email Format'")
    })

    it("Test Contact Us Form with Invalid Phone Number Format", async function () {
        var baseURL = "https://javan.co.id/contact"
        await HomePage.navigate(baseURL)
        await ContactUsPage.input_fullName("test")
        await ContactUsPage.input_nickName("test")
        await ContactUsPage.input_email("test@test.com")
        await ContactUsPage.input_phone("08123456789xx")
        await ContactUsPage.input_company("test")
        await ContactUsPage.select_referal()
        await ContactUsPage.input_textArea("testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest")
        // await ContactUsPage.recaptcha()
        await ContactUsPage.click_buttonSend()
        await ContactUsPage.successMessage()
        console.log("Seharusnya muncul pesar error 'Invalid Phone Number Format'")
        await driver.quit()
    })

})
import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { LandingPage } from "../pages/loginPage";
import { pageFixture } from "../hooks/pageFixture";

setDefaultTimeout(15000);

Given('The user visits the website', async function() {
    let landingPage = new LandingPage(this.page)
    await landingPage.goToWebsite()
});
When('User goes to the website and enters {string} and {string}', async function(username: string, password: string) {
    let landinPage = new LandingPage(this.page);
    await landinPage.enterCorrectCredentials(username, password);
});
Then('The user is logged in', async function() {
    let landingPage = new LandingPage(this.page);
    await pageFixture.page.waitForTimeout(5000);
    
});

When('User goes to the website and enters wrong {string} and {string}', async function(usernameWrong: string, passwordWord: string) {
    let landingPage = new LandingPage(this.page);
    await landingPage.enterCorrectCredentials(usernameWrong, passwordWord);
    
});

Then('The user is not logged in', async function() {
    let landingPage = new LandingPage(this.page);
    await landingPage.assertUserNotLoggedIn();
    await pageFixture.page.waitForTimeout(5000);
    
});
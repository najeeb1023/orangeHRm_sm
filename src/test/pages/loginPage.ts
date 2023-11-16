import { Page, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";



export class LandingPage {

    landingPageLocators = {
        usernameField:() => this.page.locator("//input[@name='username']"),
        passwordField:() => this.page.locator("//input[@name='password']"),
        loginBtn:() => this.page.locator("//button[@type='submit']"),
        menuList:() => this.page.locator("//ul[@class='oxd-main-menu']"),
        invalidLoginMsg:() => this.page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")

    }
    
    public async goToWebsite():Promise<void>{
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    public async enterCorrectCredentials(username: string, password: string):Promise<void>{
        await this.landingPageLocators.usernameField().type(username);
        await this.landingPageLocators.passwordField().type(password);
        await this.landingPageLocators.loginBtn().click();
    }

    public async assertUserLogin():Promise<void>{
        await expect(this.landingPageLocators.menuList()).toBeVisible();
    }

    public async assertUserNotLoggedIn():Promise<void>{
        await expect(this.landingPageLocators.invalidLoginMsg()).toBeVisible();
    }

    constructor(public page: Page){
        pageFixture.page = page;
    }
}
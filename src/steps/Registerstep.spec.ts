import { Given, When, Then } from '@cucumber/cucumber';
import { _android, chromium, Page } from 'playwright';
const { expect } = require('@playwright/test');

let page: Page;
let browser: any;

Given('the user is on the login page', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://bookcart.azurewebsites.net/login'); 
  });

  When('the user clicks on the Register button',async()=>
{
await page.locator("//span[text()='Register']");

});
Then('the user should navigate to the registration page',async()=>
{
    const userheader=await page.locator("//mat-card-title[text()=' User Registration ']");
    await userheader.waitFor({ state: 'visible', timeout: 5000 });
})
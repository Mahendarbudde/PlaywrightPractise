import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';
const { expect } = require('@playwright/test');

let page: Page;
let browser: any;

Given('I am on the login page', async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://bookcart.azurewebsites.net/login'); 
});

When('I enter a valid username and password', async () => {
  await page.fill('//input[@formcontrolname="username"]', 'ortoni'); 
  await page.fill('//input[@formcontrolname="password"]', 'pass1234$'); 
});

When('I enter an invalid username and password', async () => {
    await page.fill('//input[@formcontrolname="username"]', 'ortoni1'); 
    await page.fill('//input[@formcontrolname="password"]', 'pass1234$');
});

When('I click on the login button', async () => {
  await page.click('//button[@class="mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-primary mat-mdc-button-base"]'); 
});

Then('I should navigate to home page', async () => {

    const bookcart=page.locator("//div[@class='brand-title']");
    await bookcart.waitFor({ state: 'visible', timeout: 5000 });
  const title = await page.title();
  console.log("Title:"+title);
  expect(title).toBe('BookCart');
  /*
  console.log("Title:"+title);
  if (title !== 'BookCart') { 
    throw new Error('Did not navigate to home page');
  }*/
  await browser.close();
});

Then('I should see an error message indicating invalid credentials', async () => {
  const errorLocator = page.locator('#mat-mdc-error-1');
  if (await errorLocator.isVisible()) {
    const errorMessage = await errorLocator.innerText();
    console.log("Error Message:", errorMessage);
} else {
    console.log("Error message element not found.");
}
  await browser.close();
});

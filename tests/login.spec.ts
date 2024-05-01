import { test, expect } from '@playwright/test';
import * as TestData from '../constants';
import { FantasyHomePage } from '../pages/fantasy-home-page';
import { LoginPage } from '../pages/login-page';
import { FantasyBaseballHomePage } from '../pages/fantasy-baseball-home-page';

test('able to log into our fantasy account', async ({ page }) => {
  await page.goto(TestData.BASE_URL);
  const fantasyHomePage = new FantasyHomePage(page)
  await fantasyHomePage.clickLoginButton();
  const loginPage = new LoginPage(page)
  await loginPage.fillEmail(TestData.USERNAME);
  await loginPage.clickContinueBtn();
  await loginPage.fillPassword(TestData.PASSWORD);
  await loginPage.clickLogInButton();
});

test('navigating to the fantasy baseball homepage', async ({ page }) => {
    await page.goto(TestData.BASE_URL);
    const fantasyHomePage = new FantasyHomePage(page)
    await fantasyHomePage.clickLoginButton();
    const loginPage = new LoginPage(page)
    await loginPage.fillEmail(TestData.USERNAME);
    await loginPage.clickContinueBtn();
    await loginPage.fillPassword(TestData.PASSWORD);
    await loginPage.clickLogInButton();
    await fantasyHomePage.clickBaseballTab();
    // need to check the url to contain /fantasy/baseball/
    const fantasyBaseballHomePage = new FantasyBaseballHomePage(page);
    await fantasyBaseballHomePage.selectFantasyTeam('Out for the year');
    await page.pause();
  });
import { Locator, Page } from '@playwright/test';

export class FantasyHomePage {
  private root: Locator;
  private baseballTab: Locator;
  private loginButton: Locator;

  constructor(private readonly page: Page) {
    this.root = this.page.locator('#global-viewport');
    this.loginButton = this.root.getByRole('button', { name: 'Log In' });
    this.baseballTab = this.root.getByRole('link', { name: 'Baseball', exact: true })
  }

  public async clickLoginButton() {
    await this.loginButton.click();
  }

  public async clickBaseballTab() {
    await this.baseballTab.click();
  }
}
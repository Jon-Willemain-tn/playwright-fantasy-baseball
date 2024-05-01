import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private root: Locator;
  private continueBtn: Locator;
  private emailInput: Locator;
  private logInButton: Locator;
  private passwordInput: Locator;

  constructor(private readonly page: Page) {
    this.root = this.page.frameLocator('iframe[name="oneid-iframe"]').locator('.modal-body');
    this.continueBtn = this.root.getByRole('button', { name: 'Continue' });
    this.emailInput = this.root.getByPlaceholder('Email');
    this.logInButton = this.root.getByRole('button', { name: 'Log In' });
    this.passwordInput = this.root.getByPlaceholder('Password');
  }
  
  public async clickContinueBtn() {
    await this.continueBtn.click();
  }

  public async clickLogInButton() {
    await this.logInButton.click();
  }

  public async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  public async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

}
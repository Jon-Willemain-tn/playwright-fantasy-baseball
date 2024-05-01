import { Locator, Page } from '@playwright/test';

export class FantasyBaseballHomePage {
  private fantasyBaseballTeamsLocator: Locator;

  constructor(private readonly page: Page) {
    this.fantasyBaseballTeamsLocator = this.page.locator('#fantasy-feed-items');
  }

  public async selectFantasyTeam(team: string) {
    await this.fantasyBaseballTeamsLocator.locator('.favItem', { hasText: team }).click();
  }
}
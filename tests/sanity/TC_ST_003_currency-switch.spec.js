import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/homepage/homepage-page-object';
import { currencyConfig } from '../../page-config/page-config';


test('Currency Changing Test @sanity @social-links', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step('Opening Special Offers Page', async () => {
        await page.goto('/');
        await homePage.navigateSpecialOffersPage();
    });

    await test.step('Verifying Euro Switch', async () => {
        await homePage.switchCurrencyEuro();
        await expect.soft(page).toHaveURL(currencyConfig.URL_EUR);
    });

    await test.step('Verifying Sterling Pound Switch', async () => {
        await homePage.switchCurrencyPoundSterling();
        await expect.soft(page).toHaveURL(currencyConfig.URL_GBP);
    });

    await test.step('Verifying US Dollar Switch', async () => {
        await homePage.switchCurrencyUSDollar();
        await expect.soft(page).toHaveURL(currencyConfig.URL_USD);
    });

})

import { expect } from '@playwright/test';
import { currencyConfig } from '../../page-config/page-config';
import test from '../../utils/custom-fixtures/page-fixtures';
import logger from '../../utils/winston-logger/logger-util';


test('Currency Changing Test @sanity @social-links', async ({
    homePage,
    specialOfferProductsPage,
}) => {

    await test.step('Opening Special Offers Page', async () => {
        await homePage.openApplication();
        await homePage.navigateSpecialOffersPage();
    });

    await test.step(`Verifying Euro Switch and currency symbol ${currencyConfig.CURRENCY_SYMBOL_EUR}`, async () => {
        await homePage.switchCurrencyEuro();
        await expect.soft(await homePage.page).toHaveURL(currencyConfig.URL_EUR);
        const prices = await specialOfferProductsPage.getAllPrices();
        for(const price of prices) {
            await expect.soft(price).toContainText(currencyConfig.CURRENCY_SYMBOL_EUR).catch((error)=> {
                logger.error(`currency value doesn't contain ${currencyConfig.CURRENCY_SYMBOL_EUR}`);
                logger.error(error);
                throw error});
        };
    });

    await test.step(`Verifying Sterling Pound Switch and currency symbol ${currencyConfig.CURRENCY_SYMBOL_GBP}`, async () => {
        await homePage.switchCurrencyPoundSterling();
        await expect.soft(await homePage.page).toHaveURL(currencyConfig.URL_GBP);
        const prices = await specialOfferProductsPage.getAllPrices();
        for(const price of prices) {
            await expect.soft(price).toContainText(currencyConfig.CURRENCY_SYMBOL_GBP).catch((error)=> {
                logger.error(`currency value doesn't contain ${currencyConfig.CURRENCY_SYMBOL_GBP}`);
                logger.error(error);
                throw error});
        };
    });

    await test.step(`Verifying US Dollar Switch and currency symbol ${currencyConfig.CURRENCY_SYMBOL_USD}`, async () => {
        await homePage.switchCurrencyUSDollar();
        await expect.soft(await homePage.page).toHaveURL(currencyConfig.URL_USD);
        const prices = await specialOfferProductsPage.getAllPrices();
        for(const price of prices) {
            await expect.soft(price).toContainText(currencyConfig.CURRENCY_SYMBOL_USD).catch((error)=> {
                logger.error(`currency value doesn't contain ${currencyConfig.CURRENCY_SYMBOL_USD}`);
                logger.error(error);
                throw error});
        };
    });

})

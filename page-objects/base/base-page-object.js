import { expect } from "@playwright/test";

import {
    currencySwitch,
    currencyEuro,
    currencyPoundSterling,
    currencyUSDollar,
} from '../../pages/base/base-page';

import { currencyConfig } from "../../page-config/page-config";


export class BasePage {

    constructor(page) {
        this.page = page;
    };

    async navigateSpecialOffersPage() {

    }

    async switchCurrencyEuro() {
        await this.page.locator(currencySwitch).hover();
        await this.page.locator(currencyEuro).hover();
        await this.page.locator(currencyEuro).click();
        // await expect(this.page).toHaveURL(currencyConfig.URL_EUR);
    }

    async switchCurrencyPoundSterling() {
        await this.page.locator(currencySwitch).hover();
        await this.page.locator(currencyPoundSterling).hover();
        await this.page.locator(currencyPoundSterling).click();
        // await expect(this.page).toHaveURL(currencyConfig.URL_GBP);
    }

    async switchCurrencyUSDollar() {
        await this.page.locator(currencySwitch).hover();
        await this.page.locator(currencyUSDollar).hover();
        await this.page.locator(currencyUSDollar).click();
        // await expect(this.page).toHaveURL(currencyConfig.URL_USD);
    }

};

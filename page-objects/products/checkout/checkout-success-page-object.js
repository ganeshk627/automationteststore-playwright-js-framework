import { expect } from "@playwright/test";
import { DashboardPage } from "../../dashboard/dashboard-page-object";
import {
    continueButton,
    successHeading,
} from '../../../pages/products/checkout/checkout-success-page';
import {
    checkoutsuccessConfig,
} from '../../../page-config/page-config';


export class CheckoutSuccessPage {

    constructor(page) {
        this.page = page;
        // this.continueButton = page.getByRole('link', { name: 'Continue' });
        // this.successHeading = page.locator('h1.heading1');
    };

    async clickContinueButton() {
        await expect(this.page).toHaveURL(checkoutsuccessConfig.URL);
        await this.page.locator(continueButton).click();
        return new DashboardPage(this.page);
    };

    async validateOrderSuccessMessage() {
        await expect(this.page.locator(successHeading) ).toContainText(checkoutsuccessConfig.ORDER_SUCCESS_MESSAGE);
    }

};

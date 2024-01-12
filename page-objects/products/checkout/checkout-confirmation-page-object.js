import { expect } from "@playwright/test";
import { CheckoutSuccessPage } from "./checkout-success-page-object";
import {
    confirmOrderButton,
    backButton,
} from '../../../pages/products/checkout/checkout-confirmation-page';
import {
    checkoutconfirmationConfig,
    checkoutpaymentConfig,
    checkoutsuccessConfig
} from '../../../page-config/page-config'

export class CheckoutConfirmationPage {

    constructor(page) {
        this.page = page;
        // this.confirmOrderButton = page.getByRole('button', { name: 'Confirm Order' });
        // this.backButton = page.locator('#payment').getByRole('link', { name: 'Back' });
    };

    async clickConfirmOrderButton() {
        await expect(this.page).toHaveURL(checkoutconfirmationConfig.URL);
        await this.page.locator(confirmOrderButton).click();
        await expect(this.page).toHaveURL(checkoutsuccessConfig.URL);
        return new CheckoutSuccessPage(this.page);
    };

    async clickBackButton() {
        await expect(this.page).toHaveURL(checkoutconfirmationConfig.URL);
        await this.page.loator(backButton).click();
        await expect(this.page).toHaveURL(checkoutpaymentConfig.URL);
    }
};

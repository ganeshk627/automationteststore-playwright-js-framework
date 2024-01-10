import { expect } from "@playwright/test";


export class CheckoutPaymentPage {

    // continueButton,
    // backButton,
  

    constructor (page) {
        this.page = page;
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.backButton = page.locator('#payment').getByRole('link', { name: 'Back' });
    };   

    async clickContinueButton() {
        await expect(this.page).toHaveURL(/checkout\/payment/)
        await this.continueButton.click();
    };

    async clickBackButton(){
        await expect(this.page).toHaveURL(/checkout\/payment/)
        await this.backButton.click();
        await expect(this.page).toHaveURL(/checkout\/confirm/)
    }

};

import { expect } from "@playwright/test";
import { DashboardPage } from "../../dashboard/dashboard-page-object";


export class CheckoutSuccessPage {

    // continueButton,
    // successHeading,
    SUCCESS_HEADING_MESSAGE = "Your Order Has Been Processed!" 



    constructor(page) {
        this.page = page;
        this.continueButton = page.getByRole('link', { name: 'Continue' });
        this.successHeading = page.locator('h1.heading1');
    };

    async clickContinueButton() {
        await expect(this.page).toHaveURL(/checkout\/success/);
        await this.continueButton.click();
        return new DashboardPage(this.page);
    };

    async validateOrderSuccessMessage() {
        await expect(this.successHeading).toContainText(this.SUCCESS_HEADING_MESSAGE);
    }

};

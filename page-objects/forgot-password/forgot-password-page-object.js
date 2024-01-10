import { expect } from "@playwright/test";
import logger from "../../utils/winston-logger/logger-util";


export class ForgotPasswordPage {

    // loginName,
    // forgotEmail,
    // backBtn,
    // continueBtn,

    constructor(page) {
        this.page = page;
        this.loginName = page.locator('#forgottenFrm_loginname');
        this.forgotEmail = page.locator('#forgottenFrm_email');
        this.backBtn = page.getByRole('link', { name: ' Back' });
        this.continueBtn = page.getByRole('button', { name: ' Continue' });

    };

    async resetPassword(username, email) {
        await this.loginName.fill(username);
        await expect(this.loginName).toHaveValue(username);
        await this.forgotEmail.fill(email);
        await expect(this.forgotEmail).toHaveValue(email);
        await this.continueBtn.click();
        await expect(this.page.locator('#maincontainer')).toContainText('Success: Password reset link has been sent to your e-mail address.');
        await expect(this.page).toHaveURL(/.*account\/login/);
        logger.info('Reset Password link sent successfully');
    }



};

import { expect } from "@playwright/test";
import logger from '../../utils/winston-logger/logger-util';
import { DashboardPage } from "../dashboard/dashboard-page-object";



export class LoginPage {

    // username,
    // password,
    // loginBtn,
    // forgotPasswordLink,
    // forgotLoginLink,


    constructor(page) {
        this.page = page;
        this.username = page.locator('#loginFrm_loginname');
        this.password = page.locator('#loginFrm_password');
        this.loginBtn = page.getByRole('button', { name: ' Login' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
        this.forgotLoginLink = page.getByRole('link', { name: 'Forgot your login?' });
    };

    async login(username, password) {
        await expect(this.page).toHaveURL(/.*account\/login/);
        await this.username.fill(username);
        await this.password.fill(password);
        await expect(this.password).toHaveValue(password);
        await this.loginBtn.click();
        await expect(this.page).toHaveURL(/.*account\/account/);
        logger.info('Successfully navigated to Dashboard page');
        return new DashboardPage(this.page);
    };

    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.click();
        await expect(this.page).toHaveURL(/.*account\/forgotten\/password/);
        logger.info('Navigated to password reset page');
    }

    async clickForgotLoginLink() {
        await this.forgotLoginLink.click();
        await expect(this.page).toHaveURL(/.*account\/forgotten\/loginname/);
        logger.info('Navigated to password reset page');
    }

    



};

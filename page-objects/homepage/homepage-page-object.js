import {expect} from "@playwright/test";
import logger from "../../utils/winston-logger/logger-util";

import {
    loginOrRegisterLink,
} from '../../pages/homepage/homepage-page'

import { homepageConfig, loginConfig } from "../../page-config/page-config";

export class HomePage {

    constructor (page) {
        this.page = page;
        // this.login_register_link = page.getByRole('link', { name: 'Login or register' });
    };   

    async openLoginOrRegistrationPage(){
        await this.page.locator(loginOrRegisterLink).click();
        await expect(this.page).toHaveURL(loginConfig.URL);
        logger.info('Login page opened');
    }

};

import {expect} from "@playwright/test";
import logger from "../../utils/winston-logger/logger-util";


export class HomePage {

    // login_register_link,
   

    constructor (page) {
        this.page = page;
        this.login_register_link = page.getByRole('link', { name: 'Login or register' });
        
    };   

    async openLoginOrRegistrationPage(){
        await this.login_register_link.click();
        logger.info('clicked registration link');
        // this.page.waitForURL()
        await expect(this.page).toHaveURL(/.*account\/login/);
    }

};

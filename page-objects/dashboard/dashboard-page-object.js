import { expect } from "@playwright/test";
import {
    welcomeMessage,
    addressBookContacts,
    orderHistory,
    downloads,
    transactionHistory
} from '../../pages/dashboard/dashboard-page'

import { dashboardConfig } from "../../page-config/page-config";


export class DashboardPage {

    //constructor
    constructor(page) {
        this.page = page;
        // this.welcomeMessage = page.locator('#customer_menu_top');
        // this.addressBookContacts = page.locator('.dash-tile-ocean .dash-tile-text');
        // this.orderHistory = page.locator('.dash-tile-flower .dash-tile-text');
        // this.downloads = page.locator('.dash-tile-oil .dash-tile-text');
        // this.transactionHistory = page.locator('.dash-tile-balloon .dash-tile-text');
    };

    // methods
    async verifyWelcomeMessage() {
        // await expect(this.page.locator(welcomeMessage)).toContainText('Welcome back', { timeout: 5000 });
        await expect(this.page.locator(welcomeMessage)).toHaveText(dashboardConfig.WELCOME_MESSAGE, { timeout: 5000 });
    }

    async getAddressBookContacts() {
        return await this.page.locator(addressBookContacts).textContent();
    }

};

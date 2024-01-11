import { expect } from "@playwright/test";
import { CheckoutConfirmationPage } from "./checkout/checkout-confirmation-page-object";
import { DashboardPage } from "../dashboard/dashboard-page-object";

import {
    checkoutButton1,
    checkoutButton2,
    continueShoppingButton,
    removeItem,
} from '../../pages/products/product-basket-page';

import {
    productbasketConfig,
    checkoutconfirmationConfig,
} from '../../page-config/page-config';

export class ProductBasketPage {

    constructor(page) {
        this.page = page;
        // this.checkoutButton1 = page.locator('#cart_checkout1');
        // this.checkoutButton2 = page.locator('#cart_checkout2');
        // this.removeItem = page.locator('//a[contains(@href, "remove")]')
        // this.continueShoppingButton = page.getByRole('link', { name: 'Continue Shopping' });
    };

    async applyCouponCode(couponCode) {
        await this.page.locator(couponTextBox).pressSequentially(couponCode);
        await this.page.locator(applyCouponButton).click();
    };

    async clickCheckoutProduct1() {
        await expect(this.page).toHaveURL(productbasketConfig.URL);
        await this.page.locator(checkoutButton1).click();
        await expect(this.page).toHaveURL(checkoutconfirmationConfig.URL);
        return new CheckoutConfirmationPage(this.page);
    }

    async clickCheckoutProduct2() {
        await expect(this.page).toHaveURL(productbasketConfig.URL);
        await this.page.locator(checkoutButton2).click();
        await expect(this.page).toHaveURL(checkoutconfirmationConfig.URL);
        return new CheckoutConfirmationPage(this.page);
    }

    async clickContinueShopping() {
        await expect(this.page).toHaveURL(productbasketConfig.URL);
        await this.page.locator(continueShoppingButton).click();
        return new DashboardPage(this.page);
    }

    async removeFirstItemFromCart(id) {
        await this.page.locator(removeItem.first()).click()
    }










};

import { expect } from "@playwright/test";
import { CheckoutConfirmationPage } from "./checkout/checkout-confirmation-page-object";
import { DashboardPage } from "../dashboard/dashboard-page-object";


export class ProductBasketPage {

    // checkoutButton1,
    // checkoutButton2,
    // continueShoppingButton,
    // removeItem



    constructor(page) {
        this.page = page;
        this.checkoutButton1 = page.locator('#cart_checkout1');
        this.checkoutButton2 = page.locator('#cart_checkout2');
        this.removeItem = page.locator('//a[contains(@href, "remove")]')
        this.continueShoppingButton = page.getByRole('link', { name: 'Continue Shopping' });
    };

    async clickCheckoutProduct1() {
        await expect(this.page).toHaveURL(/checkout\/cart/);
        await this.checkoutButton1.click();
        await expect(this.page).toHaveURL(/checkout\/confirm/);
        return new CheckoutConfirmationPage(this.page);
    }

    async clickCheckoutProduct2() {
        await expect(this.page).toHaveURL(/checkout\/cart/);
        await this.checkoutButton2.click();
        await expect(this.page).toHaveURL(/checkout\/confirm/);
        return new CheckoutConfirmationPage(this.page);
    }

    async clickContinueShopping() {
        await expect(this.page).toHaveURL(/checkout\/cart/);
        await this.continueShoppingButton.click();
        return new DashboardPage(this.page);
    }

    async removeFirstItemFromCart(id) {
        await this.removeItem.first().click()
    }










};

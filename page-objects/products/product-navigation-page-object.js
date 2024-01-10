import { expect } from "@playwright/test";
import { ProductViewPage } from "./product-view-page-object";
import { ProductBasketPage } from "./product-basket-page-object";


export class ProductNavigationPage {

    // sort,
    // listViewButton,
    // gridViewButton,
    // addToCartButton,
    // couponTextBox,
    // applyCouponButton,


    constructor(page) {
        this.page = page;
        this.sort = page.locator('#sort');
        this.listViewButton = page.locator('#list');
        this.gridViewButton = page.locator('#grid');
        this.addToCartButton = page.getByRole('link', { name: 'Add to Cart' });
        this.couponTextBox = page.locator('#coupon_coupon');
        this.applyCouponButton = page.getByRole('button', { name: 'Apply Coupon' });
    };

    async switchToProduct(productCategory, productType) {
        await this.page.locator('#categorymenu').getByRole('link', { name: productCategory }).click();
        await expect(this.page).toHaveTitle(productCategory);
        if (productType && productCategory === 'Makeup' && ['Cheeks', 'Eyes', 'Face', 'Lips', 'Nails', 'Value Sets'].includes(productType)) {
            await this.page.locator('#maincontainer li').getByRole('link', { name: productType }).click();
            await expect(this.page).toHaveTitle(productType);
        }

        /*        
         Need to do conditions for 'Apparel & accessories', 'Skincare', 'Fragrance', 'Men', 'Hair Care', 'Books'
         */

        await expect(this.page).toHaveURL(/product\/category/);
    };

    async addProductToCart(productName) {
        await this.page.getByRole('link', { name: productName }).click();
        const productBasketPage = await new ProductViewPage(this.page).addProductToCart(productName);
        return productBasketPage;
    };

    async buyProduct(productName) {
        const productBasketPage = await this.addProductToCart(productName);
        const checkoutConfirmationPage = await productBasketPage.clickCheckoutProduct1();
        const checkoutSuccessPage = await checkoutConfirmationPage.clickConfirmOrderButton();
        await checkoutSuccessPage.validateOrderSuccessMessage();
        await checkoutSuccessPage.clickContinueButton();

    }

    async applyCouponCode(couponCode) {
        await this.couponTextBox.pressSequentially(couponCode);
        await this.applyCouponButton.click();
    };

    async toggleProductView(view) {
        view === 'list' ? await this.listViewButton.click() : await this.gridViewButton.click();
    };






};

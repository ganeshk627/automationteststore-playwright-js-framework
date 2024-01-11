import { expect } from "@playwright/test";
import { ProductBasketPage } from "./product-basket-page-object";
import {
    addToCartButton,
    productNameHeader,
} from '../../pages/products/product-view-page';

export class ProductViewPage {

    //constructor
    constructor(page) {
        this.page = page;
        // this.addToCartButton = page.getByRole('link', { name: 'Add to Cart' });
    };

    // methods
    async addProductToCart(productName) {
        await expect(this.page.locator(productNameHeader)).toContainText(productName);
        await this.page.locator(addToCartButton).click();
        return new ProductBasketPage(this.page);
    };




};

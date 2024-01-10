import { expect } from "@playwright/test";
import { ProductBasketPage } from "./product-basket-page-object";


export class ProductViewPage {

    // addToCartButton,



    //constructor
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.getByRole('link', { name: 'Add to Cart' });
    };

    // methods
    async addProductToCart(productName) {
        await expect(this.page.locator('h1.productname')).toContainText(productName);
        await this.addToCartButton.click();
        return new ProductBasketPage(this.page);
    };




};

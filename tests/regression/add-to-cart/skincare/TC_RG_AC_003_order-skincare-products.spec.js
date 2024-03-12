import { test } from '@playwright/test';
import { HomePage } from "../../../../page-objects/homepage/homepage-page-object";
import { LoginPage } from "../../../../page-objects/login/login-page-object";
import logger from '../../../../utils/winston-logger/logger-util';
import { DashboardPage } from '../../../../page-objects/dashboard/dashboard-page-object';
import { ProductNavigationPage } from '../../../../page-objects/products/product-navigation-page-object';
import { ProductBasketPage } from '../../../../page-objects/products/product-basket-page-object';
import { readJsonData } from '../../../../utils/json-util/json-util';


const TEST_DATA = 'test-data/json/products/skincare-products.json';
const rows = readJsonData(TEST_DATA)

test.describe.serial(`Adding Multiple Skincare Products`, async () => {

    for (let index in rows) {
        const productCategory = rows[index].productCategory;
        const productType = rows[index].productType;
        const productNames = rows[index].productNames;

        test(`Add Multiple ${productCategory} Products ${Number(index) + 1} @regression @ddt`, async ({ page }) => {
            const homePage = new HomePage(page);
            const loginPage = new LoginPage(page);
            const dashboardPage = new DashboardPage(page);
            const productNavigationPage = new ProductNavigationPage(page);
            const productBasketPage = new ProductBasketPage(page);

            await test.step('Login as Default Login', async () => {
                await page.goto('/');
                logger.info(`Navigated to ${await page.url()}`);
                await homePage.openLoginOrRegistrationPage();
                await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
                logger.info('Entered username and password');
                dashboardPage.verifyWelcomeMessage();
            });

            for (let index in productNames) {
                const productName = productNames[index];
                await test.step('Navigating to Makeup products page', async () => {
                    await productNavigationPage.switchToProduct(productCategory, productType)
                    await productNavigationPage.toggleProductView('grid');
                });

                await test.step(`Adding '${productName}' to the cart`, async () => {
                    await productNavigationPage.addProductToCart(productName);
                });
            }

            await test.step(`Checkout and buy makeup products`, async () => {
                const checkoutConfirmationPage = await productBasketPage.clickCheckoutProduct1();
                const checkoutSuccessPage = await checkoutConfirmationPage.clickConfirmOrderButton();
                await checkoutSuccessPage.validateOrderSuccessMessage();
                await checkoutSuccessPage.clickContinueButton();
            })

        })

    };
});
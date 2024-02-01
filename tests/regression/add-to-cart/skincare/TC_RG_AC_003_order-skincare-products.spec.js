import logger from '../../../../utils/winston-logger/logger-util';
import { readJsonData } from '../../../../utils/json-util/json-util';
import test from '../../../../utils/custom-fixtures/page-fixtures';


const TEST_DATA = 'test-data/json/products/skincare-products.json';
const rows = readJsonData(TEST_DATA)


for (let index in rows) {
    const productCategory = rows[index].productCategory;
    const productType = rows[index].productType;
    const productNames = rows[index].productNames;

    test(`Add Multiple ${productCategory} Products ${Number(index) + 1} @regression @ddt`, async ({
        homePage,
        loginPage,
        dashboardPage,
        productNavigationPage,
        productBasketPage,
}) => {

        await test.step('Login as Default Login', async () => {
            await homePage.openApplication();
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
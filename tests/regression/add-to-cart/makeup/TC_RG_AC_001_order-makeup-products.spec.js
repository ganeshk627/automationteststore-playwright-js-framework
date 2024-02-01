import logger from '../../../../utils/winston-logger/logger-util';
import test from '../../../../utils/custom-fixtures/page-fixtures';

const productCategory = 'Makeup';
const productType = 'Face';
const productName = 'Delicate Oil-Free Powder Blush';

test('Checkout Makeup Products @regression', async ({
    homePage,
    loginPage,
    dashboardPage,
    productNavigationPage,
    productBasketPage
}) => {

    await test.step('Login as Default Login', async () => {
        await homePage.openApplication();
        await homePage.openLoginOrRegistrationPage();
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        logger.info('Entered username and password');
        dashboardPage.verifyWelcomeMessage();
    });

    await test.step('Navigating to Makeup products page', async () => {
        // await productNavigationPage.switchToProduct('Makeup');
        await productNavigationPage.switchToProduct(productCategory, productType)
        await productNavigationPage.toggleProductView('grid');
    });

    await test.step(`Adding ${productName} to cart`, async () => {
        await productNavigationPage.addProductToCart(productName);
    });

    await test.step(`Checkout and buy makeup products`, async () => {
        const checkoutConfirmationPage = await productBasketPage.clickCheckoutProduct1();
        const checkoutSuccessPage = await checkoutConfirmationPage.clickConfirmOrderButton();
        await checkoutSuccessPage.validateOrderSuccessMessage();
        await checkoutSuccessPage.clickContinueButton();
    })

});
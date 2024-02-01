import logger from '../../utils/winston-logger/logger-util';
import test from '../../utils/custom-fixtures/page-fixtures';


const productCategory = 'Makeup';
const productType = 'Face';
const productName = 'Delicate Oil-Free Powder Blush';

test('Login Test @smoke', async ({
    homePage,
    loginPage,
    dashboardPage,
    productNavigationPage,
}) => {

    await test.step('Login as Default Login', async () => {
        await homePage.openApplication();
        await homePage.openLoginOrRegistrationPage();
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        logger.info('Entered username and password');
        dashboardPage.verifyWelcomeMessage();
    });

    await test.step('Navigating to Makeup products page', async () => {
        // await productNavigationPage.switchToProduct(productCategory);
        await productNavigationPage.switchToProduct(productCategory, productType)
        await productNavigationPage.toggleProductView('grid');
    });

    await test.step(`Adding ${productName} to cart`, async () => {
        await productNavigationPage.addProductToCart(productName);
    });

})
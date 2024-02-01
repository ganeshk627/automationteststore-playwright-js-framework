// @ts-check
import { expect } from '@playwright/test';
import logger from '../../utils/winston-logger/logger-util';
import test from '../../utils/custom-fixtures/page-fixtures';



test('Login Test @smoke', async ({
    homePage,
    loginPage,
}) => {

    await test.step('Opening Login Page', async () => {
        await homePage.openApplication();
        await homePage.openLoginOrRegistrationPage();
    });

    await test.step('Enter username and password', async () => {
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        logger.info('Entered username and password');

    });

    await test.step('Validate dashboard', async () => {
        await expect(loginPage.page).toHaveURL(/.*account\/account/).catch((error) => { logger.error(error); throw error });
        // await expect(page).toHaveURL('*/dashboard/').catch((error)=> {logger.error(error); throw error});
        logger.info('Successfully navigated to Dashboard page');
    });

})

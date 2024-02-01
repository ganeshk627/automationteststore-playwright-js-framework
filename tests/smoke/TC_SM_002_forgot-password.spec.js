import test from '../../utils/custom-fixtures/page-fixtures';


test('Forgot Password @smoke', async ({
    homePage,
    loginPage,
    forgotPasswordPage,
}) => {

    await test.step('Open application', async () => {
        await homePage.openApplication();
        await homePage.openLoginOrRegistrationPage();
    });

    await test.step('Click Forgot password link and Reset password', async () => {
        await loginPage.clickForgotPasswordLink();
        // await forgotPasswordPage.resetPassword(process.env.USERNAME, process.env.EMAIL);
    });

});

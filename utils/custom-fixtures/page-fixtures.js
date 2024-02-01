import { test as fixture } from '@playwright/test';
import { DashboardPage } from '../../page-objects/dashboard/dashboard-page-object';
import { ForgotPasswordPage } from '../../page-objects/forgot-password/forgot-password-page-object';
import { HeaderFooterPage } from '../../page-objects/header-footer/header-footer-page-object';
import { FacebookPage } from '../../page-objects/homepage/social-links/facebook-page-object';
import { LinkedinPage } from '../../page-objects/homepage/social-links/linkedin-page-object';
import { TwitterPage } from '../../page-objects/homepage/social-links/twitter-page-object';
import { HomePage } from '../../page-objects/homepage/homepage-page-object';
import { LoginPage } from '../../page-objects/login/login-page-object';
import { CheckoutConfirmationPage } from '../../page-objects/products/checkout/checkout-confirmation-page-object';
import { CheckoutPaymentPage } from '../../page-objects/products/checkout/checkout-payment-page-object';
import { CheckoutSuccessPage } from '../../page-objects/products/checkout/checkout-success-page-object';
import { ProductBasketPage } from '../../page-objects/products/product-basket-page-object';
import { ProductNavigationPage } from '../../page-objects/products/product-navigation-page-object';
import { ProductViewPage } from '../../page-objects/products/product-view-page-object';
import { SpecialOfferProductsPage } from '../../page-objects/products/special-offer-products-page-object';


const test = fixture.extend({
	dashboardPage: async ({ page }, use) => {
		await use(new DashboardPage(page))
	},
	forgotPasswordPage: async ({ page }, use) => {
		await use(new ForgotPasswordPage(page))
	},
	headerFooterPage: async ({ page }, use) => {
		await use(new HeaderFooterPage(page))
	},
	facebookPage: async ({ page }, use) => {
		await use(new FacebookPage(page))
	},
	linkedinPage: async ({ page }, use) => {
		await use(new LinkedinPage(page))
	},
	twitterPage: async ({ page }, use) => {
		await use(new TwitterPage(page))
	},
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	},
    loginPage: async ({ page }, use) => {
		await use(new LoginPage(page))
	},
    checkoutConfirmationPage: async ({ page }, use) => {
		await use(new CheckoutConfirmationPage(page))
	},
    checkoutPaymentPage: async ({ page }, use) => {
		await use(new CheckoutPaymentPage(page))
	},
    checkoutSuccessPage: async ({ page }, use) => {
		await use(new CheckoutSuccessPage(page))
	},
    productBasketPage: async ({ page }, use) => {
		await use(new ProductBasketPage(page))
	},
    productNavigationPage: async ({ page }, use) => {
		await use(new ProductNavigationPage(page))
	},
    productViewPage: async ({ page }, use) => {
		await use(new ProductViewPage(page))
	},
    specialOfferProductsPage: async ({ page }, use) => {
		await use(new SpecialOfferProductsPage(page))
	},
})
export default test

const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        browser.pause(5000);
        LoginPage.login('manuelchinchilla@prueba.com','manuelChinchilla123');
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getNoArticlesLabel()).toBeDisplayed();
        //expect(DashboardPage.getYourFeedTab()).toBeFocused();
        expect(DashboardPage.getYourFeedTab()).toHaveAttribute('class','nav-link active');
    });

    it('should open Global Feed tab', () => {
        DashboardPage.getGlobalFeedTab().click();
        browser.pause(5000);
        //console.log(DashboardPage.getArticlesList().lenght);
        //expect(DashboardPage.getGlobalFeedTab()).toHaveAttribute('class','nav-link active');
        expect(DashboardPage.getGlobalFeedTab()).toHaveClass('class',{ message: 'Not active tab!'});
        expect(DashboardPage.getGlobalFeedTab()).not.toHaveProperty('height','24px');
        //aqui valida que el tamaño de la lista sea igual a 10
        expect(DashboardPage.getArticlesList()).toBeElementsArrayOfSize({ eq: 10});
    });
})

const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const waits = require('../helpers/waits');
const articleDetailPage = require('../pageobjects/articleDetail.page');

const user = require('../data/users');

describe('My Login application', () => {

    before(()=> {
        browser.url('https://demo.realworld.io/');
    })

    /*beforeEach(()=> {
        console.log('Before each');
    })

    after(()=> {
        console.log('After');
    })

    afterEach(()=> {
        console.log('After each');
    })*/

    
    it('should login with valid credentials', () => {
        browser.setTimeout({'pageLoad': 10000});
        NavigationPage.goToSignIn();
        console.log('username: '+user.email+'++password: '+user.password);
        LoginPage.login(user.email,user.password);
        //LoginPage.login('manuelchinchilla@prueba.com','manuelChinchilla123');
        browser.setTimeout({'implicit': 10000});
        expect(browser).toHaveUrl('https://demo.realworld.io/#/');
        expect(DashboardPage.getYourFeedTab()).toHaveAttribute('class','nav-link active');
    });

    it('should open Global Feed tab', () => {
        DashboardPage.getGlobalFeedTab().click();
        browser.setTimeout({'implicit': 10000});
        expect(DashboardPage.getGlobalFeedTab()).toHaveClassContaining('active',{ message: 'Not active tab!'});
        expect(DashboardPage.getYourFeedTab()).toBeClickable();
    });

    it('should open read more', () => {
        DashboardPage.getReadMoreAnchor().click();
    });

    it('should add a descripcion', () => {
        browser.setTimeout({'implicit': 10000});
        articleDetailPage.getDescriptionTextBox().sendKeys('Hola');
    });

})

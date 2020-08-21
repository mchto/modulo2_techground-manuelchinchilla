const Page = require("../pageobjects/page");

class waits extends Page{
    
    //espera implicita
    esperaElementoMostradoEnViewport(element){
        browser.waitUntil(
            () => element.isDisplayedInViewport(),
            {
                timeout: 10000,
                timeoutMsg: 'El elemento ' + element + ' no pudo ser encontrado en el tiempo definido'
            }
        )
    }
}

module.exports = new waits();
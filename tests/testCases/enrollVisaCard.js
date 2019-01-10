var utils = require('../../pages/utils');

module.exports = {
    '@tags': ['enrollVisaCard'],
    before: function (browser) {
        utils(browser).openBrowser();
    },
    'Add a Visa Credit Card': function (browser) {
        utils(browser).enrollVisaCard();
        browser.pause(20000);
    },
    after: function(browser) {
        browser.pause(5000);
        browser.end();
    }
};
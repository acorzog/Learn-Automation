var utils2 = require('../../../pages/utils2');

module.exports = {
  '@tags': ['shopNow'],
  before: function (browser) {
    utils2(browser).openBrowser();
  },
  'Shop Now a Best Seller': function (browser) {
    utils2(browser).shopNowButton();
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

var utils2 = require('../../../pages/utils2');

module.exports = {
  '@tags': ['addToCart'],
  before: function (browser) {
    utils2(browser).openBrowser();
  },
  'Add a feature product to cart': function (browser) {
    utils2(browser).featureProductAddToCart();
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

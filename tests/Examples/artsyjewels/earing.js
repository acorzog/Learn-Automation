var utils2 = require('../../../pages/utils');

module.exports = {
  '@tags': ['Earings'],
  before: function (browser) {
    utils2(browser).openBrowser();
  },
  'Shop for Pearl Earings': function (browser) {
    utils2(browser).shopPearlEarings();
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

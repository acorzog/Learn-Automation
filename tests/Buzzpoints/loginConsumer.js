var utils = require('../../pages/utils');

module.exports = {
  '@tags': ['loginConsumer'],
  before: function (browser) {
    utils2(browser).openBrowser();
  },
  'Go to the login page': function (browser) {
    utils2(browser).loginMainButton();
  },
  'login as admin': function (browser) {
    utils2(browser).adminLogin();
    browser.pause(2000);
  },
  after: function (browser) {
    browser.pause(5000);
    browser.end();
  }
};

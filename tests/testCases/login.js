var utils2 = require('../../pages/utils2');

module.exports = {
  '@tags': ['login2'],
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
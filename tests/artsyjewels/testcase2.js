module.exports = {
    'Search functionality should be working' : function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .click('#AccessibleNav > li:nth-child(12) > a > span > span.icon.icon-search')
          .waitForElementVisible('#SearchModal', 2000)
          .setValue('#SearchModal > form > input', ['silver bracelets', browser.Keys.ENTER])
          .pause(2000);
        browser.saveScreenshot('./reports/testcase2.jpg')
          .end();

    }
};
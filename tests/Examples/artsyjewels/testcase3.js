module.exports = {
    tags: ['testcase3'],
    'Login page for an existing user' : function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .click('#AccessibleNav > li.site-nav__item.site-nav__expanded-item.site-nav__item--compressed > a > span > span.icon.icon-customer')
          .waitForElementVisible('#PageContainer > main > div > div > div', 2000)
          .setValue('#CustomerEmail', 'ronchoqa@gmail.com')
          .setValue('#CustomerPassword','')
          .click('#customer_login > p:nth-child(7) > input')
          .pause(2000)
          .end();

    }
};
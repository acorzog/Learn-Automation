module.exports = function (browser) {
    this.openBrowser = function () {
      browser
        .windowMaximize()
        .url('http://artsyjewels.com/')
        .waitForElementVisible('body', 1000);
      return browser;
    };

    this.loginMainButton = function () {
        browser
        .click('#AccessibleNav > li.site-nav__item.site-nav__expanded-item.site-nav__item--compressed > a > span > span.icon.icon-customer')
        .waitForElementVisible('body', 1000);
      };
        
      this.adminLogin = function () {
        browser
       .setValue('#CustomerEmail', 'admin@admin.com')
       .setValue('#CustomerPassword', '')
       .click('#customer_login > p:nth-child(7) > input');
      };

    this.closeBrowser = function(){
        browser
        .pause(3000)
        .end();
    };
    return this;
};

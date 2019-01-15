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

      this.featureProductAddToCart = function () {
        browser
        .click('#shopify-section-1538528346779 > div > div > div:nth-child(2) > a[href="/collections/top-rings"]')
        .click('#CollectionSection > div > div.collection-matrix > div:nth-child(1) > div > a[href="/collections/top-rings/products/antique-design-engagement-diamond-ring-crafted-ring-in-solid-gold-1-carat-halo"]')
        .waitForElementVisible('#ProductImageWrapper-26948444365', 2000)
        .click('#AddToCart--product-template')
        .waitForElementVisible('#CartDrawer',2000);
      };

      this.shopNowButton = function () {
        browser
        .click('#Hero > div > div > div > div > div > div > a')
        .waitForElementVisible('body', 1000)
        .assert.containsText('#CollectionSection > header > h1', '2018 Black Friday Jewelry Sale');
      };

      this.shopPearlEarings = function () {
        browser
        .click('#shopify-section-header > div > div.header-container.drawer__header-container > div > header > div > div > div.grid__item.large--one-sixth.one-quarter > div > button')
        .waitForElementVisible('#NavDrawer > div', 1000);
        
      };



    this.closeBrowser = function(){
        browser
        .pause(3000)
        .end();
    };
    return this;
};

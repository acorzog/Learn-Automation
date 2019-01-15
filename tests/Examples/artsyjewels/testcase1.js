module.exports = {
    tags: ['testcase1'],
    'Open Homepage and click on headers': function (browser) {
        browser
          .url('http://www.artsyjewels.com')
          .waitForElementVisible('body', 1000)
          .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
          .click('#shopify-section-header > div > div.header-container.drawer__header-container > div > header > div > div > div.grid__item.large--one-sixth.one-quarter > div > button')
          .waitForElementVisible('#NavDrawer > div', 2000)
          .click('#Label-2')
          .waitForElementVisible('#CollectionSection > header > h1', 2000)
          .waitForElementVisible('#CollectionSection > div > div.collection-matrix', 2000)
          .pause(3000)
          .end();
      }
  };
  
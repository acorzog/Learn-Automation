module.exports = {
    '@tags': ['clicks'],
    'go to click click ': function (client) {
      client
        .url('https://clickclickclick.click')
        .waitForElementVisible('body', 5000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(5000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(5000);
      console.log('Hello World Click!');
    },
  
    'Browser quit': function (client) {
      client
        .pause(5000)
        .end();
    }
  };
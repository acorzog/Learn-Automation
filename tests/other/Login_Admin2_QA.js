module.exports = {
  '@tags': ['2'],
  'Log in Admin2 QA BP' : function (client) {
    client
      .url('https://qa.buzzpoints.com/admin2/')
      .waitForElementVisible('img[alt="Buzz Points Admin Portal"]', 2000)
      .assert.title('Buzz Points Portal')
      .pause(1000)
      .assert.visible('#loginForm')
      .pause(1000)
      .setValue('input[name="principal"]', 'cmoisa@buzzpoints.com')
      .pause(1000)
      .setValue('input[name="password"]', 'cmbuzz123')
      .click('#signin')
      .pause(3000)
      .waitForElementVisible('#contentArea[id=contentArea]', 3000)
      .pause(3000)
      .end();
  }
};

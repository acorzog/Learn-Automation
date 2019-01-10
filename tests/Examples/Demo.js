module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Andrea Corzo')
      .waitForElementVisible('input[name=btnK]', 2000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('div#rso h3:first-child', 'Andrea Corzo')
      .end();
  }
};

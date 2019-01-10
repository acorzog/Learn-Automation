module.exports = {
'@tags': ['1'],
  'Test Log in QA BP' : function (client) {
    client
      .url('https://qa.buzzpoints.com/buzzfi2/login.html')
      .waitForElementVisible('img[alt="buzzfi2 Logo"]', 2000)
      .assert.title('Buzz Points | Buy Local, Get Rewards!')
      .assert.visible('div[class="pane login"')
      .assert.containsText('#paneStack > div.pane.login > label:nth-child(2)', 'Email Address')
      .setValue('input[name="email"]', 'ac9011@mailinator.com')
      .pause(1000)
      .assert.containsText('#paneStack > div.pane.login > label:nth-child(4)', 'Password')
      .setValue('input[name="password"]', 'Passw0rd')
      .submit('button[id="submitLogin"]')
      .pause(10000)
      //.waitForElementVisible('div#visa-overlay.modal.fade.in[id=visa-overlay]', 3000)
      .pause(3000)
      .end();
  }
};

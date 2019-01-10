emailRandom = require('../../Data/Signupdata.js');

module.exports = {

  'Sign Up QA BP' : function (client) {
    client
      .url('https://qa.buzzpoints.com/buzzfi2/login.html')
      .waitForElementVisible('img[alt="buzzfi2 Logo"]', 2000)
      .assert.title('Buzz Points | Buy Local, Get Rewards!')
      .assert.visible('div[class="pane login"')
      .click('a[id="buttonSignup"]')
      .pause(2000)
      .waitForElementVisible('#paneStack > div.pane.signup')
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(3) > input[name="name"]', 'testuser12241')
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(4) > input[name="account"]', '201812241001')
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(6) > input[name="ssn"]', '1001')
      .waitForElementVisible('#paneStack > div.pane.signup > form > div:nth-child(8) > input[name="email"]')
      .pause(5000)
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(8) > input[name="email"]', emailRandom)
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(9) > input[name="password"]', 'Passw0rd')
      .setValue('#paneStack > div.pane.signup > form > div:nth-child(10) > input[name="password_confirm"]', 'Passw0rd')
      .pause(1000)
      .click('#paneStack > div.pane.signup > form > div:nth-child(11) > div > input[type="checkbox"]')
      .click('button[id="submitSignup"]')
      .pause(7000)
      .waitForElementVisible('div#visa-overlay.modal.fade.in[id=visa-overlay]', 3000)
      .pause(3000)
      .end();
  }
};

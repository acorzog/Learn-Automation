module.exports = {
    tags: ['loginCorporate'],
    'Log in Corporate QA BP' : function (client) {
      client
        .url('https://wwwqa.buzzpoints.com/')
        .waitForElementVisible('#app > div > div.header > div.ui.secondary.top.fixed.menu', 2000)
        .assert.title('Buzz Points')
        .pause(1000)
        .assert.visible('#app > div > div.header > div.ui.secondary.top.fixed.menu > div.right.menu > a:nth-child(3)')
        .click('#app > div > div.header > div.ui.secondary.top.fixed.menu > div.right.menu > a:nth-child(3)')
        .pause(10000)
        .assert.visible('#app > div > article > div')
        .setValue('#loginForm > div:nth-child(1) > div > input[name="principal"]', 'ac9011@mailinator.com')
        /*.setValue('#loginForm > div:nth-child(2) > div > input[name="password"]', 'Passw0rd')
        .click('#loginForm > div.login-buttons > button > span[class="cta primary"]')
        .pause(3000)
        .waitForElementVisible('#body[class="summary sledgehammer"]', 3000)
        .pause(3000)
        */.end();
    }
  };
  
module.exports =  function (browser) {
    this.openBrowser = function () {
        browser
          .url('staging.buzzpoints.com/buzzfi2/login.html')
          .waitForElementVisible('img[alt="buzzfi2 Logo"]', 2000)
          .assert.title('Buzz Points | Buy Local, Get Rewards!')
          .assert.visible('div[class="pane login"');
        return browser;
    };
    this.loginConsumerPortal = function () {
        browser
        .assert.containsText('#paneStack > div.pane.login > label:nth-child(2)', 'Email Address')
        .setValue('#paneStack > div.pane.login > input[type="email"]:nth-child(3)', 'ac9011@mailinator.com')
        .pause(1000)
        .assert.containsText('#paneStack > div.pane.login > label:nth-child(4)', 'Password')
        .setValue('#paneStack > div.pane.login > input[type="password"]:nth-child(5)', 'Passw0rd')
        .submit('button[id="submitLogin"]')
        .pause(1000);
    };
    this.enrollVisaCard = function (){
        browser
        .waitForElementVisible('div#visa-overlay.modal.fade.in[id=visa-overlay]', 3000)
        .click('#visa-content > div > div.modal-footer.col-md-12 > button.btn.btn-primary.cl-modal-button-ok')
        .click('#cardlink-info > div.modal-dialog.modal-lg > div > div.modal-footer > button')
        .setValue('#cardnum', '4916523996738692')
        .waitForElementVisible('#cadnum[class=form-control visa valid]', 500)
        .setValue('#expmonth', '05')
        .setValue('#expyear', '2020')
        .setValue('#nameoncard', 'Buzz Points INC')
        .setValue('#cardccv2', '025')
        .setValue('#billingzip', '11125')
        .click('#cardcondaccept')
        .click('#card-datasubmit')
        .waitForElementVisible('#visaEnrolledSidebar > div > div.left > img[src=img/assets/assets_visa_enrollment/visa_logo.png]', 2000);
    };
    return this;
};

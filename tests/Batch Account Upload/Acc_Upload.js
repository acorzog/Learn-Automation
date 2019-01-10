module.exports = {
  'Log in Admin2 QA BP' : function (client) {
    client
      .url('https://qa.buzzpoints.com/admin2/')
      .waitForElementVisible('img[alt="Buzz Points Admin Portal"]', 2000)
      .setValue('input[name="principal"]', 'cmoisa@buzzpoints.com')
      .setValue('input[name="password"]', 'cmbuzz123')
      .click('#signin')
      .pause(3000)
      .waitForElementVisible('#contentArea[id=contentArea]', 3000)
      .pause(1000)
      .click('#module_btn_upload_fi_account_batch')
      .waitForElementVisible('#module_btn_upload_fi_account_batch', 1000)
      .waitForElementVisible('#upload_fi_account_batch > div > div > div:nth-child(1) > label[for=fiid]', 3000)
      .setValue('input[name="fiid"]', 'buzzfi2')
      .waitForElementVisible('#upload_fi_account_batch > div > div > div:nth-child(2) > label[for=description]', 3000)
      .setValue('input[name="description"]', 'test')
      .pause(1000)
      .setValue('#ajaxUploadArea_upload_fi_account_batch > div > div.qq-upload-button > input[type="file"]', 'C:/Users/acorzo/Documents/Automation/Nightwatch/LearnAut/tests/' + 'accounts.json')
      .pause(3000)
      .end();
  }
};

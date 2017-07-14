module.exports = {
  'Demo test Google': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', 'cat memes')
      .waitForElementVisible('button[name=btnG]', 5000)
      .click('button[name=btnG]')
      .pause(5000)
      .assert.containsText('#main', 'You Can Haz Memes')
      .end();
  }
};

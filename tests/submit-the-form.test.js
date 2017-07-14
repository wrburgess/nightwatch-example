module.exports = {
  'Submit the form': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .setValue('#first-name', 'John')
      .pause(2000)
      .setValue('#last-name', 'Smith')
      .pause(2000)
      .setValue('#age', '102')
      .pause(2000)
      .waitForElementVisible('button[type=submit]', 5000)
      .click('button[type=submit]')
      .pause(5000)
      .assert.containsText('p', 'You submitted the form correctly.')
      .end();
  }
};

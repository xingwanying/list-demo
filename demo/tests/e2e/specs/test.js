module.exports = {
  'Test list rendering' : function (browser) {
    browser
      .url('http://localhost:8080/list')
      .waitForElementVisible('#app')
      .assert.elementPresent('a')
      .assert.elementCount('img', 5)
      .expect.element('img').to.have.attribute('src')
      .which.matches(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/);
  }
};
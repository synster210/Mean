'use strict';

describe('Articles E2E Tests:', function () {
  describe('Test needs page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/needs');
      expect(element.all(by.repeater('article in needs')).count()).toEqual(0);
    });
  });
});

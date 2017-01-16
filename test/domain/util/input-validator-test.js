const expect = require('chai').expect;

const objectUnderTest = require('../../../lib/domain/util/input-validator');

describe('input validator', () => {

  describe('validator.validate', () => {

    it('should return an address when given valid input', () => {
      const goodData = { address: 'http://www.google.com' };
      const result = objectUnderTest.validate(goodData);

      expect('http://www.google.com').to.equal(result);

    });

  });

});

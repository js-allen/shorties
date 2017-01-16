const expect = require('chai').expect;

const objectUnderTest = require('../../../lib/domain/util/encoder');

describe('encoder', () => {

  describe('encoder.encode', () => {

    it('should return "_" when given an id of "63"', () => {

      const result = objectUnderTest.encode(63);

      expect('_').to.equal(result);

    });

    it('should return "BA" when given an id of "64"', () => {

      const result = objectUnderTest.encode(64);

      expect('BA').to.equal(result);

    });

    it('should return "BA_" when given a value of "4159"', () => {

      const result = objectUnderTest.encode(4159);

      expect('BA_').to.equal(result);

    });

    it('should not do any type coercion when appending numeric characters', () => {

      const result = objectUnderTest.encode(3965);

      expect('99').to.equal(result);

    });

  });

  describe('encoder.decode', () => {

    it('should return 63 when given a hash value of "_"', () => {

      const result = objectUnderTest.decode('_');

      expect(63).to.equal(result);

    });

    it('should return 64 when given a hash value of "BA"', () => {

      const result = objectUnderTest.decode('BA');

      expect(64).to.be.equal(result);

    });

    it('should return 4159 when given a hash value of "BA_"', () => {

      const result = objectUnderTest.decode('BA_');

      expect(4159).to.be.equal(result);

    });

    it('should return 3965 when given a hash value of "99"', () => {

      const result = objectUnderTest.decode('99');

      expect(3965).to.equal(result);

    });

  });


});

const validUrl = require('valid-url');

module.exports = {

  validate(input) {
    if (!input || !input.address) {
      throw new Error('Input validation error');
    }
    const address = input.address;
    if (!validUrl.isWebUri(address)) {
      throw new Error('UrlValidationError');
    }
    return address;
  }

};
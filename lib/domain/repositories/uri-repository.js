const dao = require('../dao/uri-dao');
const encoder = require('../util/encoder');
const inputValidator = require('../util/input-validator');

module.exports = {

  getAddress(hash) {
    return new Promise((resolve, reject) => {
      try {
        const id = encoder.decode(hash);
        dao.getAddress(id)
          .then((record) => {
            if (record[0].length) {
              resolve(record[0][0].Url);
            } else {
              reject('No Data');
            }
          })
          .catch((error) => {
            reject('Error querying data', error);
          });
      } catch (e) {
        reject('Error decoding hash', e);
      }
    });
  },

  setHash(req) {
    return new Promise((resolve, reject) => {
      try {
        const address = inputValidator.validate(req);
        dao.setHash(address)
          .then((record) => {
            if (record[0].length) {
              const hashCode = encoder.encode(record[0][0].ID);
              resolve({hash: hashCode, address: record[0][0].Url});
            } else {
              reject('No Data');
            }
          })
          .catch((error) => {
            reject('Error querying data', error);
          });
      } catch (e) {
        reject('Error validating input', e);
      }
    });
  }

};

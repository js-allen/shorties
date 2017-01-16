const db = require('./db');

module.exports = {
  getAddress(id) {
    return new Promise((resolve, reject) => {
      db.query('CALL getById(?)', [id], (err, res) => {
        if (err) {
          reject('There was an error querying the database', err);
        }
        resolve(res);
      });
    });
  },

  setHash(address) {
    return new Promise((resolve, reject) => {
      db.query('CALL getOrSetAddress(?)', [address], (err, res) => {
        if (err) {
          reject('There was an error querying the database', err);
        }
        resolve(res);
      });
    });
  }
};

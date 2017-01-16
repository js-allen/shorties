const express = require('express');
const bodyParser = require('body-parser');

const uriRepo = require('../../domain/repositories/uri-repository');

const router = express.Router();

router.use(bodyParser.json());

router.get('/:hash', (req, res) => {
  uriRepo.getAddress(req.params.hash)
    .then((address) => res.redirect(address))
    .catch((error) => {
      console.log(error);
      res.status(404).send('Not found');
    });
});

router.post('/shorten', (req, res) => {
  uriRepo.setHash(req.body)
    .then((record) => res.status(200).send(record))
    .catch((err) => {
      console.log(err);
      res.status(500).send({error: err});
    });

});

module.exports = router;
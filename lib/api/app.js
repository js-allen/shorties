const express = require('express');
const uriRouter = require('./routers/uri-router');

const app = express();

app.use('/', uriRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

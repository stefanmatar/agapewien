const express = require('express');

const PORT = process.env.PORT || 8080;
const DIST_PATH = '/dist/';
const ROOT = 'index.html';

const app = express();

app.use(express.static(`${__dirname}${DIST_PATH}`));
app.get('/*', function(req, res) {
  res.sendFile(`${__dirname}${DIST_PATH}${ROOT}`);
});
app.listen(PORT);

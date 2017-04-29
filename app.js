var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('OpenScopeServer');
});

app.listen(3000, function () {
  console.log('OpenScopeServer listening on port 3000!');
});
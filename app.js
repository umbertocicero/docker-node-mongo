var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var SERVER_PORT = 3000;

//DB setup mongodb://mongo:27017
mongoose.connect('mongodb://mongo:27017', {
  useMongoClient: true
});
var conn = mongoose.connection;

conn.once('open', function () {
  console.log('test connection OK');
});

app.get('/', function (req, res) {
  res.send("Hello World");
});

app.listen(SERVER_PORT, "0.0.0.0", function () {
  console.log('Example app listening on port ' + SERVER_PORT);
});

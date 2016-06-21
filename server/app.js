var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/CHANGESERVERNAME'; ///CHANGE NAME OF SERVER!!

app.listen( 3000, 'localhost', function(req, res){ ///CHANGE PORT IF YOU WANT. 
  console.log('server listening on port 3000');
});

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

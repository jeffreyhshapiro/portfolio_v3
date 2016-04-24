var express = require('express')
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')
var app = express();
var PORT = 3000;

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(PORT, function(){
  console.log('listening on port %s', PORT)
})
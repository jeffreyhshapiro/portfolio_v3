var express = require('express')
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.static('controller'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
})

app.get('/projects', function(req, res) {
  res.sendFile(__dirname + '/public/views/projects.html')
})

app.get('/resume', function(req, res) {
  res.sendFile(__dirname + 'public/images/ResumeJeffreyShapiro.pdf')
})

app.listen(PORT, function(){
  console.log('listening on port %s', PORT)
})
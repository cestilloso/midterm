//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/aswan', function(req, res){
  res.sendFile(path.join(__dirname, 'views/aswan.html'));
});
app.get('/astu', function(req, res){
  res.sendFile(path.join(__dirname, 'views/astu.html'));
});
app.get('/astri', function(req, res){
  res.sendFile(path.join(__dirname, 'views/astri.html'));
});
app.get('/aspor', function(req, res){
  res.sendFile(path.join(__dirname, 'views/aspor.html'));
});
app.get('/contents', function(req, res){
  res.sendFile(path.join(__dirname, 'views/contents.html'));
});
app.get('/grader', function(req, res){
  res.sendFile(path.join(__dirname, 'views/grader.html'));
});
app.get('/incident', function(req, res){
  res.sendFile(path.join(__dirname, 'views/incident.html'));
});
app.get('/last', function(req, res){
  res.sendFile(path.join(__dirname, 'views/last.html'));
});
app.get('/left-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/left-sidebar.html'));
});
app.get('/no-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/no-sidebar.html'));
});
app.get('/other', function(req, res){
  res.sendFile(path.join(__dirname, 'views/other.html'));
});
app.get('/right-sidebar', function(req, res){
  res.sendFile(path.join(__dirname, 'views/right-sidebar.html'));
});
app.get('/tech', function(req, res){
  res.sendFile(path.join(__dirname, 'views/tech.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});
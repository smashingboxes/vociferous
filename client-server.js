var compression = require('compression');
var path = require('path');
var express = require('express');

var app = express();

app.use(compression());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.set('Content-Type', 'application/xhtml+xml');
  res.sendfile(html_dir + '/index.html');
});

app.listen(process.env.PORT || 8888);

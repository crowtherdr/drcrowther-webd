var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('layout', 'layout'); // defaults to 'layout'

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/assets'));
app.use(expressLayouts);

app.use(bodyParser());

app.get('/', function(request, response){
  response.render('index', { layout:'layout.ejs' });
});

app.get('/html-css/examples', function(request, response){
  response.render('html-css/examples', { layout:'layout.ejs' });
});

app.get('/html-css/form-example', function(request, response){
  response.render('html-css/form-example', { layout:'layout.ejs' });
});

app.get('/html-css/srcset-svg', function(request, response){
  response.render('html-css/srcset-svg', { layout:'layout.ejs' });
});

app.get('/html-css/device-access', function(request, response){
  response.render('html-css/device-access', { layout:'layout.ejs' });
});

app.get('/html-css/examples-css3-stable', function(request, response){
  response.render('html-css/examples-css3-stable', { layout:'layout.ejs' });
});

app.get('/html-css/examples-css3-testing', function(request, response){
  response.render('html-css/examples-css3-testing', { layout:'layout.ejs' });
});

app.get('/html-css/examples-css3-refining', function(request, response){
  response.render('html-css/examples-css3-refining', { layout:'layout.ejs' });
});

app.get('/html-css/examples-css3-revising', function(request, response){
  response.render('html-css/examples-css3-revising', { layout:'layout.ejs' });
});

app.get('/html-css/examples-css3-exploring', function(request, response){
  response.render('html-css/examples-css3-exploring', { layout:'layout.ejs' });
});

app.get('/javascript/examples', function(request, response){
  response.render('javascript/examples', { layout:'layout.ejs' });
});

app.get('/web-components/examples', function(request, response){
  response.render('web-components/examples', { layout:'layout.ejs' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});

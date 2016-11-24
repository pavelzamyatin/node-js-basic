// add express module
var express = require('express');

// create application from express
var app = express();

// tell express that we want to use EJS view engine
app.set('view engine', 'ejs');

// using middleware to serve static
app.use('/assets', express.static('assets'));
app.use('/profile/assets', express.static('assets'));

// ejs routes
app.get('/', function(req, res) {
  res.render('index');
})

app.get('/contact', function(req, res) {
  res.render('contact');
})

// dynamic routes with ejs views
app.get('/profile/:name', function(req, res) {

  var data = {
    age: 21,
    job: 'developer',
    hobbies: ['boadgames', 'tramping', 'photography']
  }

  // pass properties to the template
  res.render('profile', {
    person: req.params.name, //from get route
    data: data}); // from object
})

app.listen(3000);

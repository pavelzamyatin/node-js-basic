// add modules
var express = require('express');
var bodyParser = require('body-parser');

// create application from express
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// tell express that we want to use EJS view engine
app.set('view engine', 'ejs');

// using middleware to serve static
app.use('/assets', express.static('assets'));
app.use('/profile/assets', express.static('assets'));

// ejs routes
app.get('/', function(req, res) {
  res.render('index');
})

// query string data
// path-string - page?property=value&other_propery=value
// req.query returns an object with all info from the query
app.get('/contact', function(req, res) {
  res.render('contact', {
    qs: req.query });
})

// post request using body-parser module
app.post('/contact', urlencodedParser, function(req, res) {
  // console.log(req.body);
  if (!req.body) return res.sendStatus(400)
  res.send(req.body);
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

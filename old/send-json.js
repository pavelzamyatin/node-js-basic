// add http module
const http = require('http');
const fs = require('fs');

// create NodeJS server
const server = http.createServer(function(req, res) {
  // info about request url
  console.log('request was made: ' + req.url);

  // create response - header and message
  res.writeHead(200, {'Content-Type' : 'application/json'});

  // create object
  var myObj = {
    name: 'Corw',
    job: 'developer',
    age: 33
  }

  // send json-string to the client
  res.end(JSON.stringify(myObj));

});

// listen to 3000 port and ip-adress
server.listen(3000, '127.0.0.1');
console.log('Now we are listening port 3000...');

// add http module
const http = require('http');
const fs = require('fs');

// create NodeJS server
const server = http.createServer(function(req, res) {
  // info about request url
  console.log('request was made: ' + req.url);

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/content/index.html').pipe(res);

  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/content/contact.html').pipe(res);

  } else if (req.url === '/api/people') {
    var people = [
      { name: 'corw', age: 22 },
      { name: 'kate', age: 15 }]
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify(people));

  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/content/404.html').pipe(res);
  }

});

// listen to 3000 port and ip-adress
server.listen(3000, '127.0.0.1');
console.log('Now we are listening port 3000...');

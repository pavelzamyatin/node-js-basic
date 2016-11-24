// add http module
const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe', 'utf8');

myReadStream.on('data', function(chunk) {
  console.log('new chunk received:');
  console.log(chunk);
})



// create NodeJS server
// const server = http.createServer(function(req, res) {
//   console.log('request was made: ' + req.url);
//
//   // create response - header and message
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   res.end('It works!');
//
// });
//
// // listen to 3000 port and ip-adress
// server.listen(3000, '127.0.0.1');
// console.log('Now we are listening port 3000...');

// add http module
const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe');

// using streams
myReadStream.on('data', function(chunk) {
  console.log('New chunk received.');
  myWriteStream.write(chunk);
})

// using pipe
myReadStream.pipe(myWriteStream);

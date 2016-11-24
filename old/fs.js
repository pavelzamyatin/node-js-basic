const fs = require('fs');

// fs.readFile(name, 'utf8', callback);
// fs.writeFile(name, data, cb);
// fs.unlink(name); // remove file
//
// fs.mkdir(name, cb);
// fs.rmdir(name, cd);

fs.mkdir('stuff', function(err) {
  fs.readFile('./readMe', 'utf8', function(err, data) {
    fs.writeFile('./stuff/writeMe', data);
  });
});

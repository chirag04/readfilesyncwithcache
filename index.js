var fs = require('fs');

var cache = {};

var oldReadFileSync = fs.readFileSync;

fs.readFileSync = function(filename, options) {
  var file = "";
  if(cache[filename]) {
    file = cache[filename];
  } else {
    file = oldReadFileSync(filename, options);
    cache[filename] = file;
  }
  return file;
}
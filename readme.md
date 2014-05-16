# Overview

Cache files read using fs.readFileSync.

## Use

Install

`npm install readfilesyncwithcache`


JavaScript Code:


```javascript

var fs = require('fs');
require('readfilesyncwithcache');

//Alternate require syntax: 

var fs = require('readfilesyncwithcache');

//Use regular fs.readFileSync syntax to read files.
var  file = fs.readFileSync('test.js');

```

## License

MIT
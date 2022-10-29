const path = require('path');

// Join path
const join = path.join('/content_dummy', 'test.txt');
console.log(join);

// Base name path
const baseName = path.basename(join);
console.log(baseName);

// Absoulute path
const absolute = path.resolve(__dirname, 'content_dummy', 'test.txt');
console.log(absolute);

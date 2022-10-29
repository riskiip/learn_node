const names = require('./name');
const greetings = require('./utils');
const items = require('./items');


// 1. Reusable modules
greetings(names.john);
console.log(items.singleItemObj);
console.log(items.items);

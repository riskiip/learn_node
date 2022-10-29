const names = require('./utils/name');
const greetings = require('./utils/utils');
const items = require('./utils/items');

// 1. Reusable modules
greetings(names.john);
console.log(items.singleItemObj);
console.log(items.items);
require('./utils/mind-grenade');

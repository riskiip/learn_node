const names = require('./utils/name');
const greetings = require('./utils/utils');
const items = require('./utils/items');

greetings(names.john);
console.log(items.singleItemObj);
console.log(items.items);

/*Alternative way to call the function without declare at the first place:
- create the function at the new js page
- call that function
- declare require file
 */
require('./utils/mind-grenade');

const path = require('path');

console.log('name: ', path.basename(__filename));
console.log('name: ', path.dirname(__filename));
console.log('name: ', path.extname(__filename));
console.log('name: ', path.parse(__filename));
console.log (path.join(__dirname, 'server.js'));
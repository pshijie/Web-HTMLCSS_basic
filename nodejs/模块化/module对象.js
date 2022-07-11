const test = require('./test')
console.log(test);  // { username: 'psj', sayHello: [Function (anonymous)] }
console.log(test.username);
test.sayHello()
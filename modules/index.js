/* const { printName, lastName } = require('./printName');

printName(`Eduardo ${lastName}`); */
//modulo nativo do sistema operacional
const os = require('os');

console.log(os.uptime());
console.log(os.hostname());
console.log(os.type());
console.log(os.cpus());
console.log(os.arch());

// Jeito antigo - Common JS
// module.exports = function sayHello(name) {
//   console.log(`Olá, ${name}`);
// }

//ES modules
export default function sayHello(name) {
  console.log(`Olá, ${name}`);
}

//export default sayHello
//Para obrigar o usuário a usar o mesmo nome
//export {sayHello}
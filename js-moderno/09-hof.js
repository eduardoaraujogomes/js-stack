const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find -> pesquisar/buscar
//retorna o primeiro valor que for true da condição e encerra a execução.
const find = array.find((product) => product.price > 1000);
// console.log({ find });

// .findIndex
// retorna o index do elemento e do primeiro item
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
console.log({ findIndex });
console.log('Produto:', array[findIndex]);
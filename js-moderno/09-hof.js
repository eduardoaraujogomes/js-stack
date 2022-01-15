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

// .some
//verifica se algum elemento do array bate com a condição
//retorna um boolean
const some = array.some((product) => product.price < 1000);
console.log({ some });

//.every
//verifica se todos os elementos do array cumpre a condição
//retorna um boolean
const every = array.every((product) => product.price >= 1000);
console.log({ every });

// .map
// retorna um novo array com os elementos transformados e com a mesma quantidade de posições

const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price
}));

console.log({ map });
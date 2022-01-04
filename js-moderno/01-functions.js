/* function minhaFunction() {
  this.name = 'Mateus';
}

//Quando usa a palavra reserva new, transforma em um objeto
console.log(new minhaFunction());

//Já em uma arrow function, você não pode usar a palavra new e transformar em um objeto
const minhaArrowFunction = () => { this.surname = 'Silva'; };

minhaArrowFunction();
console.log(this); */

/* function soma() {
  console.log(Object.values(arguments));
}

soma(1, 2, 3, 4, 5, 6, 'Mateus'); */

//Usando o rest operator, faz a mesma coisa que o Object.values(arguments)
//Na arrow function só funciona utilizando o formato de rest operator
function soma(...argumentos) {
  console.log(argumentos);
}
soma(1, 2, 3, 4, 5, 6, 'Mateus');




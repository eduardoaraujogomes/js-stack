const tech = 'Node.js';

const array = ['Node.js', 'React', 'TypeScript'];

//serve para ver se existe algo dentro do array e no JS uma string é um array
// é case sensitive
const includesString = tech.includes('ode');
//Dentro do array você precisa passar o nome que tem dentro de uma posição
const includesArray = array.includes('React');


console.log({ includesString });
console.log({ includesArray });

//Verifica se começa com o caractere escolhido, ou com a sequência de caracteres
// é case sensitive
const startsWith = tech.startsWith('No');
//Verifica se termina com o caractere escolhido, ou com a sequência de caracteres
// é case sensitive
const endsWith = tech.endsWith('js');


console.log({ startsWith });
console.log({ endsWith });
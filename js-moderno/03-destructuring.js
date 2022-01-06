const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  full_name: 'Mateus Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', "Mobile", "UI/UX"]
};

//Destructuring - pega valores de um objeto e salva dentro de uma variável 
// Tem que ser o mesmo nome que está no objeto
const { firstName, age, skills, full_name: fullName } = user;

/* const firstName = user.firstName;
const age = user.age; */

//Destructuring in arrays
const [primary, secondary, tertiary, quaternary] = skills;

console.log(fullName);


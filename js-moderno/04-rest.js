const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  full_name: 'Mateus Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', "Mobile", "UI/UX"]
};


//Rest (resto) operator
//Sempre tem que ser a última variável, que estamos passando dentro da desestrututração
const { firstName, skills, ...restUser } = user;

const [primary, ...restSkills] = skills;

console.log(restUser);
console.log(restSkills);

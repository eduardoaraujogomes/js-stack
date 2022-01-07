const user = {
  firstName: 'Mateus',
  lastName: 'Silva',
  age: 23,
  instagram: '@imateus.silva',
  skills: ['Back-end', 'Front-end', "Mobile", "UI/UX"],
  active: false
};


//Spread (espalhar) operator

//ferem o conceito de imutabilidade
// user.active = true;
//faz o merge entre duas propriedades e prevalece a última
// Object.assign(user, { active: true });

//No spread, não existe a regra de colocar no final, só tem que se atentar, pois
// a propriedade sobreescreve a outra
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
};

console.log(user);
console.log(updatedUser);
/* function printName(name) {
  console.log(name);
}

const lastName = 'Araújo';

module.exports = { printName, lastName }; */

//Outra forma de exportar
exports.printName = (name) => {
  console.log(name);
};

exports.lastName = 'Araújo';

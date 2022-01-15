const user = {};

// Usando o comando para transpilar o código para funcionar em qualquer versão do node
//yarn babel src -d build 
// Optional chaining
console.log(user?.address?.street);
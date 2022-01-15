"use strict";

var _user$address;

var user = {}; // Usando o comando para transpilar o código para funcionar em qualquer versão do node
//yarn babel src -d build 
// Optional chaining

console.log(user === null || user === void 0 ? void 0 : (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);
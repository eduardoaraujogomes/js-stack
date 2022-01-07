// const sayHello = require('./sayHello');

//Quando você quer usar o mesmo nome
//import {sayHello} from './sayHello.js'

//Para renomear
//import {sayHello as novoNome} from './sayHello.js'

//Ele quebra, pois o node, não aceita esse tipo de sintaxe por padrão
//Tem que fazer uma compilação com babel
//Uma forma de fazer, nas versão a cima de 14.14 é mudando para .mjs
//Tem que lembrar de passar a extensão do arquivo
//a segunda forma é criando um package.json e passando o type como module
import sayHello from './sayHello.js';

sayHello('Eduardo');
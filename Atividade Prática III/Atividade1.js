const {data, hora, dataExtenso, inserir, remover, procurar } = require('./modulo');

let dt = new Date(2024, 5, 3, 15, 20)
let id = 2;
let user = 'Maria';

console.log(data(dt));
console.log(hora(dt));
console.log(dataExtenso(dt));
console.log(inserir(user));
console.log(procurar(id));
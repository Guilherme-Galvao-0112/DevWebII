/* A partir dos lados de um retângulo ou quadrado, digitados pelo usuário, elaborar uma aplicação que calcule e exiba o valor da área da figura e informe se esta é um retângulo ou um quadrado.
Lembrando que a área é obtida pela multiplicação da base (L) pela altura (A).*/


var readlineSync = require('readline-sync')

var base = readlineSync.question('Informe o valor da base  : ');
var altura = readlineSync.question('\nInforme o valor da altura : ');
var area = base  * altura;
console.log('\nO Valor da area e:  '+area); 
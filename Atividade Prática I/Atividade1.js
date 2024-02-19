/*Desenvolver um programa para uma determinada loja que precisa calcular o preço de venda de um produto. 
O cálculo deverá ser efetuado através da multiplicação do preço unitário pela quantidade vendida e, posteriormente, subtrair o valor do desconto. 
Considerar todas as variáveis do tipo de dado real, que serão digitadas pelo usuário.

Preço * Quantidade = Valor total 
Valor total - Desconto = Valor final*/




var readlineSync = require('readline-sync');

var preco = readlineSync.question('\nInforme o valor do Produto: ');
var quantidade = readlineSync.question('\nInforme a quantidade a ser vendida: ');
var valor_total = preco * quantidade;
console.log('\nEste é o valor do produto, sem desconto: '+valor_total+'\n');
var desconto = readlineSync.question('\nInforme o valor do desconto, caso nao tenha desconto informe o valor zero (0): ');
valor_total = valor_total -  desconto;
console.log('\nEste e o valor final do produto: '+valor_total+'\n');

/*Desenvolver um programa para uma determinada loja que precisa calcular o preço de venda de um produto. 
O cálculo deverá ser efetuado através da multiplicação do preço unitário pela quantidade vendida e, posteriormente, subtrair o valor do desconto. 
Considerar todas as variáveis do tipo de dado real, que serão digitadas pelo usuário.

Preço * Quantidade = Valor total 
Valor total - Desconto = Valor final*/

console.log("Olá Mundo !");

preco = Number;
quantidade = Number;
valor_total = Number;
desconto = Number;


console.log("Informe o valor do Produto: \n");
preco = 175.00;
console.log("Informe a quantidade a ser Vendida: \n");
quantidade = 2;
valor_total = preco * quantidade;
console.log("Este é o valor do produto, sem desconto: "+valor_total+"\n");
console.log("Informe o valor do desconto, caso não tenha desconto informe 0: \n");
desconto = 50;
valor_total = valor_total - desconto; 
console.log("Este e o valor final do produto: "+valor_total+"\n");


/*Desenvolver um módulo que apresente as seguintes funções:
media (vetor) – retornar a média dos valores contidos em um vetor passado como parâmetro.
menor (vetor) – retornar o menor valor contido no vetor passado como parâmetro.
maior (vetor) – retornar o maior valor contido em um vetor passado como parâmetro.*/

const vetor = [22,2,4,6,8,10,12,14,16,18,20];
let tam = vetor.length;
let soma = 0;
let menor = vetor[0];
let maior = vetor[0];
for(let i=0; i < tam; i++){
    soma = soma + vetor[i];
}
for(let i=0; i < tam; i++){
    if(menor > vetor[i]){
        menor = vetor[i];
    }
}
for(let i=0; i < tam; i++){
    if(maior <  vetor[i]){
        maior = vetor[i];
    }
}

console.log('A media é: '+soma/tam);
console.log('O menor valor é: '+menor);
console.log('O maior valor é: '+maior);

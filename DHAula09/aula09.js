const numeros = [10, 20, 19, 18, 15, 20, 21, 50];
const textos = ['dez', 'vinte', 'trinta'];
/*
console.log('Dados originais: ', numeros);
numeros.push(40);
console.log('Dados adicionado 40', numeros);
numeros.pop();
console.log('Dados removido 40', numeros);
numeros.shift();
console.log('Dados removido 10', numeros);

numeros.splice(1, 1, 50);
console.log(numeros);

console.log('original numeros: ', numeros);
console.log('original textos: ', textos);

numeros.splice(2, 1, textos[2]);
console.log(numeros);

const result = numeros.find(function(item){
    return item > 20;
});

console.log(result);

const result2 = numeros.filter((item) => item > 20);

console.log(result2);

const result3 = numeros.findIndex((item) => item > 20);

console.log(result3);
*/

const resultado1 = numeros.find(function(item) {
  return item > 20;
});

const resultado2 = numeros.filter((item) => item > 10);
const resultado3 = numeros.findIndex((item) => item > 10);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);


const indice20 = numeros.findIndex((item) => item === 20);

numeros.splice(indice20, 1, textos[1]);
console.log(numeros);
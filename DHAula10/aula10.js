/*for(let indice = 0; indice <= 100; indice+=5){
    console.log('Olá Mundo! ',indice)
}

for(let indice = 100; indice >= 0; indice-=5){
    console.log('Olá Mundo! ',indice)
}
for(let indice = 1; indice <= 20; indice*=2){
    console.log('Olá Mundo! ',indice)
}*/
/*
const valores = [10, 20, 30, 50];

valores.forEach(function(valor){
    console.log(valor * 2);
    //return valor * 2;
});

//console.log(valores.forEach((valor) => valor * 2));

valores.forEach((valor) => {
    console.log(valor * 2);
});

valor = valores[0];
console.log(valor);

valores.forEach((item) => {
    if(item === 50){
        console.log("Dentro da condiçao", item);
    }else {
        console.log("Fora da condiçao", item);
    }
});*/

let numero = 0;
while(numero <= 100) {
    console.log(numero);
    numero++;
}
/*
do {
    console.log(i);
    i++;
}while(i < 5)*/
/*
prompt = require('prompt');

prompt.start();

const teste = async () => {
    let objeto = {};

    do {
        console.log('Senha incorreta!');
        objeto = await prompt.length(['senha']);
    }while(objeto.senha !== '123')
}*/
//ARRAY

//Acessar elementos específicos de um array.
const nomesAntigos = ['João', 'Pedro', 'Maria'];
const nomesAtuais = ['Diego', 'Alan', 'Agatha'];
const numeros = [10, 20, 30, 40, 50];

console.log(nomesAntigos, nomesAtuais);

//Modificar cada um dos elementos de um array e imprimi-los no console.

nomesAntigos.splice([0],[1], nomesAtuais[1]);
console.log(nomesAntigos);


// Adicionar elementos a um array.


console.log("Nomes Atuais: "+ nomesAtuais);
nomesAtuais.push('Bryan');
console.log("Adicionado Bryan nos Nomes Atuais: "+ nomesAtuais);

//Extrair elementos de um array.
//remover primario nome da lista
nomesAtuais.shift();
console.log(nomesAtuais);
//remover ultimo nome da lista
nomesAtuais.pop();
console.log(nomesAtuais);

//inverter a ordem do array numeros dentro da funçao
let inverter;
function imprimirInverso(inverter){
    inverter = numeros.slice(0).reverse();
    return inverter;
}
//const numerosInvertido = numeros.slice(0).reverse();

console.log(imprimirInverso(inverter));


let corrigir;
function Inverter(arr = [3, 2, 1]){
    corrigir = arr.slice(0).reverse();
    return corrigir;
}
console.log(Inverter(corrigir));

//somar array
/*let arrTeste = [3,2,1];
let somar = 0;
let i;

for(i = 0; i < arrTeste.length; i++){
    somar += arrTeste[i];
}
console.log(somar);*/
let arr1 = [1,2,3];
somar1 = arr1.reduce(function(somar1, i) {
    return somar1 + i;
});
console.log(somar1);

let arr2 = [10,3,10,4];
somar2 = arr2.reduce(function(somar2, i) {
    return somar2 + i;
});
console.log(somar2);

let arr3 = [-5, 100];
somar3 = arr3.reduce(function(somar3, i) {
    return somar3 + i;
});
console.log(somar3);

//Simulação Array.join()
let String;
let arrJoin = ["o","l","á"];
String = arrJoin.reduce(function(String, i){
    return String + i;
});
console.log(String);

let String1;
let arrJoin1 = ["t","c","h","a","u"];
String1 = arrJoin1.reduce(function(String1, i){
    return String1 + i;
});
console.log(String1);

//Coleções de Filmes (e mais…)
const filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

console.log(filmes);
console.log(filmes[2]);

//Os filmes devem estar todos em letras maiúsculas.
const up = filmes.map(i => i.toUpperCase());
console.log(up);

//OU
function UP(palavras){
    let newArray = [];
    for(let j = 0; j < palavras.length; j++){
        newArray.push(palavras[j].toUpperCase());
    }
    return newArray;
}
console.log(UP(["star wars", "matrix"]));

//Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:

const newFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
//console.log(filmes, newFilmes);

function allArray(filmes, newFilmes){
    return [filmes, newFilmes];
}
console.log(allArray(filmes, newFilmes));

/*Durante o processo, percebemos que o último elemento na série de filmes
animados é, na verdade, um game. Agora devemos editar nosso código e
modificá-lo para que possamos remover o último elemento antes de migrar o
conteúdo para o array que contém todos os filmes */
let saveDate = newFilmes[4];

function removeItem(newFilmes){
    newFilmes.pop();
    return [newFilmes];
}
console.log(removeItem(newFilmes));
console.log(saveDate);

/*. Finalmente, recebemos dois arrays com classificações feitas por diferentes
usuários do mundo nos filmes com o seguinte formato:
 */
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let texto;

function verificar(asiaScores, euroScores){
    if(JSON.stringify(asiaScores) === JSON.stringify(euroScores)){
        texto = "true";
    }else {
        texto = "false";
    }

    return texto;
}
console.log(verificar(texto));









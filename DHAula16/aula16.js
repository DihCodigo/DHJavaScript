let numeros = [12, 15, 20, 40];

numeros.forEach(function(valor){

});

const total = numeros.reduce(function(valorTotal, valorAtual){
    console.log('valorTotal', valorTotal);
    console.log('valorAtual', valorAtual);
    return valorTotal + valorAtual;
});

console.log('SOMA TOTAL = ' + total);

function arrayObjectsTwo(numero, palavra) {
    const dados = [];

    for(let i = 1; i<= numero; i++){
        let item = {};
        item[palavra] = i;

        dados.push(item);
    }
    return dados;
}

console.log(arrayObjectsTwo(5, 'ola'));
const dados = [
    {
        codigo: 1,
        produto: "arroz",
        valor: 100
    },
    {
        codigo: 2,
        produto: "soja",
        valor: 50
    },
    {
        codigo: 3,
        produto: "milho",
        valor: 70
    }
];
// 1
const resultado1 = dados.reduce((valorTotal, valorAtual) => {
    return valorTotal + valorAtual.valor;
},0);

console.log("resultado1: ", resultado1);

// 2
const resultado2 = dados.filter((dado) => {
    return dado.produto.indexOf('arroz') > -1;
});

resultado2 = resultado2.reduce((valorTotal, valorAtual) => {
    return valorTotal + valorAtual.valor;
},0);
console.log("resultado: ", resultado2);
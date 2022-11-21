/*
JSON é um objeto do javascript que serve para
conseguir agrupar informações para transporta para outros lugares;
 * vantagens -> mais faceis de integração.
*/

const dadosAluno = {
    "data": [
        {
            "nome": "Diego",
            "ativo": true,
            "modulosInscritos": [
                "Introdução a informatica",
                "Programação imperativa",
                "Banco de dados"
            ],
            "valorParcela": 500
        },
        {
            "nome": "Maria",
            "ativo": false,
            "modulosInscritos": [
                "Introdução a informatica",
                "Programação imperativa",
                "Banco de dados"
            ],
            "valorParcela": 500
        }
    ]
};

console.log(dadosAluno.data[1].nome);

dadosAluno["nome"];
dadosAluno.nome;

console.log(dadosAluno.data[1].ativo);

console.log(`
    Nome: ${dadosAluno.data[1].nome}
    Ativo: ${dadosAluno.data[1].ativo}
    modulos Ativos: ${dadosAluno.data[1].modulosInscritos}
    Valor da parcela: R$ ${dadosAluno.data[1].valorParcela},00
`);


document.getElementById('nomeAluno').innerHTML = dadosAluno.data[1].nome;
document.getElementById('situacaoAluno').innerHTML = dadosAluno.data[1].ativo ? "Ativo" : "Inativo";

let modulo = "";

dadosAluno.data[1].modulosInscritos.forEach((modulo) => {
    modulo += `<li>${modulo}</li>`;
});

document.getElementById('modulosAluno').innerHTML = dadosAluno.data[1].modulosInscritos;
document.getElementById('parcelaAluno').innerHTML = dadosAluno.data[1].valorParcela + ",00";
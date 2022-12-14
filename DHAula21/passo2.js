const aluno = require('./passo1');
const curso = require('./passo3')

//console.log(aluno.dados[2]);
//console.log(curso.dados[0]);
//console.log(calcularMedia().toFixed(2));
//console.log(informarAluno.nome);


// informe qual aluno do array
let informarAluno = aluno.dados[2];

//variaveis
let somar = 0;
//informe qts faltas ao aluno será adicionado
let addfalta = 1;

//Metodo para calcular a Media
const calcularMedia = (media) => {
    for (let i = 0; i < informarAluno.notas.length; i++) {
        let nota = informarAluno.notas[i];
        somar = somar + nota;
    }
    media = somar / informarAluno.notas.length;

    return media;
}

//Metodo para adicionar falta
const faltas = (adicionar) => {
    adicionar = informarAluno.qnt_faltas + addfalta;

    return adicionar;
}

//Metodo para adicionar um aluno no curso
function novoAluno() {
    aluno.dados.push(
        {
            nome: 'Angela',
            qnt_faltas: 0,
            notas: [10, 10, 10]
        }
    )

    return aluno.dados;

}
console.log(informarAluno);

console.log(novoAluno());

console.log("Quantidade de faltas do aluno " + informarAluno.nome + " é: "  + faltas());

console.log(curso.dados[0]);

module.exports = {
    calcularMedia,
    novoAluno
};
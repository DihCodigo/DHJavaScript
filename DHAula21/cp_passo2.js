const listaAlunos = require('./cp_passo1');
const curso = require('./cp_passo3');

//Informe o Aluno
let aluno = listaAlunos[1];

//variaveis
let somar = 0;
// CALCULAR A MEDIA DO ALUNO
const calcularMedia = (media) => {
    for (let i = 0; i < aluno.notas.length; i++) {
        let nota = aluno.notas[i];
        somar = somar + nota;
    }
    media = somar / aluno.notas.length;

    return media;
}

// ADICIONAR FALTA AO ALUNO
function falta(adicionar = 1) {
    let addfalta = aluno.faltas + adicionar;
    return addfalta;
}

//METODO PARA BUSCAR ALUNOS APROVADOS

//console.log(mostrarLista());
//console.log(`A media do aluno(a) ${aluno.nome} é: ` + calcularMedia().toFixed(2));
//console.log(`Foi adicionado mais uma falta ao aluno(a) ${aluno.nome} e seu total de falta é: ` + falta());


module.exports = {
    calcularMedia,
    falta
}

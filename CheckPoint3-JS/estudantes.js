const curso = require('./curso');

class Aluno {
    nome;
    faltas;
    notas;

    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }

}

let aluno1 = new Aluno('Diego', 2, [10, 6, 8]);
let aluno2 = new Aluno('Marcela', 8, [5, 3, 7]);
let aluno3 = new Aluno('Rebecca', 1, [7, 4, 10]);

const listaEstudantes = [
    aluno1,
    aluno2,
    aluno3
]

//ALUNO DA LISTA [ALUNO1 = 0, ALUNO2 = 1...]
let aluno = listaEstudantes[0];


// CALCULAR A SOMA DO ARRAY NOTAS
let totalNotas = aluno.notas.reduce(
    function (totalNotas, somar) {
        return totalNotas + somar;
    }, 0);
// CALCULAR A MEDIA DAS NOTAS
const calcularMedia = (media) => {
    media = totalNotas / aluno.notas.length;
    return media;
}
// ADICIONAR FALTA AO ALUNO
const falta = (adicionar = 1) => {
    let addFalta = aluno.faltas + adicionar;
    return addFalta;
}
// ADICIONAR NOVOALUNO NA LISTA
const novoAluno = (aluno) => {
    aluno = listaEstudantes.push(
        {
            nome: 'Ana Clara',
            faltas: 5,
            notas: [3, 2, 6]
        }
    )
    return aluno;
}

// METODO PARA DEFINIR APROVADOS E REPROVADOS
const Avaliar = (aluno = "") => {
    if (calcularMedia() < curso.nota_aprovacao || falta() > curso.faltas_maxima) {
        aluno = "Reprovado";
    } else if (calcularMedia() >= curso.nota_aprovacao && falta() <= curso.faltas_maxima) {
        aluno = "Aprovado";
    }

    return aluno;
}
// METODOs PARA LISTAR TODOS ALUNOS APROVADOS E OS REPROVADOS
listaEstudantes.forEach((valorAtual) => {
    let notasSomada = valorAtual.notas.reduce(
        function (notasSomada, somar) {
            return notasSomada + somar;
        }, 0);

    Aprovados = notasSomada / valorAtual.notas.length;

    if(Aprovados >= curso.nota_aprovacao){
        console.log(`Alunos que Aprovaram: ${valorAtual.nome}`);
    }else if (Aprovados < curso.nota_aprovacao){
        console.log(`Alunos que Reprovaram: ${valorAtual.nome}`);
    }
})


console.log(`Aluno selecionado ${aluno.nome} \n`)
console.log(`Valor total das notas: ${totalNotas} e a media: ${calcularMedia()}\n`);
console.log(`O total de faltas referente a este aluno é: ${falta()}\n`);
console.log(`Total de alunos na sala: ${novoAluno()}, novo aluno adicionado\n`, listaEstudantes)
console.log(`Status de Aluno SELECIONADO: ${Avaliar()}\n`);

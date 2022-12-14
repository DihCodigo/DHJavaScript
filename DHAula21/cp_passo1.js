function Aluno(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
}

const aluno1 = new Aluno('Diego', 0, [8, 7, 10]);
const aluno2 = new Aluno('Marcela', 2, [10, 9, 10]);
const aluno3 = new Aluno('Sergio', 7, [3, 5, 6]);

let listaAlunos = [
    aluno1,
    aluno2,
    aluno3
]

module.exports = listaAlunos;

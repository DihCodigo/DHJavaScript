const listaAlunos = require('./cp_passo1');
const { calcularMedia, falta } = require('./cp_passo2');

let curso = {
    nomeDoCurso: "JavaScript",
    notaAprovacao: 7,
    faltasMaximas: 4,
    listaEstudantes: listaAlunos,
    addAluno: function(aluno) {
        aluno = listaAlunos.push(
            {
                nome: 'Angela',
                faltas: 3,
                notas: [3, 8, 6]
            }
        )
        return aluno;
    },
    aprovado: function(aluno) {
        aluno = "";
        if(calcularMedia() >= this.notaAprovacao && falta() <= this.faltasMaximas){
            aluno = "Aprovado!";
        }else if (calcularMedia() < this.notaAprovacao || falta() > this.faltasMaximas){
            aluno = "Reprovado!"
        }
        return aluno;
    },
    listaAprovados: function() {
        // Retornem a lista de alunos aprovados
        
    }
}
//console.log(curso);
//console.log(`Adicionado novo Aluno e a qnt de alunos em sala é de: ${curso.addAluno()} \n`, listaAlunos);
//console.log(calcularMedia())
//console.log(curso.aprovado())
//console.log(curso.listaAprovados);
//console.log(listaAlunos[1].notas);


module.exports = curso;
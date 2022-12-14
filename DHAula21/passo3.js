const aluno = require('./passo1');
const alunoMedia = require('./passo2')
const { calcularMedia } = require('./passo2');


const curso = {
    'dados': [
        {
            nome_curso: 'Programação Imperativa',
            nota_aprovacao: 7,
            faltas_max: 3,
            lista_estudantes: [
                {
                    nome: aluno.dados[1].nome,
                    faltas: aluno.dados[1].qnt_faltas,
                    media: alunoMedia.calcularMedia().toFixed(2)
                }
            ]
        }
    ]
}

module.exports = curso;

console.log(curso.dados[0]);

//console.log(calcularMedia());


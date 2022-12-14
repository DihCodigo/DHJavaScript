
const info = [
    {
        nome: 'Rodolfo',
        notas_provas: [10, 5, 8]
    }
]


let somar = 0;

for (let i = 0; i < aluno.dados[1].notas.length; i++) {
    let nota = aluno.dados[1].notas[i];
    somar = somar + nota;
}
let media = somar / aluno.dados[1].notas.length;

let numero = info[0].notas_provas;


let total = info[0].notas_provas.reduce(
    function (total, somado) {
    return total + somado;
}, 0);

console.log(`O Total somado das notas é ${total}`);

let tirarMedia = total / into[0].notas_provas.length;
console.log(tirarMedia);

//console.log(somar, media.toFixed(2));

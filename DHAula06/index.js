const texto = 'Hoje é dia 26/10'
let hoje = 'Hoje é dia '

const date = new Date()

hoje += date.getDate();
hoje += '/'
hoje += date.getMonth() + 1 //0 = janeiro, 1 = fevereiro, 2 = março
hoje += '/'
hoje += date.getFullYear()

console.log(hoje)

function retornaHoje() {
    const date = new Date();

    return `Hoje é dia ${date.getDate()} / ${date.getMonth() +1} / ${date.getFullYear()}`
}

console.log(retornaHoje())

function retornaSaudacao(nome, hoje) {
    return `Olá, ${nome}, ${hoje}`
    //return 'Olá, ' + nome + ', ' + hoje
}
console.log(retornaSaudacao('Rodrigo', retornaHoje()))
const valor = 7

//Essa é a estrutura da condiçao

if(valor >= 10) {
    console.log ("O valor é maior ou igual a 10")
}else if (valor <= 9 && valor > 5) {
    console.log("O valor esta entre seis e nove")
}else {
    console.log("O valor é " + valor)
}

const palavra = 'dh'

switch(palavra) {
    case '01/11':
        console.log('A palavra é a data de hoje')
    break;
    case 'dh':
        console.log('A palavra é Digital House')
    break;
    case 'Aula':
        console.log('A palavra é Aula')
    break;
    default:
        console.log("A palavra é a data, dh ou aula")
    break;
}
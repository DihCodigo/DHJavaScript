/* 1-
Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
*/
function Converter(cm) {
    let pol = 2.54
    const res = cm / pol;
    return res
}
//inserir valor em Centimetros
const converter = Converter(20)
console.log(converter.toFixed(2) + " Polegadas")

console.log("================================================")

/* 2-
Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
*/
function stringToUrl(str)  {
    return `http://www.${str}.com.br`
}

console.log(stringToUrl("google"))

console.log("================================================")

/* 3-
Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
*/

function exclamacaoEnd(texto) {
    const frase = texto + "!"
    return frase
}

let imprimir = exclamacaoEnd("Ola, seja bem vindo")
console.log(imprimir)

console.log("================================================")

/* 4-
Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
*/

function calcularIdade(humano, dog = 7) {
    const result = humano * dog
    return result

}

let idadeDog = calcularIdade(5)
console.log(idadeDog)

console.log("================================================")

/* 5- 
Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês.
*/

function calcularHrTrabalho(salario_mensal) {
    let result = salario_mensal / 160
    return result

}

let salarioHr = calcularHrTrabalho(1500)
console.log((salarioHr).toFixed(2))

console.log("================================================")

/* 6-
Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em 
centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
*/

let peso = 70
let altura = 1.70

console.log("peso: " + peso + "\nAltura: " +altura)

let imc = peso / altura ** 2;

//console.log((imc).toFixed(2))

if (imc < 18.5) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Abaixo do peso")
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Peso normal")
} else if (imc > 25 && imc < 29.9) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Pré-obesidade")
} else if (imc > 30 && imc < 34.9) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Obesidade Grau 1")
} else if (imc > 35 && imc < 39.9) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Obesidade Grau 2")
} else if (imc > 40) {
    console.log("Calculo IMC: " + imc.toFixed(2) + " Obesidade Grau 3")
}

console.log("================================================")


/* 7-
Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz.
*/
const up = texto => texto.toUpperCase()
console.log(`${up('cuidado')}!`)

console.log("================================================")

/* 8-
Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz.
*/
function tipo(param) {
    let info = param;
    return info
}

console.log(tipo(typeof (info = "texto")))

console.log("================================================")

/* 9- 
Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
*/
function calcularRaio(raio) {
    const area = Math.PI * Math.pow(raio, 2)
    return area
}
console.log(calcularRaio(raio = 5.6).toFixed(3))

//FIM
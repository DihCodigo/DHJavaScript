//calculadora nivel 1
function adicionar(a, b) {
    const resultado = a + b;
    return resultado
}
function subtracao(a, b = 0) {
    const resultado = a - b;
    return resultado
}
function multiplicacao(a, b = 0) {
    const resultado = a * b;
    return resultado
}

function divisao(a, b = 0) {
    const resultado = a / b;
    return resultado
}

console.log(adicionar(50, 50))
console.log(subtracao(150, 50))
console.log(multiplicacao(50, 2))
console.log(divisao(1000, 10))

//======================================
console.log("===============================================")
//calculadora nivel 2//
let adic = adicionar(40,40)
console.log("A soma dos dois argumentos é igual a: " +adic)
let subt = subtracao(140,40)
console.log("A subtração dos dois argumentos é igual a: " +subt)
let mult = multiplicacao(40,40)
console.log("A multiplicação dos dois argumentos é igual a: " +mult)
let div = divisao(80,4)
console.log("A divisão dos dois argumentos é igual a: " +div)
let div1 = divisao(80,0)
console.log("A divisão dos dois argumentos, porém um dos argumentos é igual a 0 é igual a: " +div1)


//======================================
console.log("===============================================")
//calculadora nivel 3//
function quadradoDoNumero(x) {
    let res = x ** 2
    return res
}
console.log(quadradoDoNumero(4))

//======================================

function mediaDeTresNumeros(a, b, c) {
    let res = (a + b + c)/3
    return res
}
console.log(mediaDeTresNumeros(4, 8, 5).toFixed(2))

//======================================

function calculaPorcentagem(a, b) {
    let res = (a * b)/100
    return res
}
console.log(calculaPorcentagem(300, 15).toFixed(2))

//======================================

function geradorDePorcentagem(a , b) {
    const res = divisao((multiplicacao(a, 100)), b);
    return res;    
}
console.log(geradorDePorcentagem(2, 200).toFixed(2));
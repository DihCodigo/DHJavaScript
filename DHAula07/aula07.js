console.log(10 !== '10')//false
console.log(10 != '10')//true
console.log(10 === 10)//true
console.log(10 === '10')//true

let valor1 = 10
const valor2 = '10'

function retorna10() {
    return '10'
}

console.log (valor1 === retorna10())//false 

console.log('10' >= retorna10())//true

console.log("====================================")



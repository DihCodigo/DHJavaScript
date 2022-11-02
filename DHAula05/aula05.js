/*
function Somar(a, b) {

    console.log(a + b)
    
}

Somar(10, 20);
*/
function Somar(a, b = 0) {
    const resultado = a + b;
    console.log(resultado)
    
}

function Subtrair(a, b = 0) {
    const resultado = a - b;
    console.log(resultado)
    
}

function Multiplicar(a, b = 0) {
    const resultado = a * b;
    console.log(resultado)
    
}

function Dividir(a, b = 0) {
    const resultado = a / b;
    console.log(resultado)
    
}
//console.log(resultado)
Somar(30, 20);
Subtrair(30, 20);
Multiplicar(30, 20);
Dividir(30, 20);



//return
function SomarReturn(a, b = 0) {
    const resultado = a + b;
    return resultado
}
function SubtrairReturn(a, b = 0) {
    const resultado = a - b;
    return resultado
}

const total = SomarReturn(50, 50)

let mais = SomarReturn(50, 50)
let menos = SubtrairReturn(50, 100)

let calcular = mais * menos

console.log(calcular)



//console.log(SomarReturn(30, 50))

/*
const soma1 = (a, b) => {
    return a + b
}

const soma2 = (a, b) => a + b

// Express Function
const soma1 = function(valor1, valor2) {
    return valor1 + valor2;
  }
  
  // Arrow Function
  const soma2 = (valor1, valor2) => {
    return valor1 + valor2;
  }
  
  // Arrow Function
  const soma3 = (valor1, valor2) => valor1 + valor2;
  */
const bebidas = [
    "Suco",
    "Agua",
    "Cafe"
];

const alimentos = [
    "Frutas",
    "Verduras",
    "Bolos"
];

// uniao de dados ** Spread Operator
const spreadOperator = [...bebidas, ...alimentos];
console.log(spreadOperator);

// conjunto de dados dentro de conjunto de dados, seria considerado como matriz de dados

// ** Matriz
const matriz = [bebidas, alimentos];
console.log(matriz);


// adicionando refri no conjunto de dados de bebidas
const matrizAdicionando = [[bebidas, ...["Refri"]], alimentos];
console.log(matrizAdicionando);

console.log(spreadOperator[0]);
console.log(spreadOperator[4]);


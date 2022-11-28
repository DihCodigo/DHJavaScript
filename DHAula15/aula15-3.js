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
const uniao = [...bebidas, ...alimentos];
console.log(uniao);

// conjunto de dados dentro de conjunto de dados, seria considerado como matriz de dados
/*
// ** Matriz
const uniao = [bebidas, alimentos];
console.log(uniao);
*/
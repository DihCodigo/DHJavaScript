const modulos  = require("./modulos");
const { filmes, retornarFilmes } = require("./modulos");

console.log(modulos.filmes[1]);
console.log(filmes[1]);
console.log(modulos.retornarFilmes(5));
console.log(retornarFilmes(2));

const dados = require("./dados.json");
console.log(dados);

// fs modulo do node para manipulaçao de arquivos
const fs = require("fs");

fs.readFile("./dados.json", (error, data) => {
    if(!error) {
        const dataJson = JSON.parse(data);
        console.log("---------------------");
        console.log(dataJson);
    }
});


//readFile -> nao espera ele executa e avisa depois
//readFileSync -> trava execução na linha enquanto aquela linha nao estiver pronto


const dados2 = fs.readFileSync("./dados.json", "utf-8");
console.log(dados2);

console.log("Teste em andamento");


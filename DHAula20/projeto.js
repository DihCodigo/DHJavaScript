const dadosAltura = require("./dadosAltura");
const dadosOpiniao = require("./dadosOpiniao");
const qtdOpiniaoRegular = require("./quantidade");

const { filtroSexo, filtroOpiniao } = require("./filtros");

const resultadoFiltroSexo = filtroSexo(dadosAltura, "M");
const resultadoFiltroOpiniao = filtroOpiniao(dadosOpiniao, "horrível");

console.log(qtdOpiniaoRegular(dadosOpiniao, "regular"));

console.log(resultadoFiltroSexo);
console.log(resultadoFiltroOpiniao);
const { filtroOpiniao } = require("./filtros");

const qtdOpiniaoRegular = (dados, opiniao) => {
  const opinioesRegular =  filtroOpiniao(dados, opiniao);

  return opinioesRegular.length;
}

module.exports = qtdOpiniaoRegular;
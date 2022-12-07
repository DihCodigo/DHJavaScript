const erros = require("./erros");

const filtroSexo = (dados, sexo) => {
  if(erros(dados, sexo, "sexo")) {
    return erros();
  }

  return dados.filter((dado) => dado.sexo.toLowerCase() === sexo.toLowerCase());
};

const filtroOpiniao = (dados, opiniao) => {
  if(erros(dados, opiniao, "opinião")) {
    return erros();
  }

  return dados.filter((dado) => dado.opiniao.toLowerCase() === opiniao.toLowerCase());
}

module.exports = {
  filtroSexo,
  filtroOpiniao
};
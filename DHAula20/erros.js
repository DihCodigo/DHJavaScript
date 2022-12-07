const erros = (dados, tipo, msg) => {
  let erros = "";

  erros += !dados ? "Parâmetro dados não foi enviado\n" : "";
  erros += !Array.isArray(dados) ? "Parâmetro dados não é um conjunto de dados\n" : "";
  erros += dados && dados.length === 0 ? "Parâmetro dados tem que ter ao menos um dado\n": "";

  erros += !tipo ? `Parâmetro ${msg} não foi enviado\n` : "";
  erros += typeof(tipo) !== "string" ? `Parâmetro ${msg} não é uma string\n` : "";

  if (erros) {
    return erros;
  }
}

module.exports = erros;
const banco = {
    "usuarios" : [
        {
            "TitularConta": "Afonso Ribeiro",
            "NumeroConta": "33200-5",
            "Saldo": 1200,
            "TipoConta": "Conta Corrente"
        },
        {
            "TitularConta": "Maria Antunes",
            "NumeroConta": "32222-6",
            "Saldo": 5200,
            "TipoConta": "Conta Corrente"
        },
        {
            "TitularConta": "Marcelo Rodolfo",
            "NumeroConta": "76200-5",
            "Saldo": 12000,
            "TipoConta": "Conta Poupança"
        }
    ]
}

console.log(`
    "Titular da Conta": ${banco.usuarios[1].TitularConta}
    "Numero da Conta": ${banco.usuarios[1].NumeroConta}
    "Saldo Disponivel": ${banco.usuarios[1].Saldo}
    "Tipo de Conta Bancaria": ${banco.usuarios[1].TipoConta}
`);

const DadosUsuario = banco.usuarios.find((dadosBancario) => dadosBancario.TitularConta === "Afonso Ribeiro");

console.log(DadosUsuario);


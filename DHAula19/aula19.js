const dados = [
    {
        idade: 30,
        opiniao: "Ótimo",
    },
    {
        idade: 20,
        opiniao: "Bom",
    },
    {
        idade: 18,
        opiniao: "Regular",
    },
    {
        idade: 25,
        opiniao: "Bom",
    },
    {
        idade: 22,
        opiniao: "Bom",
    },
    {
        idade: 19,
        opiniao: "Bom",
    },
    {
        idade: 25,
        opiniao: "Regular",
    },
    {
        idade: 40,
        opiniao: "Ótimo",
    },
    {
        idade: 55,
        opiniao: "Ótimo",
    },
    {
        idade: 38,
        opiniao: "Bom",
    },
    {
        idade: 65,
        opiniao: "Regular",
    },
    {
        idade: 73,
        opiniao: "Regular",
    },
    {
        idade: 40,
        opiniao: "Ótimo",
    },
    {
        idade: 21,
        opiniao: "Ótimo",
    },
    {
        idade: 23,
        opiniao: "Ótimo",
    },
];

const filtro = (dados, opiniao) => {
    return dados.filter((dado) => dado.opiniao === opiniao);
};

const mediaIdade = (dados) => {
    const opiniaoOtimo = filtro(dados, "Ótimo");
    const totalIdade = opiniaoOtimo.reduce((total, atual) => {
        return total + atual.idade;
    }, 0);

    const media = (totalIdade / opiniaoOtimo.length).toFixed(2);

    return `A média de idade das pessoas que responderam ótimo é de: ${media}`;

}

const pessoasRegular = (dados) => {
    const pessoasRegular = filtro(dados, "Regular");
    return `A quantidade de pessoas com opinião Regular é de: ${pessoasRegular.length}`;
}

const porcPessoasBom = (dados) => {
    const opiniaoBom = filtro(dados, "Bom");

    const porcentagem = (opiniaoBom.length / dados.length) * 100;

    return `A porcentagem de pessoas que responderam Bom é de: ${porcentagem.toFixed(2)}%`;

}

console.log(mediaIdade(dados));
console.log(pessoasRegular(dados));
console.log(porcPessoasBom(dados));
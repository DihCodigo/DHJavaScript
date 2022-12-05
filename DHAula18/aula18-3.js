const dados = [
    {
        altura: 310,
        sexo: "M"
    },
    {
        altura: 120,
        sexo: "F"
    },
    {
        altura: 155,
        sexo: "M"
    },
    {
        altura: 200,
        sexo: "M"
    },
    {
        altura: 180,
        sexo: "F"
    },
    {
        altura: 210,
        sexo: "M"
    },
    {
        altura: 155,
        sexo: "M"
    },
    {
        altura: 135,
        sexo: "F"
    },
    {
        altura: 170,
        sexo: "M"
    },
    {
        altura: 165,
        sexo: "M"
    },
    {
        altura: 165,
        sexo: "F"
    },
    {
        altura: 173,
        sexo: "M"
    },
    {
        altura: 220,
        sexo: "M"
    },
    {
        altura: 199,
        sexo: "F"
    },
    {
        altura: 189,
        sexo: "M"
    },
];

const maiorEMenor = (dados) => {

    let maior = 0;

    dados.forEach(dado => {
        if (dado.altura > maior) {
            maior = dado.altura;
        }
    });

    let menor = maior;

    dados.forEach(dado => {
        if (dado.altura < menor) {
            menor = dado.altura;
        }
    });

    maior = (maior / 100).toFixed(2);
    menor = (menor / 100).toFixed(2);

    return `A maior altura é ${maior}M e a menor é ${menor}M`;

}

const mediaAlturaMulheres = (dados) => {
    const mulheres = dados.filter((dado) => dado.sexo === "F");
    const totalAltura = mulheres.reduce((total, atual) => {
        return total + atual.altura;
    }, 0);

    const resultado = ((totalAltura / mulheres.length) / 100).toFixed(2);

    return `A média de altura das mulheres é de ${resultado}M`;

}

const numeroHomens = (dados) => {
    const homens = dados.filter((dado) => dado.sexo === "M");
    return `O número de homens é de: ${homens.length}`;
}

console.log(maiorEMenor(dados));
console.log(mediaAlturaMulheres(dados));
console.log(numeroHomens(dados));
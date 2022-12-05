const informacoes = [
    {
        altura: 1.72,
        sexo: "M"
    },
    {
        altura: 1.82,
        sexo: "F"
    },
    {
        altura: 1.62,
        sexo: "F"
    },
    {
        altura: 1.77,
        sexo: "M"
    }

];


const maiorMenor = (informacoes) => {
    let maior = 0;
    let menor = 0;
    for (let i = 0; i < informacoes.length; i++) {

        for (let j = 0; j < informacoes.length; j++) {

            if (informacoes[i].altura < informacoes[j].altura) {
                maior = informacoes[j].altura;
            }
            else if (informacoes[i].altura > informacoes[j].altura) {
                menor = informacoes[j].altura
            }

        }

    }
    console.log(`O maior é: ${maior}`);
    console.log(`O menor é ${menor}`);
}


const mediaAlturaMulheres = (informacoes) => {

    let somAltura = 0, cont = 0
    for (let i = 0; i < informacoes.length; i++) {
        if (informacoes[i].sexo === 'F') {
            somAltura += informacoes[i].altura;
            cont += 1;
        }

    }

    console.log(`A media das alturas das mulheres é: ${(somAltura / cont).toFixed(2)}`);
}

const quantidadeHomens = (informacoes) => {
    let cont = 0;
    for (let i = 0; i < informacoes.length; i++) {
        if (informacoes[i].sexo === 'M') {
            cont++
        }

    }

    console.log(`O número de homens é: ${cont}`);
}

maiorMenor(informacoes);
mediaAlturaMulheres(informacoes);
quantidadeHomens(informacoes);
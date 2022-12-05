
const dados = {
    "atributos": [
        {
            "altura": 1.7,
            "sexo": "M",
        },
        {
            "altura": 1.5,
            "sexo": "F",
        },
        {
            "altura": 1.3,
            "sexo": "F",
        }
    ]
};

console.log(dados.atributos[2]);

let maior;
let menor;
for(let i = 0; i < dados.atributos.length; i++) {
    for(let j = 0; j <dados.atributos.length; j++ ){
        if(dados.atributos[i].altura < dados.atributos[j].altura){
            maior = dados.atributos[i].altura;
        }else if (dados.atributos[i].altura > dados.atributos[j].altura) {
            menor = dados.atributos[j].altura;
        }
    }

    console.log(maior);
    console.log(menor);
}
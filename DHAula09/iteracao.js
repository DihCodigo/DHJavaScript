const numeros = [10, 20, 19, 10, 15, 20, 21, 30, 100, 30, 20];
const textos = ['dez', 'vinte', 'trinta'];

// numeros.forEach((item) => console.log(item));

let busca = 0;

console.log(numeros);

numeros.forEach((item) => {
  let index;

  if (
    item === 10 ||
    item === 20 ||
    item === 30
    ) {
      index = numeros.indexOf(item, busca);
      let texto;

      switch(item) {
        case 10:
          texto = textos[0];
        break;
        case 20:
          texto = textos[1];
        break;
        case 30:
          texto = textos[2];
        break;
      }

      numeros.splice(index, 1, texto);
      busca++;

  }
});

console.log(numeros);
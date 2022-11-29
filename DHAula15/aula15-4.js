// Rest Operator
function soma(...args) {
    let soma = 0;

    args.forEach((arg) => soma += arg);
    return soma;
}

console.log(soma(5.5,25,55,120));

for (var i=0; i< 50; i+=10){
    console.log(i);
}



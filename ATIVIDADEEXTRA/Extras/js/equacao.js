"use strict";

//declarando variaveis referente as id do botão
let button = document.getElementById('calcular');
let button_limpar = document.getElementById('limpar');

button.addEventListener('click', calculo);
button_limpar.addEventListener('click', limpar);

//parseFloat converte aquele valor de Inteiro por padrão para numeros floats
function calculo(e) {
    e.preventDefault();//para impedir que a página HTML sofra refresh
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    //Math pow quando o numero esta elevado
    let delta = Math.pow(num2, 2) - 4 * num1 * num3;
    alert(`O delta é: ${delta}`);
    if (delta > 0) {

        //sqrt() função para tirar a raiz de um numero
        let raiz1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
        let raiz2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
        document.getElementById("resultado").innerHTML = "Raiz 1 = " + raiz1 + "<br>" + "Raiz 2 = " + raiz2;

    } else if (delta === 0) {
        let raizUnica = (-num2 + Math.sqrt(delta)) / (2 * num1);
        document.getElementById("resultado").innerHTML = "Raiz única = " + raizUnica;
    } else if (delta < 0) {
        document.getElementById("resultado").innerHTML = "Delta < 0, não existem raízes no conjunto dos números reais.";
    }
}

function limpar(e) {
    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('num3').value = " ";
    document.getElementById('resultado').innerHTML = null;
}
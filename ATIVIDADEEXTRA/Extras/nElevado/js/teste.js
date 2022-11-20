function calcular() {

    let numero = document.getElementById('num').value;
    let elevado = document.getElementById('elev').value;
    
    let resultado = numero ** elevado;
    window.alert(resultado);
}
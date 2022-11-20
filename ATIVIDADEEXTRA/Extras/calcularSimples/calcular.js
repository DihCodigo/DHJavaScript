function somar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let res = n1 + n2;
    window.alert(res);
}

function subtrair() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let res = n1 - n2;
    window.alert(res);
}

function multiplicar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let res = n1 * n2;
    window.alert(res);
}

function dividir() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let res = n1 / n2;
    window.alert(res);
}

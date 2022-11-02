function podeSubir(altura, acompanhantes = 0){
    if(altura >= 1.4 && altura < 2){
        return true
    }else if (altura < 1.4 && acompanhantes >= 1) {
        return true
    }else if(altura <= 1.3 && acompanhantes === 0) {
        return false
    }
}
console.log(podeSubir(1.3, 0))

function podeSubir(altura, acompanhantes = 0){
    text = ''
    if(altura >= 1.4 && altura < 2){
        text = "Acesso autorizado"
    }else if (altura < 1.4 && acompanhantes >= 1) {
        text = "Acesso autorizado somente com acompanhantes"
    }else if(altura <= 1.3 && acompanhantes === 0) {
        text = "Acesso Negado"
    }
    return text
}
console.log(podeSubir(1.5, 0))


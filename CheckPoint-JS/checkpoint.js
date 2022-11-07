/*César Diego Anovich*/

let menu = 'Carne';
let exibirMsg;
let tempo = 10;
let tempoAdd = 0;

switch (menu) {
    case 'Pipoca':
        console.log('Botão Pipoca acionado!')

        function prepararPipoca(tempoPadrao = tempo) {
            const resultado = tempoAdd + tempoPadrao;
            return resultado
        }

        console.log("Tempo Adicionado: " + prepararPipoca("\nTempo Padrão: " + tempo))

        if (prepararPipoca(tempo) > 10 && prepararPipoca(tempo) <= 30) {
            exibirMsg = 'Prato Queimado!'
        } else if (prepararPipoca(tempo) < 10) {
            exibirMsg = 'Tempo Insuficiente!'
        }else if (prepararPipoca(tempo) > 30){
            exibirMsg = 'Kabum!'
        }else if (prepararPipoca(tempo) == 10) {
            exibirMsg = 'Prato pronto, bom apetite!!'
        }

        console.log(exibirMsg)
        break;

    case 'Macarrão':
        console.log('Botão Macarrão acionado!')

        function prepararMacarrao(tempoPadrao = tempo) {
            const resultado = tempoAdd + tempoPadrao;
            return resultado
        }

        console.log("Tempo Adicionado: " + prepararMacarrao("\nTempo Padrão: " + tempo))

        if (prepararMacarrao(tempo) > 8  && prepararMacarrao(tempo) <= 24) {
            exibirMsg = 'Prato Queimado!'
        } else if (prepararMacarrao(tempo) < 8) {
            exibirMsg = 'Tempo Insuficiente!'
        }else if (prepararMacarrao(tempo) > 24){
            exibirMsg = 'Kabum!'
        }else if (prepararMacarrao(tempo) == 8) {
            exibirMsg = 'Prato pronto, bom apetite!!'
        }

        console.log(exibirMsg)
        break;
        
    case 'Carne':
        console.log('Botão Carne acionado!')

        function prepararCarne(tempoPadrao = tempo) {
            const resultado = tempoAdd + tempoPadrao;
            return resultado
        }

        console.log("Tempo Adicionado: " + prepararCarne("\nTempo Padrão: " + tempo))

        if (prepararCarne(tempo) > 15 && prepararCarne(tempo) <= 45) {
            exibirMsg = 'Prato Queimado!'
        } else if (prepararCarne(tempo) < 15) {
            exibirMsg = 'Tempo Insuficiente!'
        }else if (prepararCarne(tempo) > 45){
            exibirMsg = 'Kabum!'
        }else if (prepararCarne(tempo) == 15) {
            exibirMsg = 'Prato pronto, bom apetite!!'
        }

        console.log(exibirMsg)
        break;

    case 'Feijão':
        console.log('Botão Feijão acionado!')

        function prepararFeijao(tempoPadrao = tempo) {
            const resultado = tempoAdd + tempoPadrao;
            return resultado
        }

        console.log("Tempo Adicionado: " + prepararFeijao("\nTempo Padrão: " + tempo))

        if (prepararFeijao(tempo) > 12 && prepararFeijao(tempo) <= 36) {
            exibirMsg = 'Prato Queimado!'
        } else if (prepararFeijao(tempo) < 12) {
            exibirMsg = 'Tempo Insuficiente!'
        }else if (prepararFeijao(tempo) > 36){
            exibirMsg = 'Kabum!'
        }else if (prepararFeijao(tempo) == 12) {
            exibirMsg = 'Prato pronto, bom apetite!!'
        }

        console.log(exibirMsg)

        break;

    case 'Brigadeiro':
        console.log('Botão Brigadeiro acionado!')

        function prepararBrigadeiro(tempoPadrao = tempo) {
            const resultado = tempoAdd + tempoPadrao;
            return resultado
        }

        console.log("Tempo Adicionado: " + prepararBrigadeiro("\nTempo Padrão: " + tempo))

        if (prepararBrigadeiro(tempo) > 8 && prepararBrigadeiro(tempo) <= 24) {
            exibirMsg = 'Prato Queimado!'
        } else if (prepararBrigadeiro(tempo) < 8) {
            exibirMsg = 'Tempo Insuficiente!'
        } else if (prepararBrigadeiro(tempo) > 24){
            exibirMsg = 'Kabum!'
        } else if (prepararBrigadeiro(tempo) == 8) {
            exibirMsg = 'Prato pronto, bom apetite!!'
        }

        console.log(exibirMsg)

        break;

    default:
        console.log("Opção indefinida!")
        break;
}




const { inputNum, dividirNumeros, divulgarResultado, validacao } = require('./calculadora');
const { inputConcat, concatenar, resultadoConcat } = require('./gerenciaDeNomes');
require("./style.css") // OU import "./style.css" 

document.getElementById("btn-nome").addEventListener("click", juntarTextos)
document.getElementById("btn-dividir").addEventListener("click", divisao)


function juntarTextos() {

    //PEGAR INPUTS 
    const valueNome = inputConcat("idNome")
    const valueSobrenome = inputConcat("idSobrenome")

    //PRPCESSAMENTO
    const nomeCompleto = concatenar(valueNome, valueSobrenome)

    //MOSTRAR NA TELA
    resultadoConcat(nomeCompleto)
}

function divisao() {
    const valueNum1 = inputNum("idNum1")
    const valueNum2 = inputNum("idNum2")

    if (validacao(valueNum1, valueNum2)) {
        const resultadoDivisao = dividirNumeros(valueNum1, valueNum2)

        divulgarResultado(resultadoDivisao)
    }


}



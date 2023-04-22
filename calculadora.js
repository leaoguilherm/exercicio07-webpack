function inputNum(valor) {
    const valueNumero = Number(document.getElementById(valor).value)
    return valueNumero
}
function validacao(valor1, valor2){
    document.getElementById("retornoDivisao").innerHTML = ""
    const elementoValidacao = document.getElementById("validacao")

    if (valor1 < 0 || valor2 < 0) {
        elementoValidacao.innerHTML = "Não é possível números negativos."
        elementoValidacao.style.display = "block"
        return false
    } 

    if (valor2 == 0) {
        elementoValidacao.innerHTML = "Não é possível dividir por 0."
        elementoValidacao.style.display = "block"
        return false
    }

    else {
        elementoValidacao.style.display = "none"
        return true
    }
    
}

function dividirNumeros(valor1, valor2) {
    const resultadoDivisao = valor1 / valor2
    return resultadoDivisao
}

function divulgarResultado(resultado) {
    document.getElementById("retornoDivisao").innerHTML = resultado
}

module.exports = {
    inputNum,
    dividirNumeros,
    divulgarResultado,
    validacao
}
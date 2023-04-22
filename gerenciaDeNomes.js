function inputConcat(id){
    const valueInput = document.getElementById(id).value
    return valueInput
}

function concatenar(value1, value2){
    const nomeCompleto = `${value1} ${value2}`
    return nomeCompleto
}

function resultadoConcat(nomeCompleto) {
    const elemento = document.getElementById("retornoConcat")

    elemento.innerHTML = nomeCompleto
}

module.exports = {
    inputConcat,
    concatenar,
    resultadoConcat
}
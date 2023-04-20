juntarTextos()
function juntarTextos(){
    const valueNome = inputConcat("idNome")
    const valueSobrenome = inputConcat("idSobrenome")

    const resultado = concatenar(valueNome, valueSobrenome)
}

function inputConcat(id){
    const valueInput = Number(document.getElementById(id).value)
    return valueInput
}

function concatenar(value1, value2){
    const nomeCompleto = value1 + value2
    return nomeCompleto
}

module.exports = {
    juntarTextos,
    concatenar
}
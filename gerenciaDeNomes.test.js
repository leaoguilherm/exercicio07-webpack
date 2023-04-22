const { concatenar, inputConcat } = require("./gerenciaDeNomes")


// describe("Módulo inputs", () => {
//     it("Deve retornor 'Gui' do input", () => {
//         document.getElementById("idNome").value = "Gui"
        
//         const id = "idNome"

//         const retorno = inputConcat(id)
//         const retornoCorreto = "Gui"

//         expect(retorno).toBe(retornoCorreto)
//     })
// })

describe("Módulo concatenar nomes", () => {
    it("Deve retornar 'Guilherme Leão'", () => {
        const nome = "Guilherme"
        const sobrenome = "Leão"

        const retorno = concatenar(nome, sobrenome)
        const retornoCorreto = "Guilherme Leão"

        expect(retorno).toBe(retornoCorreto)
    })
})
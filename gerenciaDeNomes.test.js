const { juntarTextos, concatenar } = require("./gerenciaDeNomes")


describe("Módulo concatenar nomes", () => {
    it("Deve retornar 'Guilherme Leão'", () => {
        const nome = "Guilherme"
        const sobrenome = "Leão"

        const retorno = concatenar(nome, sobrenome)
        const retornoCorreto = "Guilherme Leão"

        expect(retorno).toBe(retornoCorreto)
    })
})
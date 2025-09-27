const { pesquisarPessoaPorCPF } = require('../src/pesquisar.js')
const { strictEqual } = require('node:assert')

describe ('pesquisar', () =>{
    it('Ao informar um CPF, teremos o nome, CPF do CPF pesquisado', () =>{
     
   //Arrange

    const cpfPesquisado = '98765432-1'
    const nomeEsperado = 'Isabelle'
    const cpfEsperado = '98765432-1'

    //Act

    const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

    // Assert

    strictEqual(pessoa.nome, nomeEsperado)
    strictEqual(pessoa.cpf, cpfEsperado)

    })

    it('Ao informar um CPF inexistente, deve retornar: Pessoa não encontrada', () =>{
        //Arrange
        const cpfPesquisado = '000000000'
        const mensagemEsperada = 'Pessoa não encontrada'
   
        //Act

        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        // Assert 

        strictEqual(pessoa, mensagemEsperada)
    })
    
})


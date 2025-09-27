const{ linguagemDosGatosEcachorros } = require ('../src/comunicacao.js')
const {strictEqual} = require('node:assert')
describe ('Comunicação', () =>{
    it ('Quando informar cachorro deve retornar au au', () => {
        //Arrange (Preparar)
        const animal = 'cachorro'
        // Act (Agir)
        const comunicacao = linguagemDosGatosEcachorros (animal)
        //Assert (Verificar ou Checagem)
        strictEqual(comunicacao, 'auau')
     })  

     it ('Quando informar gato deve retornar miau', () => {
        //Arrange (Preparar)
        const animal = 'gato'
        // Act (Agir)
        const comunicacao = linguagemDosGatosEcachorros (animal)
        //Assert (Verificar ou Checagem)
        strictEqual(comunicacao, 'miau')
     }) 

         it ('Quando informar arara deve retornar informe gato ou cachorro', () => {
        //Arrange (Preparar)
        const animal = 'arara'
        // Act (Agir)
        const comunicacao = linguagemDosGatosEcachorros (animal)
        //Assert (Verificar ou Checagem)
        strictEqual(comunicacao, 'informe gato ou cachorro')
     }) 
})
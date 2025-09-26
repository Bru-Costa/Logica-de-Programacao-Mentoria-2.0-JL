/* executando um teste isolado :

const {comunicacaoDosAnimais} = require ('../src/comunicacao.js')
const comoOcachorroSeComunica = comunicacaoDosAnimais('cachorro')
console.log(comoOcachorroSeComunica)  */

/* Criando uma automatização:*/

const {comunicacaoDosAnimais} = require ('../src/comunicacao.js')
describe ('comunicacao', function(){

    it ('validar que o cachooro se comunica com au au', function(){
        //teste
    })
    //Assim podemos compilar diversos testes
})
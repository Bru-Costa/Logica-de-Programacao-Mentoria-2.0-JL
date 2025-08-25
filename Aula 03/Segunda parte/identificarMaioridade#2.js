// Usando a Function de forma mais detalhada:

function identificarMaioridade(nome, idade) {
// Se a idade fornecida for maior ou igual a 18 retorne 'Maior', senão retorne 'Maior'

    if (idade >= 18)
        return 'Maioridade do ' + nome + ': ' + 'Maior'
    else 
        return 'Maioridade do ' + nome + ': ' + 'Menor'
}

const maioridadeDoMarcos = identificarMaioridade('Marcos', 46)
console.log(maioridadeDoMarcos)  

const maioridadeDoRonaldo = identificarMaioridade('Ronaldo', 54)
console.log(maioridadeDoRonaldo)  

const maioridadeDoLucas = identificarMaioridade('Lucas', 14)
console.log(maioridadeDoLucas)  

//Criando a função com interpolação
// Realizando diferenciação de maturidade utilizando else if

function identificarMaioridade(nome, idade) {
// Se a idade fornecida for maior ou igual a 18 retorne 'Maior', senão retorne 'Maior'

    if (idade >= 18)
        if(idade >= 50)
          return `Maioridade do ${nome}: Maduro`
        else
            return `Maioridade do ${nome}: Adulto`
 
    else if (idade >= 12)
        return `Maioridade do ${nome}: Adolescente`
    else
        return `Maioridade do ${nome}: Criança`
}

const maioridadeDoMarcos = identificarMaioridade('Marcos', 46)
console.log(maioridadeDoMarcos) 

const maioridadeDoRonaldo = identificarMaioridade('Ronaldo', 54)
console.log(maioridadeDoRonaldo) 

const maioridadeDoLucas = identificarMaioridade('Lucas', 15)
console.log(maioridadeDoLucas)

const maioridadeDoJoao = identificarMaioridade('João', 9)
console.log(maioridadeDoJoao)
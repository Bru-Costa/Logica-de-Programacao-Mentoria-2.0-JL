//Criando a função com interpolação

function identificarMaioridade(nome, idade) {
// Se a idade fornecida for maior ou igual a 18 retorne 'Maior', senão retorne 'Maior'

    if (idade >= 18)
        return `Maioridade do ${nome}: Maior`
    else 
        return `Maioridade do ${nome}: Menor`
}

const maioridade = identificarMaioridade('Marcos', 46)
console.log(maioridade)  

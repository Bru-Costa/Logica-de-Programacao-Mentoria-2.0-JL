function identificarMaioridade(idade) {
// Se a idade fornecida for maior ou igual a 18 retorne 'Maior', senão retorne 'Maior'

    if (idade >= 18)
        return 'Maior'
    else 
        return 'Menor'
}

const maioridade = identificarMaioridade(46)
console.log(maioridade)  

function calcularDesconto(valorDoDesconto, ValorDoProduto){
    return ValorDoProduto - valorDoDesconto
}

const valorFinalDoProduto = calcularDesconto(10.00, 55.00)

console.log(valorFinalDoProduto)
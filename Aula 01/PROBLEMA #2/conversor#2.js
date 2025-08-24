//Informe o valor do produto
const valorDoProduto = 55.00

//Calcule o percentual do desconto
const percentualDoDesconto = 10.00

//Calcule o valor do desconto
const valorDoDesconto = (percentualDoDesconto * valorDoProduto)/100

//Subtraia o valor do produto pelo valor do desconto (valor a pagar)
const valorFinalDoProduto = valorDoProduto - valorDoDesconto

//Mostrar valor final do produto
console.log(valorFinalDoProduto)
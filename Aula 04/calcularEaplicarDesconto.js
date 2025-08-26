function calcularEAplicarDesconto (valorDoPedido, tipoDoCliente){
 let  valorFinalDoPedido
   
 if (tipoDoCliente === 'vip'){
        valorFinalDoPedido = valorDoPedido - (valorDoPedido * 10 / 100)
    } else {
        valorFinalDoPedido = valorDoPedido
    }

    return valorFinalDoPedido
}

const resultadoDoPedidoComDesconto = calcularEAplicarDesconto(500.00, 'vip')
console.log(resultadoDoPedidoComDesconto)

const resultadoDoPedidoSemDesconto = calcularEAplicarDesconto (500.00, '')
console.log(resultadoDoPedidoSemDesconto)

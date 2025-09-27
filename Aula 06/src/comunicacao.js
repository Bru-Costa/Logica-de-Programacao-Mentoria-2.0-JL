function linguagemDosGatosEcachorros(animal){
    if(animal == 'cachorro')
        return 'auau'
    else if(animal == 'gato')
        return 'miau'
    else 
        return 'informe gato ou cachorro'
}

module.exports  = {
    linguagemDosGatosEcachorros
}
// Desenhando a Função!
function calcularMedia(primeiroNumero, segundoNumero, terceiroNumero) {
  const somaDosTresValores = primeiroNumero + segundoNumero + terceiroNumero
  const resultadoDaMedia = somaDosTresValores / 3
  return resultadoDaMedia
}

// Usar a Função!
const resultadoDaMediaDoMarcio = calcularMedia(5, 7, 9)
console.log('Média do Márcio: ' + resultadoDaMediaDoMarcio)

const resultadoDaMediaDaBea = calcularMedia(4, 8, 12)
console.log('Média da Bea: ' + resultadoDaMediaDaBea)


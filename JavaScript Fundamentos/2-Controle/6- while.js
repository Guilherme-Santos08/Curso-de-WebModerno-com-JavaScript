function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

//  While precisa de exprssões verdadeira ou falsa
while(opcao != -1) { // lembrando que "!= é diferente".
  opcao = getInteiroAleatorioEntre(-1, 10) // vai gerar números aleatorio até achar o -1
  console.log(`Opcão escolha foi ${opcao}`)
} 

console.log('Até a próxima!')

// While é baseado em uma estrutura de repetição.
//Quando a expressão for verdadeira continua, quando for falsa ela sai do laço
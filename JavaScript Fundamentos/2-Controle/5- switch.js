const imprimirResulatado = function (nota) {
  switch (Math.floor(nota)) { // floor aredonda pra baixo
    case 10:
    case 9:
      console.log('Quadro de Honra')
      break // sempre que colocarmos case vamos precisar colocar o switch, se não colocarmos ele vai continuar lendo os outros case.
    case 8: case 7:
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default: // o default pode ficar em qualquer posição, se colocarmos em uma posição que não seja o final, vai precisar colocar o break
      console.log('Nota inválida')     
    }
}

imprimirResulatado(10)
imprimirResulatado(8.9)
imprimirResulatado(6.55)
imprimirResulatado(2.3)
imprimirResulatado(-1)
imprimirResulatado(11)

// switch é uma seleção multipla. Switch não é uma espressão relacional, que retornar um valor verdadeirou faço e precisamos usar o break para sair de uma seleção, se não colocarmos ele vai ler todos os case abaixo.
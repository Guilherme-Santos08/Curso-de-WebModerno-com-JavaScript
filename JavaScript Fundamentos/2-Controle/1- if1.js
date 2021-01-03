function soBoaNoticia (nota) {
  if (nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log('É verdade... ' + valor)
  }
}
// Valores falso não iram imprimir
seForVerdadeEuFalo() // vai ser underfined então não vai imprimir
seForVerdadeEuFalo(null) // não vai imprimir porque é falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN) // falso
seForVerdadeEuFalo('') // falso
seForVerdadeEuFalo(0) // falso
seForVerdadeEuFalo(-1) // verdadeiro
seForVerdadeEuFalo(' ') // verdadeiro
seForVerdadeEuFalo('?') // verdadeiro
seForVerdadeEuFalo([]) // array vazio e verdadeiro
seForVerdadeEuFalo([1, 2]) //verdadeiro
seForVerdadeEuFalo({}) // objeto vazio tambem e verdadeiro
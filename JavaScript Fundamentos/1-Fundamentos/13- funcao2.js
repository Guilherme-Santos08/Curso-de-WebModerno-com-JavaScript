// Armazenando uma funcao em uma varíavel
const imprirSoma = function (a, b) {   // Essa é uma função anonima, função sem nome
  console.log(a + b)
}

imprirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { // Essa setinha significa função, uma arrow function
  return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
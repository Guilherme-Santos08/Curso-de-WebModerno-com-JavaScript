// Funcao sem retorno
function soma (a, b) {
   console.log(a + b)
}
soma(10, 10)

// Funcao  com retorno
function subtracao (a, b) {
   return a - b
}
console.log(subtracao(10, 5))

function multiplicacao (a, b) {
   return a * b
}
console.log(multiplicacao(5, 3))

function divisao (a, b) {
   return a / b
}
console.log(divisao(20, 4 ))

// Armazenando funcao em uma variavel 
const soma2 = function (a, b) {
   console.log(a + b)
}
soma2(9, 20)

// Armazenando uma funcao arrow em uma variavel
const subtracao2 = (a, b) => {
   return(a - b)
}
console.log(subtracao2(40, 18))

const multiplicacao2 = (a, b) => {
   return(a * b)
}
console.log(multiplicacao2(6, 5))

const divisao2 = (a, b) => {
   return (a / b)
}
console.log(divisao2(30, 3))
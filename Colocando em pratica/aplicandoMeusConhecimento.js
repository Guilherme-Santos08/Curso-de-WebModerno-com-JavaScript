// Funcao sem retorno
function soma (a, b) {
   console.log(a + b, 'soma')
}
soma(10, 10)

// Funcao  com retorno
function subtracao (a, b) {
   return a - b
}
console.log(subtracao(10, 5),'subtracao')

function multiplicacao (a, b) {
   return a * b
}
console.log(multiplicacao(5, 3), 'multiplicacao')

function divisao (a, b) {
   return a / b
}
console.log(divisao(20, 4 ), 'divisao')

// Armazenando funcao em uma variavel 
const soma2 = function (a, b) {
   console.log(a + b, 'soma2')
}
soma2(9, 20)

// Armazenando uma funcao arrow em uma variavel
const subtracao2 = (a, b) => {
   return(a - b)
}
console.log(subtracao2(40, 18), 'subtracao2')

const multiplicacao2 = (a, b) => {
   return(a * b)
}
console.log(multiplicacao2(6, 5), 'multiplicacao2')

const divisao2 = (a, b) => {
   return (a / b)
}
console.log(divisao2(30, 3), 'divisao2')

// Objetos
const prod1 = {} // {} <== usada em obejetos
prod1.nome = 'Playstation 5'
prod1.preco = 4999.98
prod1['A vista tera desconto de'] = 0.60 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
   nome: 'DualSense',
   preço: 469.00
}

console.log(prod2)
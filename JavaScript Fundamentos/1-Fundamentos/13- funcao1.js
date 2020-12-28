// Funcao sem retorno
function imprimirSoma(a, b) {
 console.log(a + b)
}

imprimirSoma(2, 3)  // Vou chamar o (a + b), coloquei o 2 no lugar do a e 3 no lugar do b.
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Ele vai pegar o 2,10 e vai somar, o resto ele vai ingnorar
imprimirSoma()

// Funcao com retorno
function soma (a, b = 1){ // Se eu esquecer de retornar algum numero, esse 1 irar cobrir o número que esqueci de colocar
  return a + b
} 

console.log(soma(2, 3))
console.log((2))
console.log(soma())
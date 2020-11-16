const escola = "Cod3r"

console.log(escola.charAt(4)) // O .charAt vai me da a 4 letra do indice 4
console.log(escola.charAt(5)) // Vai ficar em branco
console.log(escola.charCodeAt(3)) // charCodeAt vai mostrar dentro da tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// Vai imprimir do indice 1 para frente
console.log(escola.substring(0, 3)) //Vai de 0 a 3 sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // .replace tiro o 3 e adicionou o 'e'

console.log('Ana, Maria, Pedro'.split(',')) // .split tranforma a string em um array

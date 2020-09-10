console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana') // Forma não recomenda de criar Array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Notação recomendada pra usar no dia a dia
console.log(aprovados [0])
console.log(aprovados [1])
console.log(aprovados [2])
console.log(aprovados [3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o conteudo do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados [1])
console.log(aprovados [2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // splice serve para adcionar elementos em determinados indices, como tambem serve para remover elementos de um array, tambem serve para remover e adcionar elementos
console.log(aprovados)
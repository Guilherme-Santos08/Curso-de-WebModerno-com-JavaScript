// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) // .size quantos times tem dentro do "times"
console.log(times.has('vasco')) // .has Estou perguntando se existe "vasco" nos "times"
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia','Lucas',]
const nomesSet = new Set(nomes)
console.log(nomesSet)